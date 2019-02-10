import Fuse, { FuseOptions } from "fuse.js";
import { Component } from "react";
import { Disposer, Emitter } from "./behaviorStore";

export type PreFilterHandler<T> = (
  match: string,
  items: Array<Item<T>>,
  fuse: typeof Fuse
) => Array<Item<T>>;

export interface PreFilter<T> {
  regex: RegExp;
  handler: PreFilterHandler<T>;
}
export type Item<T> = T;

export interface FilterResultsProps<T> {
  children: (items: Array<Item<T>>) => JSX.Element;
  items: Array<Item<T>>;
  defaultAllItems?: boolean;
  fuseConfig: FuseOptions;
  prefilters?: Array<PreFilter<T>>;
}

interface FilterResultsState {
  search: string;
}

export type FilterResults<T> = React.ComponentType<FilterResultsProps<T>>;

export default function filterResultsFactory<T>(
  store: Emitter<string>
): FilterResults<T> {
  class Results<U> extends Component<
    FilterResultsProps<U>,
    FilterResultsState
  > {
    static displayName = "FilterResults";
    static defaultProps = {
      defaultAllItems: true,
      prefilters: [],
    };
    state = {
      search: "",
    };
    // tslint:disable-next-line:no-empty
    unsubscribe: Disposer = () => {};

    componentDidMount() {
      this.unsubscribe = store.on(search => {
        this.setState({ search });
      });
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    prefilterItems(search: string): { items: Array<Item<U>>; search: string } {
      let items = this.props.items;
      (this.props.prefilters || []).forEach(({ regex, handler }) => {
        const matches = search.match(regex) || [];
        search = search.replace(regex, "").trim();
        matches.forEach(match => {
          items = handler(match, items, Fuse);
        });
      });
      return { items, search };
    }

    filterItems(): Array<Item<U>> {
      const { items, search } = this.prefilterItems(this.state.search || "");
      if (search.trim() === "") {
        return this.props.defaultAllItems ? items : [];
      } else {
        const fuse = new Fuse(items, this.props.fuseConfig);
        return fuse.search(search);
      }
    }

    render() {
      const filteredItems = this.filterItems();
      return this.props.children(filteredItems);
    }
  }

  return Results;
}

import Fuse, { FuseOptions } from "fuse.js";
import React, { useEffect, useState } from "react";
import { Emitter } from "./behaviorStore";

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
  children: (items: Array<Item<T>>) => React.ReactElement | null;
  items: Array<Item<T>>;
  defaultAllItems?: boolean;
  fuseConfig: FuseOptions;
  prefilters?: Array<PreFilter<T>>;
}

export type FilterResults<T> = React.FunctionComponent<FilterResultsProps<T>>;

export default function filterResultsFactory<T>(
  store: Emitter<string>
): FilterResults<T> {
  const Results: FilterResults<T> = (props: FilterResultsProps<T>) => {
    const [searchVal, setSearch] = useState("");

    useEffect(() => {
      const unsubscribe = store.on(val => {
        setSearch(val);
      });
      return unsubscribe;
    }, []);

    const prefilterItems = (
      s: string
    ): { items: Array<Item<T>>; search: string } => {
      let items = props.items;
      (props.prefilters || []).forEach(({ regex, handler }) => {
        const matches = s.match(regex) || [];
        s = s.replace(regex, "").trim();
        matches.forEach(match => {
          items = handler(match, items, Fuse);
        });
      });
      return { items, search: s };
    };

    const filterItems = (s: string): Array<Item<T>> => {
      const { items, search } = prefilterItems(s || "");
      if (search.trim() === "") {
        return props.defaultAllItems ? items : [];
      } else {
        const fuse = new Fuse(items, props.fuseConfig);
        return fuse.search(search);
      }
    };

    const filteredItems = filterItems(searchVal);
    return props.children(filteredItems);
  };
  Results.displayName = "FilterResults";
  Results.defaultProps = {
    defaultAllItems: true,
    prefilters: [],
  };

  return Results;
}

import { Component } from "react";
import PropTypes from "prop-types";
import Fuse from "fuse.js";

export default function filterResultsFactory(store) {
  class FilterResults extends Component {
    static displayName = "FilterResults";

    static propTypes = {
      children: PropTypes.func.isRequired,
      items: PropTypes.array.isRequired,
      defaultAllItems: PropTypes.bool,
      fuseConfig: PropTypes.shape({
        location: PropTypes.number,
        distance: PropTypes.number,
        threshold: PropTypes.number,
        maxPatternLength: PropTypes.number,
        caseSensitive: PropTypes.bool,
        tokenSeparator: PropTypes.any,
        findAllMatches: PropTypes.bool,
        minMatchCharLength: PropTypes.number,
        id: PropTypes.string,
        keys: PropTypes.array.isRequired,
        shouldSort: PropTypes.bool,
        getFn: PropTypes.func,
        sortFn: PropTypes.func,
        tokenize: PropTypes.bool,
        matchAllTokens: PropTypes.bool,
        includeScore: PropTypes.bool,
        includeMatches: PropTypes.bool,
        verbose: PropTypes.bool
      }).isRequired,
      prefilters: PropTypes.arrayOf(
        PropTypes.shape({
          regex: PropTypes.any.isRequired,
          handler: PropTypes.func.isRequired
        }).isRequired
      ).isRequired
    };

    static defaultProps = {
      defaultAllItems: true,
      prefilters: []
    };

    state = {
      search: null
    };

    componentDidMount() {
      this.unsubscribe = store.on(search => {
        this.setState({ search });
      });
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    prefilterItems(search) {
      let items = this.props.items;
      this.props.prefilters.forEach(({ regex, handler }) => {
        const matches = search.match(regex) || [];
        search = search.replace(regex, "").trim();
        matches.forEach(match => {
          items = handler(match, items, Fuse);
        });
      });
      return { items, search };
    }

    filterItems() {
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

  return FilterResults;
}

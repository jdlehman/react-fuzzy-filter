import React, {PropTypes, Component} from 'react';
import Fuse from 'fuse.js';

export default function filterResultsFactory(store) {
  class FilterResults extends Component {
    static displayName = 'FilterResults';

    static propTypes = {
      renderItem: PropTypes.func.isRequired,
      items: PropTypes.array.isRequired,
      defaultAllItems: PropTypes.bool,
      classPrefix: PropTypes.string,
      wrapper: PropTypes.any,
      wrapperProps: PropTypes.object,
      renderContainer: PropTypes.func,
      fuseConfig: PropTypes.shape({
        keys: PropTypes.array.isRequired,
        id: PropTypes.string,
        caseSensitive: PropTypes.bool,
        shouldSort: PropTypes.bool,
        searchFn: PropTypes.func,
        getFn: PropTypes.func,
        sortFn: PropTypes.func,
        location: PropTypes.number,
        threshold: PropTypes.number,
        distance: PropTypes.number,
        maxPatternLength: PropTypes.number,
        verbose: PropTypes.bool,
        tokenize: PropTypes.bool,
        tokenSeparator: PropTypes.any
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
      classPrefix: 'react-fuzzy-filter',
      wrapperProps: {},
      prefilters: []
    };

    state = {
      search: null
    };

    componentDidMount() {
      this.subscription = store.subscribe(search => this.setState({search}));
    }

    componentWillUnmount() {
      this.subscription.unsubscribe();
    }

    prefilterItems(search) {
      let items = this.props.items;
      this.props.prefilters.forEach(({regex, handler}) => {
        const matches = search.match(regex) || [];
        search = search.replace(regex, '').trim();
        matches.forEach(match => {
          items = handler(match, items, Fuse);
        });
      });
      return {items, search};
    }

    filterItems() {
      const {items, search} = this.prefilterItems(this.state.search || '');
      if (search.trim() === '') {
        return this.props.defaultAllItems ? items : [];
      } else {
        const fuse = new Fuse(items, this.props.fuseConfig);
        return fuse.search(search);
      }
    }

    renderItems(items) {
      return items.map((item, i) => this.props.renderItem(item, i));
    }

    render() {
      const rawItems = this.filterItems();
      const items = this.renderItems(rawItems);
      if (typeof this.props.renderContainer === 'function') {
        return this.props.renderContainer(items, rawItems);
      }
      if (this.props.wrapper) {
        return React.createElement(this.props.wrapper, this.props.wrapperProps, items);
      }
      return (
        <span className={`${this.props.classPrefix}__results-container`}>
          {items}
        </span>
      );
    }
  }

  return FilterResults;
}

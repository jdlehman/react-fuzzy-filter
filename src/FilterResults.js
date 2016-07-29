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
      initialSearch: PropTypes.string,
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
      }).isRequired
    };

    static defaultProps = {
      defaultAllItems: true,
      classPrefix: 'react-fuzzy-filter',
      wrapperProps: {},
      initialSearch: ''
    };

    state = {
      search: this.props.initialSearch,
      fuse: new Fuse(this.props.items, this.props.fuseConfig)
    };

    componentDidMount() {
      this.subscription = store.subscribe(search => this.setState({search}));
    }

    componentWillReceiveProps({items, fuseConfig}) {
      this.setState({fuse: new Fuse(items, fuseConfig)});
    }

    componentWillUnmount() {
      this.subscription.unsubscribe();
    }

    renderItems() {
      let items;
      if (!this.state.search || this.state.search.trim() === '') {
        items = this.props.defaultAllItems ? this.props.items : [];
      } else {
        items = this.state.fuse.search(this.state.search);
      }
      return items.map((item, i) => this.props.renderItem(item, i));
    }

    render() {
      const items = this.renderItems();
      if (this.props.wrapper) {
        return React.createElement(this.props.wrapper, this.props.wrapperProps, items);
      } else {
        return (
          <span className={`${this.props.classPrefix}__results-container`}>
            {items}
          </span>
        );
      }
    }
  }

  return FilterResults;
}

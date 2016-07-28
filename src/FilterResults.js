import React, {PropTypes, Component} from 'react';
import fuzzysearch from 'fuzzysearch';

export default function filterResultsFactory(store) {
  class FilterResults extends Component {
    static displayName = 'FilterResults';

    static propTypes = {
      searchKey: PropTypes.string.isRequired,
      renderItem: PropTypes.func.isRequired,
      items: PropTypes.array.isRequired,
      defaultAllItems: PropTypes.bool,
      classPrefix: PropTypes.string,
      wrapper: PropTypes.any,
      wrapperProps: PropTypes.object,
      initialSearch: PropTypes.string
    };

    static defaultProps = {
      searchKey: 'searchData',
      defaultAllItems: true,
      classPrefix: 'react-fuzzy-filter',
      wrapperProps: {},
      initialSearch: ''
    };

    state = {
      search: this.props.initialSearch
    };

    componentDidMount() {
      this.subscription = store.subscribe(search => this.setState({search}));
    }

    componentWillUnmount() {
      this.subscription.unsubscribe();
    }

    renderItems() {
      return this.props.items
        .filter(item => {
          if (this.state.search === '') {
            return this.props.defaultAllItems;
          } else if (!item[this.props.searchKey]) {
            return false;
          } else {
            return fuzzysearch(this.state.search, item[this.props.searchKey]);
          }
        })
        .map((item, i) => this.props.renderItem(item, i));
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

import React, {PropTypes, Component} from 'react';
import fuzzysearch from 'fuzzysearch';

export default class ReactFuzzyFilter extends Component {
  static displayName = 'ReactFuzzyFilter';

  static propTypes = {
    searchKey: PropTypes.string.isRequired,
    renderItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    defaultAllItems: PropTypes.bool,
    classPrefix: PropTypes.string,
    initialSearch: PropTypes.string,
    inputProps: PropTypes.object
  };

  static defaultProps = {
    searchKey: 'searchData',
    items: [],
    defaultAllItems: true,
    classPrefix: 'react-fuzzy-filter',
    initialSearch: '',
    inputProps: {}
  };

  state = {
    search: this.props.initialSearch
  };

  renderItems() {
    return this.props.items
      .filter(item => this.state.search === '' ? this.props.defaultAllItems : fuzzysearch(this.state.search, item[this.props.searchKey]))
      .map((item, i) => this.props.renderItem(item, i));
  }

  render() {
    return (
      <span className={`${this.props.classPrefix}__container`}>
        <input
          className={`${this.props.classPrefix}__input`}
          onChange={({target: {value}}) => this.setState({search: value})}
          {...this.props.inputProps}
        />
        <span className={`${this.props.classPrefix}__items-container`}>
          {this.renderItems()}
        </span>
      </span>
    );
  }
}

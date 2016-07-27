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
    inputProps: PropTypes.object,
    resultsWrapper: PropTypes.any,
    inputWrapper: PropTypes.any
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

  renderInput() {
    const input = (
      <input
        className={`${this.props.classPrefix}__input`}
        onChange={({target: {value}}) => this.setState({search: value})}
        {...this.props.inputProps}
      />
    );
    if (this.props.inputWrapper) {
      return React.createElement(this.props.inputWrapper, {}, input);
    } else {
      return input;
    }
  }

  renderResults() {
    const results = (
      <span className={`${this.props.classPrefix}__items-container`}>
        {this.renderItems()}
      </span>
    );
    if (this.props.resultsWrapper) {
      return React.createElement(this.props.resultsWrapper, {}, results);
    } else {
      return results;
    }
  }

  render() {
    return (
      <span className={`${this.props.classPrefix}__container`}>
        {this.renderInput()}
        {this.renderResults()}
      </span>
    );
  }
}

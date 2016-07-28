import React, {PropTypes, Component} from 'react';

export default function inputFilterFactory(store) {
  class InputFilter extends Component {
    static displayName = 'InputFilter';

    static propTypes = {
      classPrefix: PropTypes.string.isRequired,
      initialSearch: PropTypes.string,
      inputProps: PropTypes.object,
      onChange: PropTypes.func
    };

    static defaultProps = {
      classPrefix: 'react-fuzzy-filter',
      inputProps: {},
      onChange: function() {}
    };

    state = {
      search: this.props.initialSearch
    };

    handleChange = ({target: {value}}) => {
      const continueChange = this.props.onChange(value);
      if (continueChange !== false) {
        this.setState({search: value});
        store.next(value);
      }
    };

    render() {
      return (
        <input
          className={`${this.props.classPrefix}__input`}
          onChange={this.handleChange}
          defaultValue={this.props.initialSearch}
          {...this.props.inputProps}
        />
      );
    }
  }

  return InputFilter;
}

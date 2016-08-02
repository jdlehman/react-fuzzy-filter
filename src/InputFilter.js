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

    componentDidMount() {
      let value = this.props.initialSearch;
      const overrideValue = this.props.onChange(value);
      if (typeof overrideValue === 'string') {
        value = overrideValue;
      }
      store.next(value);
    }

    handleChange = ({target: {value}}) => {
      const overrideValue = this.props.onChange(value);
      if (typeof overrideValue === 'string') {
        value = overrideValue;
      }
      store.next(value);
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

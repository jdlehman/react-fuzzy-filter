import React, {PropTypes, Component} from 'react';
import debounce from 'debounce';

export default function inputFilterFactory(store) {
  function updateValue(value, callback) {
    const overrideValue = callback(value);
    if (typeof overrideValue === 'string') {
      value = overrideValue;
    }
    store.next(value);
  }

  class InputFilter extends Component {
    static displayName = 'InputFilter';

    static propTypes = {
      classPrefix: PropTypes.string.isRequired,
      initialSearch: PropTypes.string,
      inputProps: PropTypes.object,
      onChange: PropTypes.func,
      debounceTime: PropTypes.number
    };

    static defaultProps = {
      classPrefix: 'react-fuzzy-filter',
      inputProps: {},
      onChange: function() {},
      debounceTime: 0
    };

    componentDidMount() {
      updateValue(this.props.initialSearch, this.props.onChange);
    }

    componentWillReceiveProps(nextProps) {
      this.updateValue = debounce(updateValue, nextProps.debounceTime);
    }

    updateValue = debounce(updateValue, this.props.debounceTime);

    handleChange = ({target: {value}}) => {
      if (this.props.debounceTime > 0) {
        this.updateValue(value, this.props.onChange);
      } else {
        updateValue(value, this.props.onChange);
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

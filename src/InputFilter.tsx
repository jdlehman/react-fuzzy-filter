import debounce from "debounce";
import React, { Component } from "react";
import { Disposer, Emitter } from "./behaviorStore";

export interface InputFilterProps {
  classPrefix?: string;
  initialSearch?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  onChange?: (value: string) => string;
  debounceTime?: number;
}

interface InputFilterState {
  value: string;
}

export type InputFilter = React.ComponentType<InputFilterProps>;

export default function inputFilterFactory(
  store: Emitter<string>
): InputFilter {
  function updateValue(value: string, callback: (value: string) => string) {
    const overrideValue = callback(value);
    store(overrideValue);
  }

  class Input extends Component<InputFilterProps, InputFilterState> {
    static displayName = "InputFilter";
    static defaultProps = {
      classPrefix: "react-fuzzy-filter",
      debounceTime: 0,
      inputProps: {},
      // tslint:disable-next-line:no-empty
      onChange: (value: string) => value,
    };
    state = {
      value: this.props.initialSearch || "",
    };

    updateValue = debounce(updateValue, this.props.debounceTime);
    // tslint:disable-next-line:no-empty
    unsubscribe: Disposer = () => {};

    componentDidMount() {
      updateValue(
        this.props.initialSearch || "",
        this.props.onChange || Input.defaultProps.onChange
      );
      this.unsubscribe = store.on(value => {
        this.setState({ value });
      });
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    componentWillReceiveProps(nextProps: InputFilterProps) {
      this.updateValue = debounce(updateValue, nextProps.debounceTime);
      if (nextProps.initialSearch !== this.props.initialSearch) {
        updateValue(
          nextProps.initialSearch || "",
          this.props.onChange || Input.defaultProps.onChange
        );
      }
    }

    handleChange = ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
      const debounceTime =
        this.props.debounceTime || Input.defaultProps.debounceTime;
      const onChange = this.props.onChange || Input.defaultProps.onChange;
      if (debounceTime > 0) {
        this.updateValue(value, onChange);
      } else {
        updateValue(value, onChange);
      }
    };

    render() {
      const prefix = this.props.classPrefix || Input.defaultProps.classPrefix;
      const inputProps = this.props.inputProps || Input.defaultProps.inputProps;
      return (
        <input
          className={`${prefix}__input`}
          onChange={this.handleChange}
          value={this.state.value || ""}
          {...inputProps}
        />
      );
    }
  }

  return Input;
}

import debounce from "debounce";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Emitter } from "./behaviorStore";

export interface InputFilterProps {
  classPrefix?: string;
  initialSearch?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  onChange?: (value: string) => string;
  debounceTime?: number;
}

export type InputFilter = React.ComponentType<InputFilterProps>;
const defaultProps = {
  classPrefix: "react-fuzzy-filter",
  debounceTime: 0,
  inputProps: {},
  onChange: (value: string) => value,
};

export default function inputFilterFactory(
  store: Emitter<string>
): InputFilter {
  function updateValue(value: string, onChange: (value: string) => string) {
    const overrideValue = onChange(value);
    store(overrideValue);
  }

  const Input: React.FunctionComponent<InputFilterProps> = (
    props: InputFilterProps
  ) => {
    const initialSearch = props.initialSearch || "";
    const onChange = props.onChange || defaultProps.onChange;
    const debounceTime = props.debounceTime || defaultProps.debounceTime;

    const [inputValue, setValue] = useState(initialSearch);
    const debouncedUpdate = useCallback(debounce(updateValue, debounceTime), [
      debounceTime,
    ]);
    const inputRef = useRef(inputValue);

    useEffect(() => {
      const unsubscribe = store.on(val => {
        if (val !== inputRef.current) {
          setValue(val);
        }
      });
      return unsubscribe;
    }, []);

    useEffect(() => {
      updateValue(initialSearch, onChange);
    }, [initialSearch]);

    useEffect(() => {
      inputRef.current = inputValue;
    }, [inputValue]);

    const handleChange = ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
      if (debounceTime) {
        setValue(value);
        debouncedUpdate(value, onChange);
      } else {
        updateValue(value, onChange);
      }
    };

    return (
      <input
        className={`${props.classPrefix}__input`}
        onChange={handleChange}
        value={inputValue}
        {...props.inputProps}
      />
    );
  };

  Input.displayName = "InputFilter";
  Input.defaultProps = defaultProps;

  return Input;
}

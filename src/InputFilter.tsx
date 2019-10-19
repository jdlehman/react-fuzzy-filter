import debounce from "debounce";
import React, { useCallback, useEffect, useState } from "react";
import { Emitter, Event, EventType } from "./behaviorStore";

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

export default function inputFilterFactory(store: Emitter<Event>): InputFilter {
  function updateValue(value: string, onChange: (value: string) => string) {
    const overrideValue = onChange(value);
    store({ t: EventType.Input, v: overrideValue });
  }

  const Input: React.FunctionComponent<InputFilterProps> = (
    props: InputFilterProps
  ) => {
    console.log(props);
    const initialSearch = props.initialSearch || "";
    const onChange = props.onChange || defaultProps.onChange;
    const debounceTime = props.debounceTime || defaultProps.debounceTime;

    const [inputValue, setValue] = useState(initialSearch);
    const debouncedUpdate = useCallback(debounce(updateValue, debounceTime), [
      debounceTime,
    ]);

    useEffect(() => {
      const unsubscribe = store.on(({ v, t }) => {
        if (t === EventType.External) {
          setValue(v);
        }
      });
      return unsubscribe;
    }, []);

    useEffect(() => {
      updateValue(initialSearch, onChange);
    }, [initialSearch, onChange]);

    const handleChange = ({
      target: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
      setValue(value);
      if (debounceTime) {
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

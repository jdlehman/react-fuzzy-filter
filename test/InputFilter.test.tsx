import React from "react";
import { act } from "react-dom/test-utils";
import { fireEvent, render, wait } from "@testing-library/react";
import behaviorStore, { Emitter, EventType } from "../src/behaviorStore";
import inputFilterFactory, { InputFilter } from "../src/InputFilter";

describe("InputFilter", () => {
  let Input: InputFilter;
  let store: Emitter<any>;
  beforeEach(() => {
    store = behaviorStore({ t: EventType.Initial, v: "" });
    Input = inputFilterFactory(store);
  });

  describe("#render", () => {
    it("renders with defaults", () => {
      const utils = render(<Input />);
      expect(utils.container).toMatchSnapshot();
    });

    it("sets classPrefix", () => {
      const utils = render(<Input classPrefix="my-prefix" />);
      expect(utils.container).toMatchSnapshot();
    });

    it("sets inputProps", () => {
      const inputProps = { placeholder: "Search" };
      const utils = render(<Input inputProps={inputProps} />);
      const input = utils.getByPlaceholderText("Search");
      expect(input).toMatchSnapshot();
    });

    it("sets initialSearch", () => {
      const utils = render(<Input initialSearch="first search" />);
      const input = utils.getByDisplayValue("first search");
      expect(input).toMatchSnapshot();
    });
  });

  describe("#onChange", () => {
    let input: Element;
    let spy: jest.Mock;
    beforeEach(() => {
      spy = jest.fn().mockImplementation((value: string) => value);
      const utils = render(
        <Input
          onChange={spy}
          inputProps={{ placeholder: "Search" }}
          initialSearch="init"
        />
      );
      input = utils.getByPlaceholderText("Search");
    });

    it("calls callback with search value", () => {
      jest.useFakeTimers();
      fireEvent.change(input, {
        target: { value: "my string" },
      });
      act(() => {
        jest.runAllTimers();
      });
      wait(() => expect(spy).toHaveBeenCalledWith("my string"));
    });

    it("passes the value to the store", done => {
      jest.useFakeTimers();
      const received = [
        { t: EventType.Initial, v: "" },
        { t: EventType.Input, v: "init" },
        { t: EventType.Input, v: "some input" },
        // { t: EventType.Input, v: "" }, // TODO: fix
      ];
      let ptr = 0;
      store.on(data => {
        console.log(ptr, data, received[ptr]);
        // expect(data).toEqual(received[ptr]);
        ptr++;
        // console.log(ptr);
        if (ptr === received.length) {
          done();
        }
      });

      fireEvent.change(input, {
        target: { value: "some input" },
      });
      act(() => {
        jest.runAllTimers();
      });
      wait(() => expect(spy).toHaveBeenCalledWith("some input"));
    });
  });
});

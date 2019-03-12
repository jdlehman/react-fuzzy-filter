import React from "react";
import { act } from "react-dom/test-utils";
import { fireEvent, render, wait } from "react-testing-library";
import behaviorStore, { EventType } from "../src/behaviorStore";
import inputFilterFactory, { InputFilter } from "../src/InputFilter";

describe("InputFilter", () => {
  let Input: InputFilter;
  const store = behaviorStore({ t: EventType.Initial, v: "" });
  beforeEach(() => {
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
      const input = utils.getByValue("first search");
      expect(input).toMatchSnapshot();
    });
  });

  describe("#onChange", () => {
    let input: Element;
    let spy: any;
    beforeEach(() => {
      spy = jest.fn().mockImplementation((value: string) => value);
      const utils = render(
        <Input onChange={spy} inputProps={{ placeholder: "Search" }} />
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
      const received = ["", "some input"];
      let ptr = 0;
      store.on(({ t, v }) => {
        expect(v).toEqual(received[ptr]);
        expect(t).toEqual(EventType.Input);
        ptr++;
        if (ptr === 2) {
          done();
        }
      });

      fireEvent.change(input, {
        target: { value: "some input" },
      });
      act(() => {
        jest.runAllTimers();
      });
    });
  });
});

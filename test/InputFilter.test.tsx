import React from "react";
import { fireEvent, render } from "react-testing-library";
import behaviorStore from "../src/behaviorStore";
import inputFilterFactory, { InputFilter } from "../src/InputFilter";

describe("InputFilter", () => {
  let Input: InputFilter;
  const store = behaviorStore("");
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
    const spy = jest.fn().mockImplementation((value: string) => value);
    beforeEach(() => {
      const utils = render(
        <Input onChange={spy} inputProps={{ placeholder: "Search" }} />
      );
      input = utils.getByPlaceholderText("Search");
    });

    it.skip("calls callback with search value", () => {
      fireEvent.change(input, {
        target: { value: "my string" },
      });
      expect(spy).toHaveBeenCalledWith("my string");
    });

    it("passes the value to the store", done => {
      const received = ["", "some input"];
      let ptr = 0;
      store.on(data => {
        expect(data).toEqual(received[ptr]);
        ptr++;
        if (ptr === 2) {
          done();
        }
      });

      fireEvent.change(input, {
        target: { value: "some input" },
      });
    });
  });
});

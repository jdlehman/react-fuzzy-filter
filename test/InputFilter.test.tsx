import { shallow } from "enzyme";
import React from "react";
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
      const component = shallow(<Input />);
      expect(component.find(".react-fuzzy-filter__input").length).toEqual(1);
    });

    it("sets classPrefix", () => {
      const component = shallow(<Input classPrefix="my-prefix" />);
      expect(component.find(".my-prefix__input").length).toEqual(1);
    });

    it("sets inputProps", () => {
      const inputProps = { placeholder: "Search" };
      const component = shallow(<Input inputProps={inputProps} />);
      expect(component.find(".react-fuzzy-filter__input").html()).toEqual(
        '<input class="react-fuzzy-filter__input" value="" placeholder="Search"/>'
      );
    });

    it("sets initialSearch", () => {
      const component = shallow(<Input initialSearch="first search" />);
      expect(component.find("input").html()).toEqual(
        '<input class="react-fuzzy-filter__input" value="first search"/>'
      );
    });
  });

  describe("#onChange", () => {
    let component: any;
    const spy = jest.fn();
    const change = (value: string) => {
      spy(value);
      return value;
    };
    beforeEach(() => {
      component = shallow(<Input onChange={change} />);
    });

    it("calls callback with search value", () => {
      component.find("input").simulate("change", {
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

      component.find("input").simulate("change", {
        target: { value: "some input" },
      });
    });
  });
});

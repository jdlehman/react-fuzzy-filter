import { mount } from "enzyme";
import React from "react";
import fuzzyFilterFactory from "../dist/react-fuzzy-filter.umd.development";

const items = [
  { name: "one", searchData: "hello" },
  { name: "two", searchData: "hello" },
  { name: "three", searchData: "goodbye" },
  { name: "four", searchData: "bonjour" },
];

const defaultFuseConfig = {
  keys: ["searchData"],
};

function componentFactory(inputFilterProps, filterResultsProps, resultsSpy) {
  const { InputFilter, FilterResults, changeInputValue } = fuzzyFilterFactory();
  function MyComponent() {
    return (
      <div>
        <h2>Separate Components</h2>
        <InputFilter {...inputFilterProps} />
        <h4>Any amount of content between</h4>
        <FilterResults {...filterResultsProps}>{resultsSpy}</FilterResults>
      </div>
    );
  }

  return { MyComponent, changeInputValue };
}

describe("fuzzyFilterFactory", () => {
  let resultsSpy;
  beforeEach(() => {
    resultsSpy = jest.fn().mockImplementation(() => <div />);
  });

  it("returns FilterResults and InputFilter components", () => {
    const { InputFilter, FilterResults } = fuzzyFilterFactory();
    expect(typeof InputFilter).toEqual("function");
    expect(typeof FilterResults).toEqual("function");
    expect(FilterResults.displayName).toEqual("FilterResults");
    expect(InputFilter.displayName).toEqual("InputFilter");
  });

  it("input controls filter results", done => {
    const { MyComponent } = componentFactory(
      { placeholder: "Search" },
      { items: items, fuseConfig: defaultFuseConfig },
      resultsSpy
    );
    const component = mount(<MyComponent />);
    setTimeout(() => {
      expect(resultsSpy).toHaveBeenCalledTimes(2);
      expect(resultsSpy).toHaveBeenLastCalledWith([
        { name: "one", searchData: "hello" },
        { name: "two", searchData: "hello" },
        { name: "three", searchData: "goodbye" },
        { name: "four", searchData: "bonjour" },
      ]);

      component.find("input").simulate("change", {
        target: { value: "ello" },
      });
      expect(resultsSpy).toHaveBeenCalledTimes(3);
      expect(resultsSpy).toHaveBeenLastCalledWith([
        { name: "one", searchData: "hello" },
        { name: "two", searchData: "hello" },
      ]);

      component.find("input").simulate("change", {
        target: { value: "gdbye" },
      });
      expect(resultsSpy).toHaveBeenCalledTimes(4);
      expect(resultsSpy).toHaveBeenLastCalledWith([
        { name: "three", searchData: "goodbye" },
      ]);
      done();
    });
  });

  it("uses initialSearch", done => {
    const { MyComponent } = componentFactory(
      { placeholder: "Search", initialSearch: "gdbye" },
      { items: items, fuseConfig: defaultFuseConfig },
      resultsSpy
    );
    mount(<MyComponent />);
    setTimeout(() => {
      expect(resultsSpy).toHaveBeenCalledTimes(2);
      expect(resultsSpy).toHaveBeenLastCalledWith([
        { name: "three", searchData: "goodbye" },
      ]);
      done();
    });
  });

  it("handles external input value changes via changeInputValue function", done => {
    const { MyComponent, changeInputValue } = componentFactory(
      { placeholder: "Search", initialSearch: "gdbye" },
      { items: items, fuseConfig: defaultFuseConfig },
      resultsSpy
    );
    mount(<MyComponent />);
    // change value externally
    setTimeout(() => changeInputValue("bonjour"));
    setTimeout(() => {
      expect(resultsSpy).toHaveBeenCalledTimes(3);
      expect(resultsSpy).toHaveBeenLastCalledWith([
        { name: "four", searchData: "bonjour" },
      ]);
      done();
    });
  });
});

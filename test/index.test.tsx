import React from "react";
import { act } from "react-dom/test-utils";
import { fireEvent, render } from "@testing-library/react";
import fuzzyFilterFactory, {
  FilterResultsProps,
  InputFilterProps,
  FuseOptions,
} from "../src";

interface TestItem {
  name: string;
  searchData: string;
}
const items: TestItem[] = [
  { name: "one", searchData: "hello" },
  { name: "two", searchData: "hello" },
  { name: "three", searchData: "goodbye" },
  { name: "four", searchData: "bonjour" },
];

const defaultFuseConfig: FuseOptions<TestItem> = {
  keys: ["searchData"],
};

function componentFactory(
  inputFilterProps: InputFilterProps,
  filterResultsProps: FilterResultsProps<TestItem>
) {
  const { InputFilter, FilterResults, changeInputValue } = fuzzyFilterFactory<
    TestItem
  >();
  function MyComponent() {
    return (
      <div>
        <h2>Separate Components</h2>
        <InputFilter
          inputProps={{ placeholder: "Search" }}
          {...inputFilterProps}
        />
        <h4>Any amount of content between</h4>
        <FilterResults {...filterResultsProps} />
      </div>
    );
  }

  return { MyComponent, changeInputValue };
}

describe("fuzzyFilterFactory", () => {
  let resultsSpy: jest.Mock;
  beforeEach(() => {
    resultsSpy = jest.fn().mockImplementation(() => <div />);
  });

  it("returns FilterResults and InputFilter components", () => {
    const { InputFilter, FilterResults } = fuzzyFilterFactory<TestItem>();
    expect(typeof InputFilter).toEqual("function");
    expect(typeof FilterResults).toEqual("function");
    expect(FilterResults.displayName).toEqual("FilterResults");
    expect(InputFilter.displayName).toEqual("InputFilter");
  });

  it("input controls filter results", () => {
    const { MyComponent } = componentFactory(
      {},
      { items, fuseConfig: defaultFuseConfig, children: resultsSpy }
    );
    const utils = render(<MyComponent />);
    const input = utils.getByPlaceholderText("Search");
    expect(resultsSpy).toHaveBeenCalledTimes(1);
    expect(resultsSpy).toHaveBeenLastCalledWith([
      { name: "one", searchData: "hello" },
      { name: "two", searchData: "hello" },
      { name: "three", searchData: "goodbye" },
      { name: "four", searchData: "bonjour" },
    ]);

    fireEvent.change(input, {
      target: { value: "ello" },
    });
    expect(resultsSpy).toHaveBeenCalledTimes(2);
    expect(resultsSpy).toHaveBeenLastCalledWith([
      { name: "one", searchData: "hello" },
      { name: "two", searchData: "hello" },
    ]);

    fireEvent.change(input, {
      target: { value: "gdbye" },
    });
    expect(resultsSpy).toHaveBeenCalledTimes(3);
    expect(resultsSpy).toHaveBeenLastCalledWith([
      { name: "three", searchData: "goodbye" },
    ]);
  });

  it("uses initialSearch", () => {
    const { MyComponent } = componentFactory(
      { initialSearch: "gdbye" },
      { items, fuseConfig: defaultFuseConfig, children: resultsSpy }
    );
    render(<MyComponent />);
    expect(resultsSpy).toHaveBeenCalledTimes(2);
    expect(resultsSpy).toHaveBeenLastCalledWith([
      { name: "three", searchData: "goodbye" },
    ]);
  });

  it("handles external input value changes via changeInputValue function", () => {
    const { MyComponent, changeInputValue } = componentFactory(
      { initialSearch: "gdbye" },
      { items, fuseConfig: defaultFuseConfig, children: resultsSpy }
    );
    render(<MyComponent />);
    // change value externally
    act(() => {
      changeInputValue("bonjour");
    });
    expect(resultsSpy).toHaveBeenCalledTimes(3);
    expect(resultsSpy).toHaveBeenLastCalledWith([
      { name: "four", searchData: "bonjour" },
    ]);
  });
});

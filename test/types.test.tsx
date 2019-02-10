import React from "react";
import fuzzyFilterFactory, { PreFilter } from "../src";

interface TestItem {
  name: string;
  searchData: string;
  state: string;
}
const data: TestItem[] = [
  { name: "one", searchData: "hello", state: "archived" },
  { name: "two", searchData: "hello", state: "" },
  { name: "three", searchData: "goodbye", state: "open" },
  { name: "four", searchData: "bonjour", state: "archived" },
];

const filters: Array<PreFilter<TestItem>> = [
  {
    handler: (_filterVal, results, _Fuse) => {
      return results.filter(item => item.state === "archived");
    },
    regex: /archived/,
  },
  {
    handler: (match, results, Fuse) => {
      const [key, value] = match.split(":");
      const fuse = new Fuse(results, { keys: [key], threshold: 0.4 });
      return fuse.search(value);
    },
    regex: /\S+:\S+/g,
  },
];

it("provides necessary types for usage", () => {
  const { InputFilter, FilterResults, changeInputValue } = fuzzyFilterFactory<
    TestItem
  >();
  const minimalProps = (
    <div>
      <InputFilter />
      <FilterResults items={data} fuseConfig={{ keys: ["searchData"] }}>
        {items => items.map((item, i) => <div key={i}>{item.name}</div>)}
      </FilterResults>
    </div>
  );
  const allProps = (
    <div>
      <InputFilter inputProps={{ placeholder: "Search" }} />
      <FilterResults
        items={data}
        fuseConfig={{ keys: ["searchData"] }}
        defaultAllItems={false}
        prefilters={filters}
      >
        {items => items.map((item, i) => <div key={i}>{item.name}</div>)}
      </FilterResults>
    </div>
  );

  changeInputValue("some string");
  expect(minimalProps).not.toBeNull();
  expect(allProps).not.toBeNull();
});

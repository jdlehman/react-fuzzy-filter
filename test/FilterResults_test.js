import { shallow } from "enzyme";
import React from "react";
import { Subject } from "rxjs";
import filterResultsFactory from "../src/FilterResults";

const filteredResultsSpy = jest.fn().mockImplementation(() => <div />);

const items = [
  { name: "one", searchData: "hello", state: "archived" },
  { name: "two", searchData: "hello", state: "" },
  { name: "three", searchData: "goodbye", state: "archived" },
  { name: "four", searchData: "bonjour", state: "enabled" }
];

const defaultFuseConfig = {
  keys: ["searchData"]
};

describe("FilterResults", () => {
  let FilterResults;
  const store = new Subject();
  beforeEach(() => {
    FilterResults = filterResultsFactory(store);
    filteredResultsSpy.mockClear();
  });

  describe("#render", () => {
    it("passes filtered items to child function", () => {
      shallow(
        <FilterResults items={items} fuseConfig={defaultFuseConfig}>
          {filteredResultsSpy}
        </FilterResults>
      );
      expect(filteredResultsSpy.mock.calls.length).toEqual(1);
      expect(filteredResultsSpy.mock.calls[0][0]).toEqual(items);
    });

    it("renders no items with empty search if defaultAllItems is false", () => {
      shallow(
        <FilterResults
          items={items}
          fuseConfig={defaultFuseConfig}
          defaultAllItems={false}
        >
          {filteredResultsSpy}
        </FilterResults>
      );
      expect(filteredResultsSpy.mock.calls.length).toEqual(1);
      expect(filteredResultsSpy.mock.calls[0][0]).toEqual([]);
    });
  });

  describe("#renderItems", () => {
    it("fuzzy filters items by search state", () => {
      const component = shallow(
        <FilterResults items={items} fuseConfig={defaultFuseConfig}>
          {filteredResultsSpy}
        </FilterResults>
      );
      component.setState({ search: "hllo" });
      expect(filteredResultsSpy.mock.calls.length).toEqual(2);
      expect(filteredResultsSpy.mock.calls[1][0]).toEqual([
        { name: "one", searchData: "hello", state: "archived" },
        { name: "two", searchData: "hello", state: "" }
      ]);

      component.setState({ search: "godby" });
      expect(filteredResultsSpy.mock.calls.length).toEqual(3);
      expect(filteredResultsSpy.mock.calls[2][0]).toEqual([
        { name: "three", searchData: "goodbye", state: "archived" }
      ]);
    });

    it("accepts fuse config", () => {
      const fuseConfig = {
        keys: ["name"],
        id: "name"
      };
      const component = shallow(
        <FilterResults fuseConfig={fuseConfig} items={items}>
          {filteredResultsSpy}
        </FilterResults>
      );
      component.setState({ search: "hllo" });
      expect(filteredResultsSpy.mock.calls.length).toEqual(2);
      expect(filteredResultsSpy.mock.calls[1][0]).toEqual([]);

      component.setState({ search: "ree" });
      expect(filteredResultsSpy.mock.calls.length).toEqual(3);
      expect(filteredResultsSpy.mock.calls[2][0]).toEqual(["three"]);
    });

    it("supports prefilters", () => {
      const prefilters = [
        {
          regex: /archived/,
          handler: (filterVal, items) => {
            return items.filter(item => item.state === "archived");
          }
        },
        {
          regex: /\S+:\S+/g,
          handler: function(match, items, Fuse) {
            const [key, value] = match.split(":");
            const fuse = new Fuse(items, { keys: [key], threshold: 0.4 });
            return fuse.search(value);
          }
        }
      ];
      const component = shallow(
        <FilterResults
          fuseConfig={defaultFuseConfig}
          items={items}
          prefilters={prefilters}
        >
          {filteredResultsSpy}
        </FilterResults>
      );
      component.setState({ search: "archived" });
      expect(filteredResultsSpy.mock.calls.length).toEqual(2);
      expect(filteredResultsSpy.mock.calls[1][0]).toEqual([
        { name: "one", searchData: "hello", state: "archived" },
        { name: "three", searchData: "goodbye", state: "archived" }
      ]);

      component.setState({ search: "archived hello" });
      expect(filteredResultsSpy.mock.calls.length).toEqual(3);
      expect(filteredResultsSpy.mock.calls[2][0]).toEqual([
        { name: "one", searchData: "hello", state: "archived" }
      ]);

      component.setState({ search: "name:two" });
      expect(filteredResultsSpy.mock.calls.length).toEqual(4);
      expect(filteredResultsSpy.mock.calls[3][0]).toEqual([
        { name: "two", searchData: "hello", state: "" }
      ]);
    });
  });
});

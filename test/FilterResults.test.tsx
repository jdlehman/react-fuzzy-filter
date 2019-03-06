import React from "react";
import { act } from "react-dom/test-utils";
import { render } from "react-testing-library";
import behaviorStore, { EventType } from "../src/behaviorStore";
import filterResultsFactory, {
  FilterResults,
  PreFilter,
} from "../src/FilterResults";

const filteredResultsSpy = jest.fn().mockImplementation(() => <div />);

interface TestItem {
  name: string;
  searchData: string;
  state: string;
}

const items: TestItem[] = [
  { name: "one", searchData: "hello", state: "archived" },
  { name: "two", searchData: "hello", state: "" },
  { name: "three", searchData: "goodbye", state: "archived" },
  { name: "four", searchData: "bonjour", state: "enabled" },
];

const defaultFuseConfig = {
  keys: ["searchData"],
};

describe("FilterResults", () => {
  let Results: FilterResults<TestItem>;
  const store = behaviorStore({ t: EventType.Initial, v: "" });
  beforeEach(() => {
    Results = filterResultsFactory(store);
    filteredResultsSpy.mockClear();
  });

  describe("#render", () => {
    it("passes filtered items to child function", () => {
      render(
        <Results items={items} fuseConfig={defaultFuseConfig}>
          {filteredResultsSpy}
        </Results>
      );
      expect(filteredResultsSpy).lastCalledWith(items);
    });

    it("renders no items with empty search if defaultAllItems is false", () => {
      render(
        <Results
          items={items}
          fuseConfig={defaultFuseConfig}
          defaultAllItems={false}
        >
          {filteredResultsSpy}
        </Results>
      );
      expect(filteredResultsSpy).lastCalledWith([]);
    });
  });

  describe("#renderItems", () => {
    it("fuzzy filters items by search state", () => {
      render(
        <Results items={items} fuseConfig={defaultFuseConfig}>
          {filteredResultsSpy}
        </Results>
      );
      act(() => store({ t: EventType.Initial, v: "hllo" }));
      expect(filteredResultsSpy).lastCalledWith([
        { name: "one", searchData: "hello", state: "archived" },
        { name: "two", searchData: "hello", state: "" },
      ]);

      act(() => store({ t: EventType.Initial, v: "godby" }));
      expect(filteredResultsSpy).lastCalledWith([
        { name: "three", searchData: "goodbye", state: "archived" },
      ]);
    });

    it("accepts fuse config", () => {
      const fuseConfig = {
        id: "name",
        keys: ["name"],
      };
      render(
        <Results fuseConfig={fuseConfig} items={items}>
          {filteredResultsSpy}
        </Results>
      );
      act(() => store({ t: EventType.Initial, v: "hllo" }));
      expect(filteredResultsSpy).lastCalledWith([]);

      act(() => store({ t: EventType.Initial, v: "ree" }));
      expect(filteredResultsSpy).lastCalledWith(["three"]);
    });

    it("supports prefilters", () => {
      const prefilters: Array<PreFilter<TestItem>> = [
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
      render(
        <Results
          fuseConfig={defaultFuseConfig}
          items={items}
          prefilters={prefilters}
        >
          {filteredResultsSpy}
        </Results>
      );
      act(() => store({ t: EventType.Initial, v: "archived" }));
      expect(filteredResultsSpy).lastCalledWith([
        { name: "one", searchData: "hello", state: "archived" },
        { name: "three", searchData: "goodbye", state: "archived" },
      ]);

      act(() => store({ t: EventType.Initial, v: "archived hello" }));
      expect(filteredResultsSpy).lastCalledWith([
        { name: "one", searchData: "hello", state: "archived" },
      ]);

      act(() => store({ t: EventType.Initial, v: "name:two" }));
      expect(filteredResultsSpy).lastCalledWith([
        { name: "two", searchData: "hello", state: "" },
      ]);
    });
  });
});

import behaviorStore, { Emitter } from "./behaviorStore";
import filterResultsFactory from "./FilterResults";
import inputFilterFactory from "./InputFilter";

export default function fuzzyFilterFactory() {
  const store: Emitter<string> = behaviorStore();
  return {
    FilterResults: filterResultsFactory(store),
    InputFilter: inputFilterFactory(store),
    changeInputValue: (value: string) =>
      store(typeof value !== "string" ? "" : value),
  };
}

import behaviorStore, { Emitter } from "./behaviorStore";
import filterResultsFactory from "./FilterResults";
import inputFilterFactory from "./InputFilter";

export {
  FilterResults,
  FilterResultsProps,
  PreFilter,
  PreFilterHandler,
  Item,
} from "./FilterResults";
export { InputFilter, InputFilterProps } from "./InputFilter";

export default function fuzzyFilterFactory<T>() {
  const store: Emitter<string> = behaviorStore<string>("");
  return {
    FilterResults: filterResultsFactory<T>(store),
    InputFilter: inputFilterFactory(store),
    changeInputValue: (value: string) =>
      store(typeof value !== "string" ? "" : value),
  };
}

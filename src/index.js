import valoo from "valoo";
import inputFilterFactory from "./InputFilter";
import filterResultsFactory from "./FilterResults";

export default function fuzzyFilterFactory() {
  const store = valoo();
  return {
    InputFilter: inputFilterFactory(store),
    FilterResults: filterResultsFactory(store),
    changeInputValue: value => store(typeof value !== "string" ? "" : value)
  };
}

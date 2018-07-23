import { BehaviorSubject } from "rxjs";
import inputFilterFactory from "./InputFilter";
import filterResultsFactory from "./FilterResults";

export default function fuzzyFilterFactory() {
  const store = new BehaviorSubject();
  return {
    InputFilter: inputFilterFactory(store),
    FilterResults: filterResultsFactory(store)
  };
}

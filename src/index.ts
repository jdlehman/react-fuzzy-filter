import behaviorStore, { Emitter, Event, EventType } from "./behaviorStore";
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
  const store: Emitter<Event> = behaviorStore<Event>({
    t: EventType.Initial,
    v: "",
  });
  return {
    FilterResults: filterResultsFactory<T>(store),
    InputFilter: inputFilterFactory(store),
    changeInputValue: (value: string) => {
      store({
        t: EventType.External,
        v: typeof value !== "string" ? "" : value,
      });
    },
  };
}

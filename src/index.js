import valoo from "valoo";
import inputFilterFactory from "./InputFilter";
import filterResultsFactory from "./FilterResults";

// emulates BehaviorSubject from rxjs
// (stores current state) and replays it on subscribe
function behaviorStore() {
  const store = valoo();
  let currentState;
  // save currentState before emitting
  function emit(val) {
    currentState = val;
    store(val);
  }

  // emit currentState on subscribe
  // then use default valoo behavior
  emit.on = function(cb) {
    cb(currentState);
    return store.on(cb);
  };
  return emit;
}

export default function fuzzyFilterFactory() {
  const store = behaviorStore();
  return {
    InputFilter: inputFilterFactory(store),
    FilterResults: filterResultsFactory(store),
    changeInputValue: value => store(typeof value !== "string" ? "" : value)
  };
}

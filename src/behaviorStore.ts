import valoo from "valoo";

export interface Emitter<T> {
  (value: T): void;
  on: (fn: (value: T) => void) => valoo.Disposer;
}

export type Disposer = valoo.Disposer;

// emulates BehaviorSubject from rxjs
// (stores current state) and replays it on subscribe
export default function behaviorStore(): Emitter<string> {
  const store: valoo.Observable<string> = valoo("");
  let currentState: string;
  // save currentState before emitting
  const emit = function(value: string) {
    currentState = value;
    store(value);
  } as Emitter<string>;

  // emit currentState on subscribe
  // then use default valoo behavior
  emit.on = function(fn: (value: string) => void): valoo.Disposer {
    fn(currentState);
    return store.on(fn);
  };
  return emit;
}

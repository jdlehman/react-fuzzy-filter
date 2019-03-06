import valoo from "valoo";

export interface Emitter<T> {
  (value: T): void;
  on: (fn: (value: T) => void) => valoo.Disposer;
}

export type Disposer = valoo.Disposer;

export enum EventType {
  Initial = 0,
  Input,
  External,
}

export interface Event {
  t: EventType; // type
  v: string; // value
}

// emulates BehaviorSubject from rxjs
// (stores current state) and replays it on subscribe
export default function behaviorStore<T>(initialValue: T): Emitter<T> {
  const store: valoo.Observable<T> = valoo(initialValue);
  let currentState = initialValue;
  // save currentState before emitting
  const emit = function(value: T) {
    currentState = value;
    store(value);
  } as Emitter<T>;

  // emit currentState on subscribe
  // then use default valoo behavior
  emit.on = function(fn: (value: T) => void): valoo.Disposer {
    fn(currentState);
    return store.on(fn);
  };
  return emit;
}

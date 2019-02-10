import behaviorStore from "../src/behaviorStore";

describe("behaviorStore", () => {
  it("emits state to subscribers", done => {
    const store = behaviorStore<number>(2);
    const received = [2, 5, 1];
    let ptr = 0;
    let ptr2 = 0;
    store.on(num => {
      expect(num).toEqual(received[ptr]);
      ptr++;
    });
    store.on(num => {
      expect(num).toEqual(received[ptr2]);
      ptr2++;
      if (ptr === 3) {
        done();
      }
    });
    store(5);
    store(1);
  });

  it("uses the current state on subscribe", done => {
    const store = behaviorStore<number>(2);
    store(3);
    store(5);
    store.on(num => {
      expect(num).toEqual(5);
      done();
    });
  });
});

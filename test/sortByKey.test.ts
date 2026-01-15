import { sortByKey } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('sortByKey', () => {
  test("sortByKey", () => {
    const list = [
      { age: "20", name: "claudio" },
      { age: "25", name: "marta" },
      { age: "10", name: "isa" },
      { age: "15", name: "isa" },
    ];

    //
    const arr1 = sortByKey(list, "name");

    expect(arr1[0]).toMatchObject({ age: "20", name: "claudio" });
    expect(arr1[1]).toMatchObject({ age: "10", name: "isa" });
    expect(arr1[2]).toMatchObject({ age: "15", name: "isa" });
    expect(arr1[3]).toMatchObject({ age: "25", name: "marta" });

    //
    const arr2 = sortByKey(list, "age");

    expect(arr2[0]).toMatchObject({ age: "10", name: "isa" });
    expect(arr2[1]).toMatchObject({ age: "15", name: "isa" });
    expect(arr2[2]).toMatchObject({ age: "20", name: "claudio" });
    expect(arr2[3]).toMatchObject({ age: "25", name: "marta" });
  });
});

import { objectPath } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('objectPath', () => {
  test("objectPath", () => {
    const obj = {
      a: "1",
      b: { c: 10, d: 2, e: { f: "4", g: "5", h: { i: "6" } } },
    };

    expect(objectPath(obj, "b.e.h.i")).toBe("6");
  });
});

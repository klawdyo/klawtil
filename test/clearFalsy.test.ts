import { clearFalsy } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('clearFalsy', () => {
  test("clearFalsy", () => {
    expect(
      clearFalsy({ id: 1, age: "0", idade: "NaN", birth: "" })
    ).toMatchObject({ id: 1 });
  });
});

import { isString } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('isString', () => {
  test("isString", () => {
    expect(isString("claudio")).toBe(true);
    expect(isString("12")).toBe(true);
    expect(isString(12)).toBe(false);
    expect(isString([12])).toBe(false);
    expect(isString({})).toBe(false);
  });
});

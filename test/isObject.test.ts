import { isObject } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('isObject', () => {
  test("isObject", () => {
    expect(isObject({})).toBe(true);
    expect(isObject([])).toBe(true);
    expect(isObject("claudio")).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject(new Date())).toBe(true);
  });
});

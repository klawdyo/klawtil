import { isInteger } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('isInteger', () => {
  test("isInteger", () => {
    expect(isInteger("1")).toBe(true);
    expect(isInteger("1", true)).toBe(false);
    expect(isInteger(1)).toBe(true);
    expect(isInteger(1.2)).toBe(false);
    expect(isInteger(1, true)).toBe(true);
    expect(isInteger("1", true)).toBe(false);
    expect(isInteger("claudio")).toBe(false);
    expect(isInteger(false)).toBe(true);
    expect(isInteger([])).toBe(false);
    expect(isInteger({})).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(NaN)).toBe(false);
    expect(isInteger(undefined)).toBe(false);
  });
});

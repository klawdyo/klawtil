import { isNumeric } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('isNumeric', () => {
  test("isNumeric", () => {
    expect(isNumeric("1")).toBe(true);
    expect(isNumeric(1, true)).toBe(true);
    expect(isNumeric("1", true)).toBe(false);
    expect(isNumeric(1)).toBe(true);
    expect(isNumeric(1.2)).toBe(true);
    expect(isNumeric("1.2")).toBe(true);
    expect(isNumeric("1.2", true)).toBe(false);
    expect(isNumeric("claudio")).toBe(false);
    expect(isNumeric([])).toBe(false);
    expect(isNumeric({})).toBe(false);
    expect(isNumeric(null)).toBe(false);
    expect(isNumeric(false)).toBe(true);
    expect(isNumeric(false, true)).toBe(false);
    expect(isNumeric(undefined)).toBe(false);
    expect(isNumeric(NaN)).toBe(false);
  });
});

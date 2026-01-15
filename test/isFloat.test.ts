import { isFloat } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('isFloat', () => {
  test("isFloat", () => {
    expect(isFloat("1")).toBe(false);
    expect(isFloat(1, true)).toBe(false);
    expect(isFloat("1", true)).toBe(false);
    expect(isFloat(1)).toBe(false);
    expect(isFloat(1.2)).toBe(true);
    expect(isFloat("1.2")).toBe(true);
    expect(isFloat("1.2", true)).toBe(false);
    expect(isFloat("claudio")).toBe(false);
    expect(isFloat(false)).toBe(false);
    expect(isFloat([])).toBe(false);
    expect(isFloat({})).toBe(false);
    expect(isFloat(null)).toBe(false);
    expect(isFloat(false)).toBe(false);
    expect(isFloat(undefined)).toBe(false);
    expect(isFloat(NaN)).toBe(false);
  });
});

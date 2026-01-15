import { isJSON } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('isJSON', () => {
  test("isJSON", () => {
    expect(isJSON(true)).toBe(false);
    expect(isJSON(false)).toBe(false);
    expect(isJSON("")).toBe(false);
    expect(isJSON(null)).toBe(false);
    expect(isJSON(undefined)).toBe(false);
    expect(isJSON(NaN)).toBe(false);
    expect(isJSON("claudio")).toBe(false);
    expect(isJSON(4654)).toBe(false);
    expect(isJSON(0)).toBe(false);
    expect(isJSON([1, 2, 3])).toBe(false);
    expect(isJSON(new Date())).toBe(false);
    expect(isJSON({ age: 21 })).toBe(true);
    expect(isJSON("{ age: 21 }")).toBe(false);
  });
});

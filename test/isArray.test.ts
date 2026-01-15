import { isArray } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('isArray', () => {
  test("isArray", () => {
    expect(isArray([])).toBe(true);
    expect(isArray({})).toBe(false);
    expect(isArray(0)).toBe(false);
    expect(isArray("claudio")).toBe(false);
  });
});

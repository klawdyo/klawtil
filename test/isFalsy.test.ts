import { isFalsy } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('isFalsy', () => {
  test("isFalsy", () => {
    expect(isFalsy(0)).toBe(true);
    expect(isFalsy("")).toBe(true);
    expect(isFalsy("0")).toBe(true);
    expect(isFalsy(NaN)).toBe(true);
    expect(isFalsy(null)).toBe(true);
    expect(isFalsy("NaN")).toBe(true);
    expect(isFalsy(false)).toBe(true);
    expect(isFalsy("null")).toBe(true);
    expect(isFalsy("false")).toBe(true);
    expect(isFalsy(undefined)).toBe(true);
    expect(isFalsy("undefined")).toBe(true);
  });
});

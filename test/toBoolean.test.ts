import { toBoolean } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('toBoolean', () => {
  test("toBoolean", () => {
    expect(toBoolean("a")).toBe(true);
    expect(toBoolean(1)).toBe(true);
    expect(toBoolean("true")).toBe(true);
    expect(toBoolean("0")).toBe(false);
    expect(toBoolean(0)).toBe(false);
    expect(toBoolean("false")).toBe(false);
    expect(toBoolean(false)).toBe(false);
    expect(toBoolean("")).toBe(false);
    expect(toBoolean("undefined")).toBe(false);
    expect(toBoolean(undefined)).toBe(false);
    expect(toBoolean("NaN")).toBe(false);
    expect(toBoolean(NaN)).toBe(false);
    expect(toBoolean("null")).toBe(false);
    expect(toBoolean(null)).toBe(false);
  });
});

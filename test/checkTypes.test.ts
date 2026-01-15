import { checkTypes } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('checkTypes', () => {
  test("checkTypes", () => {
    expect(checkTypes(1, String)).toBe(false);
    expect(checkTypes("1", String)).toBe(true);
    expect(checkTypes(1, Number)).toBe(true);
    expect(checkTypes("1", Number)).toBe(false);
    expect(checkTypes(1, [String, Number])).toBe(true);
    expect(checkTypes("a", [String, Number])).toBe(true);
    expect(checkTypes({}, [String, Number])).toBe(false);
    expect(checkTypes([], [String, Number])).toBe(false);
    expect(checkTypes([], [String, Number, Array])).toBe(true);
    expect(checkTypes({}, [String, Number, Array])).toBe(false);
    expect(checkTypes({}, [String, Number, Array, Object])).toBe(true);
    expect(checkTypes(null, [String, Number, Array, Object])).toBe(false);
    expect(checkTypes(undefined, [String, Number, Array, Object])).toBe(false);
  });
});

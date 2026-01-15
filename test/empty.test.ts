import { empty } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('empty', () => {
  test("empty - ", () => {
    expect(empty("")).toBe(true);
    expect(empty(null)).toBe(true);
    expect(empty(false)).toBe(false); // false é um valor. não é vazio
    expect(empty(undefined)).toBe(true);
    expect(empty([])).toBe(true);
    expect(empty({})).toBe(true);
  });
});

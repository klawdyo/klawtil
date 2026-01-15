import { isEmail } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('isEmail', () => {
  test("isEmail", () => {
    expect(isEmail("claudio")).toBe(false);
    expect(isEmail("claudio@claudio.com")).toBe(true);
    expect(isEmail("")).toBe(false);
    expect(isEmail(null)).toBe(false);
    expect(isEmail(undefined)).toBe(false);
    expect(isEmail([])).toBe(false);
    expect(isEmail({})).toBe(false);
    expect(isEmail(123)).toBe(false);
  });
});

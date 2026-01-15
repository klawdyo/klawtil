import { isDate } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('isDate', () => {
  test("isDate", () => {
    expect(isDate("12/12/29")).toBe(true);
    expect(isDate("31/12/29")).toBe(false);
    expect(isDate("12/31/29")).toBe(true);
    expect(isDate("12/12/2029")).toBe(true);
    expect(isDate("2029-12-12")).toBe(true);
  });
});

import { isTruthy } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('isTruthy', () => {
  test("isTruthy", () => {
    expect(isTruthy(0)).toBe(false);
    expect(isTruthy("")).toBe(false);
    expect(isTruthy("0")).toBe(false);
    expect(isTruthy(NaN)).toBe(false);
    expect(isTruthy(null)).toBe(false);
    expect(isTruthy("NaN")).toBe(false);
    expect(isTruthy(false)).toBe(false);
    expect(isTruthy("null")).toBe(false);
    expect(isTruthy("false")).toBe(false);
    expect(isTruthy(undefined)).toBe(false);
    expect(isTruthy("undefined")).toBe(false);
  });
});

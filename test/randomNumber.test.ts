import { randomNumber } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('randomNumber', () => {
  test("randomNumber", () => {
    const value1 = randomNumber(8, true);
    const value2 = randomNumber(4);

    expect(String(value1).length).toBe(8);

    expect(String(value2).length <= 4).toBe(true);
  });
});

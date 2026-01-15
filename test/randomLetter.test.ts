import { randomLetter } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('randomLetter', () => {
  test("randomLetter", () => {
    expect(randomLetter()).toMatch(/^[A-Z]{1}$/);
    expect(randomLetter()).toMatch(/^[A-Z]{1}$/);
  });
});

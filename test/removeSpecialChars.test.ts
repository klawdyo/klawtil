import { removeSpecialChars } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('removeSpecialChars', () => {
  test("removeSpecialChars", () => {
    expect(removeSpecialChars('(84) 9 9988-7766')).toBe('84999887766');
  });
});

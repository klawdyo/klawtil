import { clearNumber } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('clearNumber', () => {
  test("clearNumber", () => {
    expect(clearNumber("12345-6", 6)).toBe("123456");
    expect(clearNumber("12345678", 3)).toBe("123");
    expect(clearNumber(12345678, 3)).toBe("123");
    expect(clearNumber("12345", 10)).toBe("0000012345");
    expect(clearNumber(12345, 10)).toBe("0000012345");
    expect(clearNumber("(84) 9 9988-7766", 11)).toBe("84999887766");
  });
});

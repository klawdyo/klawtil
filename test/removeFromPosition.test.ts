import { removeFromPosition } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('removeFromPosition', () => {
  test("removeFromPosition", () => {
    expect(removeFromPosition("00001119922223445555", 7, 9)).toBe(
      "000011122223445555"
    );
    expect(removeFromPosition("AAACBBB", 3, 4)).toBe("AAABBB");
  });
});

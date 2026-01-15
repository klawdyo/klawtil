import { insertAtPosition } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('insertAtPosition', () => {
  test("insertAtPosition", () => {
    expect(insertAtPosition("AAABBB", "C", 3)).toBe("AAACBBB");
    expect(insertAtPosition("000011122223445555", 99, 7)).toBe(
      "00001119922223445555"
    );
  });
});

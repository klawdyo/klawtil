import { intersect } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('intersect', () => {
  test("intersect", () => {
    const result = intersect([1, 2, 3], [3, 4, 5]);

    expect(result[0]).toBe(3);
    expect(result.length).toBe(1);
  });
});

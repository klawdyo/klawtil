import { prefixObjectKeys } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('prefixObjectKeys', () => {
  test("prefixObjectKeys", () => {
    const original = {
      name: "ze",
      age: 23,
    };

    const result = prefixObjectKeys(original, "prefix_");

    expect(result).toHaveProperty("prefix_name");
    expect(result).toHaveProperty("prefix_age");
    expect(Object.keys(result).length).toBe(2);
    expect(result).toMatchObject({
      prefix_name: "ze",
      prefix_age: 23,
    });

    expect(prefixObjectKeys(original)).toMatchObject(original);
  });
});

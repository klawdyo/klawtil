import { removeAccent } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('removeAccent', () => {
  test("removeAccent", () => {
    expect(removeAccent("José Cláudio Medeiros de Lima")).toBe(
      "Jose Claudio Medeiros de Lima"
    );
  });
});

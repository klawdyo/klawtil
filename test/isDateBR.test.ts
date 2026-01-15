import { isDateBR } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('isDateBR', () => {
  test("isDateBR", () => {
    expect(isDateBR("31/07/2020")).toBe(true);
    expect(isDateBR("32/07/2020")).toBe(false);
    expect(isDateBR("07/24/2020")).toBe(false);
    expect(isDateBR("7/2/2020")).toBe(false);
  });
});

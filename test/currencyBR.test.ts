import { currencyBR } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('currencyBR', () => {
  test("currencyBR", () => {
    expect(currencyBR(12.34)).toBe("R$12,34");
    expect(currencyBR("12.34")).toBe("R$12,34");
    expect(() => currencyBR("12,34")).toThrowError(); // número com vírgula
  });
});

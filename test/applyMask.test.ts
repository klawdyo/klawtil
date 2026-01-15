import { applyMask } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('applyMask', () => {
  test("applyMask", () => {
    const possibilities = [
      {
        input: '59650000',
        mask: '00.000-000',
        expected: '59.650-000'
      },
      {
        input: '99877665544',
        mask: '(00) 0 0000-0000',
        expected: '(99) 8 7766-5544'
      },
      {
        input: 'EK2KZZUJ000148',
        mask: '00.000.000/0000-00',
        expected: 'EK.2KZ.ZUJ/0001-48'
      },
    ];

    for (const possibility of possibilities) {
      expect(applyMask(possibility.input, possibility.mask)).toBe(possibility.expected);
    }
  });
});

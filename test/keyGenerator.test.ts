import { keyGenerator } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('keyGenerator', () => {
  test("keyGenerator", () => {
    expect(keyGenerator(5)).toMatch(/^[A-Za-z0-9]{5}$/); // -> 11S9P
    expect(keyGenerator(5, false)).toMatch(/^[A-Za-z]{5}$/); // -> HrmTF
    expect(keyGenerator(5, false, false)).toMatch(/^[A-Z]{5}$/); // -> RHCWJ
    expect(keyGenerator(5, false, true, false)).toMatch(/^[a-z]{5}$/); // -> vzuyn

    expect(() => keyGenerator(5, false, false, false)).toThrowError();
  });
});

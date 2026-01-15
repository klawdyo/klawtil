import { upperFirst } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('upperFirst', () => {
  test("upperFirst", () => {
    expect(upperFirst("jose claudio")).toBe("Jose Claudio");
    expect(upperFirst("JOSE CLAUDIO")).toBe("Jose Claudio");
    expect(upperFirst("JoSe cLaUdIo")).toBe("Jose Claudio");
    expect(upperFirst("")).toBe("");
    expect(upperFirst("de")).toBe("de");
  });
});

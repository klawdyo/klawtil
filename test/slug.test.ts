import { slug } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('slug', () => {
  test("slug", () => {
    expect(slug("José Cláudio + ")).toBe("jose-claudio");
    expect(slug("José --    /|<>Cláu=dio ")).toBe("jose-claudio");
  });
});

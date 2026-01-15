import { quantity } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('quantity', () => {
  test("quantity", () => {
    expect(quantity(0, "mensagens", "mensagem", "nenhuma mensagem")).toBe(
      "nenhuma mensagem"
    );

    expect(quantity(0, "mensagens", "mensagem", null)).toBe("0 mensagem");

    expect(quantity(1, "mensagens", "mensagem", "nenhuma mensagem")).toBe(
      "1 mensagem"
    );

    expect(quantity(2, "mensagens", "mensagem", "nenhuma mensagem")).toBe(
      "2 mensagens"
    );
  });
});

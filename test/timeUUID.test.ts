import { timeUUID } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('timeUUID', () => {
  test("timeUUID - executa 10 mil vezes", () => {
    const num = 10000;
    let count = 0;
    const list: string[] = [];
    while (count < num) {
      const uuid = timeUUID();

      // Adiciona à lista de gerados
      list.push(uuid);

      // Checa se atende ao padrão uuv
      expect(uuid).toMatch(
        /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/
      );

      // Conta os gerados
      count++;
    }

    expect(count).toBe(num);
    expect(list.length).toBe(num);
    // Elimina os repetidos para ver se a quantidade é a mesma
    expect(new Set(list).size).toBe(num);
  });
});

import { whiteList } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('whiteList', () => {
  test("whiteList - Parâmetro como objeto", () => {
    const address = {
      id: 1,
      description: "decrição",
      city_id: 123,
      city: {
        id: 123,
        name: "açu",
      },
    };

    const result = whiteList(address, ["id", "description"]);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("description");
    expect(Object.keys(result).length).toBe(2);
    expect(result).toMatchObject({ description: "decrição", id: 1 });
  });

  test("whiteList - Parâmetro como array de objetos", () => {
    const address = [
      {
        id: 1,
        description: "decrição",
        city_id: 123,
        city: {
          id: 123,
          name: "açu",
        },
      },
    ];

    const result = whiteList(address, ["id", "description"]);

    expect(result[0]).toHaveProperty("id");
    expect(result[0]).toHaveProperty("description");
    expect(Object.keys(result[0]).length).toBe(2);
    expect(result[0]).toMatchObject({ description: "decrição", id: 1 });
  });
});

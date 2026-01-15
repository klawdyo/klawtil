import { groupBy } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('groupBy', () => {
  test("groupBy", () => {
    const list = [
      { id: 1, name: "claudio", age: 37, city: "fortaleza" },
      { id: 2, name: "isa", age: 9, city: "natal" },
      { id: 3, name: "jose", age: 37, city: "fortaleza" },
      { id: 4, name: "marta", age: 42, city: "afonso bezerra" },
      { id: 5, name: "joelma", age: 42, city: "afonso bezerra" },
      { id: 6, name: "jose", age: 24, city: "assu" },
    ];
    const result = groupBy(list, "name");

    // console.log(result);

    expect(result).toHaveProperty("claudio");
    expect(result).toHaveProperty("isa");
    expect(Object.keys(result).length).toBe(5);
    expect(result).toMatchObject({
      claudio: [{ id: 1, name: "claudio", age: 37, city: "fortaleza" }],
      isa: [{ id: 2, name: "isa", age: 9, city: "natal" }],
      jose: [
        { id: 3, name: "jose", age: 37, city: "fortaleza" },
        { id: 6, name: "jose", age: 24, city: "assu" },
      ],
      marta: [{ id: 4, name: "marta", age: 42, city: "afonso bezerra" }],
      joelma: [{ id: 5, name: "joelma", age: 42, city: "afonso bezerra" }],
    });

    // expect( groupBy ).toBe()
  });
});

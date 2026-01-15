import { objectFlat } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('objectFlat', () => {
  test("objectFlat", () => {
    const obj = {
      name: "claudio",
      address: {
        street: "Rua X",
      },
    };

    expect(objectFlat(obj)).toMatchObject({
      name: "claudio",
      "address.street": "Rua X",
    });
  });

  test("objectFlat - Teste Mudando o separador", () => {
    const obj = {
      name: "claudio",
      address: {
        street: "Rua X",
      },
    };

    expect(objectFlat(obj, "_")).toMatchObject({
      name: "claudio",
      address_street: "Rua X",
    });

    expect(objectFlat(obj, "/")).toMatchObject({
      name: "claudio",
      "address/street": "Rua X",
    });
  });

  test("objectFlat - null - Teste com uma dos itens com valor null", () => {
    const obj = {
      name: "claudio",
      address: {
        street: "Rua X",
        number: null,
      },
    };

    const flatten = objectFlat(obj, "_");

    expect(flatten).toMatchObject({
      name: "claudio",
      address_street: "Rua X",
      address_number: null,
    });
  });

  test("objectFlat - object - Teste com um dos itens sendo objeto não JSON", () => {
    const obj = {
      name: "claudio",
      info: {
        birth: new Date("1982-07-31"),
      },
    };

    expect(objectFlat(obj, "_")).toMatchObject({
      name: obj.name,
      info_birth: obj.info.birth,
    });
  });
});

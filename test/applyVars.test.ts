import { applyVars } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('applyVars', () => {
  test("applyVars", () => {
    const vars = {
      id: 1,
      name: "claudio",
      age: 39,
      email: "email@mail.com",
      address: {
        street: "Monkey St.",
        number: "599",
        city: "Halalala",
        zipcode: "9876543",
      },
    };
    const expected = "Olá, claudio. Seu e-mail ainda é email@mail.com?";

    expect(applyVars("Olá, :name. Seu e-mail ainda é :email?", vars)).toBe(
      expected
    );

    expect(
      applyVars("Olá, {name}. Seu e-mail ainda é {email}?", vars, {
        start: "{",
        end: "}",
      })
    ).toBe(expected);

    expect(
      applyVars("Olá, {{name}}. Seu e-mail ainda é {{email}}?", vars, {
        start: "{{",
        end: "}}",
      })
    ).toBe(expected);

    expect(
      applyVars(
        "My name is :name and my address is :address.street, :address.zipcode",
        vars
      )
    ).toBe("My name is claudio and my address is Monkey St., 9876543");

    expect(
      applyVars(
        "My name is {name} and my address is {address.street}, {address.zipcode}",
        vars,
        { start: "{", end: "}" }
      )
    ).toBe("My name is claudio and my address is Monkey St., 9876543");
  });
});

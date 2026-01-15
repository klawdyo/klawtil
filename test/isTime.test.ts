import { isTime } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('isTime', () => {
  test("isTime", () => {
    isTime("12:00"); // ->  true
    isTime("23:00"); // ->  true
    isTime("23:59"); // ->  true
    isTime("24:00"); // ->  false
    isTime("00:00"); // ->  true
    isTime("-12:00"); // ->  false
    isTime("aa:pp"); // ->  false
    isTime("23:60"); // ->  false
    isTime("00:00:00", true); // ->  true
    isTime("23:59:59", true); // ->  true
    isTime("24:59:59", true); // ->  false
    isTime("23:60:59", true); // ->  false
    isTime("23:59:65", true); // ->  false
    isTime("aa:bb:dd", true); // ->  false
    isTime(""); // ->  false
  });
});

import { filesize } from "../src/main";
import { test, expect, describe } from 'vitest';

describe('filesize', () => {
  test("filesize", () => {
    expect(filesize("")).toBe("0 byte");
    expect(filesize("0")).toBe("0 byte");

    expect(filesize(0)).toBe("0 byte");
    expect(filesize(1)).toBe("1 byte");
    expect(filesize(2)).toBe("2 bytes");

    expect(filesize(12354353)).toBe("11 Mb");

    expect(filesize(1023)).toBe("1023 bytes");
    expect(filesize(1024)).toBe("1 Kb");
    expect(filesize(1025)).toBe("1 Kb");

    expect(filesize(1 * 1024 * 1024)).toBe("1 Mb");
    expect(filesize(100 * 1024 * 1024)).toBe("100 Mb");

    expect(filesize(1 * 1024 * 1024 * 1024)).toBe("1 Gb");
    expect(filesize(55 * 1024 * 1024 * 1024)).toBe("55 Gb");
    expect(filesize(1000 * 1024 * 1024 * 1024)).toBe("1000 Gb");
    expect(filesize(10995116277760)).toBe("10240 Gb");
  });
});

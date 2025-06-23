import { getDock } from ".";

describe("getDock", () => {
  test("small index", () => {
    expect(getDock(1)).toBe("b");
    expect(getDock(0)).toBe("a");
    expect(getDock(25)).toBe("z");
  });
  test("large index", () => {
    expect(getDock(26)).toBe("aa");
    expect(getDock(27)).toBe("ab");
    expect(getDock(28)).toBe("ac");
    expect(getDock(29)).toBe("ad");
    expect(getDock(30)).toBe("ae");
  });
  test("larger index", () => {
    expect(getDock(26 + 26 * 26)).toBe("aaa");
  });
  test("even larger index", () => {
    expect(getDock(26 + 26 * 26 + 26 * 26 * 26 - 1)).toBe("zzz");
  });
});

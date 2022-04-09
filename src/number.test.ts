import { Proc } from "./common";
import { Zero, One, Two, Three, Fifteen, Five, Hundred } from "./number";

const CountOneUp: Proc<number> = (n) => n + 1;

const toInteger = (numberProc: Proc<Proc<number>>) => {
  return numberProc(CountOneUp)(0);
};

describe("Numbers", () => {
  it("zero", () => {
    expect(toInteger(Zero)).toEqual(0);
  });

  it("one", () => {
    expect(toInteger(One)).toEqual(1);
  });

  it("two", () => {
    expect(toInteger(Two)).toEqual(2);
  });

  it("three", () => {
    expect(toInteger(Three)).toEqual(3);
  });

  it("five", () => {
    expect(toInteger(Five)).toEqual(5);
  });

  it("fifteen", () => {
    expect(toInteger(Fifteen)).toEqual(15);
  });

  it("hundred", () => {
    expect(toInteger(Hundred)).toEqual(100);
  });
});

import { Boolean, False, If, True } from "./boolean";
import { Proc } from "./common";
import { Fifteen, Five, Hundred, One, Three, Two, Zero } from "./number";
import { IsZero } from "./predicates";

const CountOneUp: Proc<number> = (n) => n + 1;

const toInteger = (numberProc: Proc<Proc<number>>) => {
  return numberProc(CountOneUp)(0);
};

const toBoolean = (booleanProc: Proc<boolean, Proc<boolean>>) => {
  return booleanProc(true)(false)
}

const ifToBoolean = (booleanProc: Proc<boolean, Proc<boolean>>) => {
  return If(booleanProc)(true)(false)
}

const ifBooleanToStringFn = (booleanProc: Proc<() => string, Proc<() => string>>) => {
  return If(booleanProc)(() => 'TRUE')(() => 'FALSE')
}


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


describe('Boolean', () => {
  it('true', () => {
    expect(toBoolean(True)).toEqual(true)
  })

  it('false', () => {
    expect(toBoolean(False)).toEqual(false)
  })

  it('if', () => {
    expect(ifToBoolean(True)).toEqual(true)
    expect(ifToBoolean(False)).toEqual(false)
  })

  it('ifBooleanToStringFn', () => {
    expect(ifBooleanToStringFn(True)()).toEqual('TRUE')
    expect(ifBooleanToStringFn(False)()).toEqual('FALSE')
  })
})

describe('Predicate', () => {
  it('IsZero', () => {
    expect(toBoolean(IsZero(Zero))).toEqual(true)
    expect(toBoolean(IsZero(One))).toEqual(false)
    expect(toBoolean(IsZero(Two))).toEqual(false)
  })
})
import { False, If, True } from "./boolean";
import { Proc } from "./common";

const toBoolean = (booleanProc: Proc<boolean, Proc<boolean>>) => {
  return booleanProc(true)(false)
}

const ifToBoolean = (booleanProc: Proc<boolean, Proc<boolean>>) => {
  return If(booleanProc)(true)(false)
}

const ifBooleanToStringFn = (booleanProc: Proc<() => string, Proc<() => string>>) => {
  return If(booleanProc)(() => 'TRUE')(() => 'FALSE')
}

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
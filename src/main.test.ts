import { foo } from "."

describe('foo', () => {
  it('returns x', () => {
    expect(foo(2)).toEqual(2)
  })
})
import { Proc } from "./common"
import { Number } from "./number"

/**
 * Takes in a Number function input, and some arbitrary process
 * and input. Calls it N times, then calls it one extra time.
 */
export const Increment = <Y, Z extends Y, N extends Number<Y, Z>>(inputN: N) => {
  return (proc: Proc<Y, Z>) => {
    return (input: Z) => {
      return proc(inputN(proc)(input))
    }
  }
}
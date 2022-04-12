import { False, True, TruthType, FalseType, Boolean } from './boolean';
import { Proc } from './common';
import { One, Zero } from './number';

/**
 * The isZero function is described as
 * if n === 0, return true
 * else return false
 * 
 * We know that zero returns the input without 
 * ever calling the process (see @link "Zero").
 * 
 * So If it's Zero, then we would want the truth predicate
 * to be the input. 
 * 
 * If it's nonzero, then we would want the false predicate 
 * called 
 */

export const IsZero = <X, Y extends X>(proc: Proc<Proc<Boolean<X, Y>, Boolean<X, Y>>, Proc<Boolean<X, Y>>>) => {
  return proc((input) => {
    return False
  })(True);
}


/**
 * Booleans are just conditionals:
 * if true then X else Y
 * 
 * so if something is true, we just want to return X
 * else Y.
 * 
 * So the definition of true is just X, and the
 * the definition of Y is just Y
 */

import { Proc } from './common';


export const True =
  <TruthFn>(inputX: TruthFn) =>
    <FalseFn>(inputY: FalseFn) => inputX

export const False =
  <TruthFn>(inputX: TruthFn) =>
    <FalseFn>(inputY: FalseFn) => inputY

export const If = <TruthFn, FalseFn>(proc: Proc<TruthFn, Proc<FalseFn>>) => {
  return proc
}
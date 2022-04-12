
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
  <TruthFn, FalseFn extends TruthFn>(inputX: TruthFn) =>
    (inputY: FalseFn) => inputX

export const False =
  <TruthFn, FalseFn extends TruthFn>(inputX: TruthFn) =>
    (inputY: FalseFn) => inputY

export type TruthType<TruthFn, FalseFn extends TruthFn> = (inputX: TruthFn) => (inputY: FalseFn) => TruthFn;
export type FalseType<TruthFn, FalseFn extends TruthFn> = (inputX: TruthFn) => (inputY: FalseFn) => FalseFn;
export type Boolean<TruthFn, FalseFn extends TruthFn> = TruthType<TruthFn, FalseFn> | FalseType<TruthFn, FalseFn>;

export const If = <TruthFn, FalseFn>(proc: Proc<TruthFn, Proc<FalseFn>>) => {
  return proc
}
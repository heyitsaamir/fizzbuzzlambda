/**
 * Numbers are essentially defined as "counts".
 * If a process occurs N times, that is a number.
 *
 * If that process is defined as (input: X) = X + 1, then we're incrementing by 1
 * for each time that process is called. But the process can be anything.
 */

import { Proc } from "./common";

export type Number<Y, Z extends Y> = (proc: Proc<Y, Z>) => (input: Y) => Y | Z;

export const Zero =
  <Y, Z extends Y>(proc: Proc<Y, Z>) =>
    (input: Y) => {
      return input;
    };

export const One =
  <Y, Z extends Y>(proc: Proc<Y, Z>) =>
    (input: Y) => {
      return proc(input);
    };

export const Two =
  <Y, Z extends Y>(proc: Proc<Y, Z>) =>
    (input: Y) => {
      return proc(proc(input));
    };

export const Three =
  <Y, Z extends Y>(proc: Proc<Y, Z>) =>
    (input: Y) => {
      return proc(proc(proc(input)));
    };

export const Five =
  <Y, Z extends Y>(proc: Proc<Y, Z>) =>
    (input: Y) => {
      return proc(proc(proc(proc(proc(input)))));
    };

export const Fifteen =
  <Y, Z extends Y>(proc: Proc<Y, Z>) =>
    (input: Y) => {
      return proc(
        proc(
          proc(
            proc(
              proc(
                proc(proc(proc(proc(proc(proc(proc(proc(proc(proc(input))))))))))
              )
            )
          )
        )
      );
    };

export const Hundred =
  <Y, Z extends Y>(proc: Proc<Y, Z>) =>
    (input: Y) => {
      return proc(
        proc(
          proc(
            proc(
              proc(
                proc(
                  proc(
                    proc(
                      proc(
                        proc(
                          proc(
                            proc(
                              proc(
                                proc(
                                  proc(
                                    proc(
                                      proc(
                                        proc(
                                          proc(
                                            proc(
                                              proc(
                                                proc(
                                                  proc(
                                                    proc(
                                                      proc(
                                                        proc(
                                                          proc(
                                                            proc(
                                                              proc(
                                                                proc(
                                                                  proc(
                                                                    proc(
                                                                      proc(
                                                                        proc(
                                                                          proc(
                                                                            proc(
                                                                              proc(
                                                                                proc(
                                                                                  proc(
                                                                                    proc(
                                                                                      proc(
                                                                                        proc(
                                                                                          proc(
                                                                                            proc(
                                                                                              proc(
                                                                                                proc(
                                                                                                  proc(
                                                                                                    proc(
                                                                                                      proc(
                                                                                                        proc(
                                                                                                          proc(
                                                                                                            proc(
                                                                                                              proc(
                                                                                                                proc(
                                                                                                                  proc(
                                                                                                                    proc(
                                                                                                                      proc(
                                                                                                                        proc(
                                                                                                                          proc(
                                                                                                                            proc(
                                                                                                                              proc(
                                                                                                                                proc(
                                                                                                                                  proc(
                                                                                                                                    proc(
                                                                                                                                      proc(
                                                                                                                                        proc(
                                                                                                                                          proc(
                                                                                                                                            proc(
                                                                                                                                              proc(
                                                                                                                                                proc(
                                                                                                                                                  proc(
                                                                                                                                                    proc(
                                                                                                                                                      proc(
                                                                                                                                                        proc(
                                                                                                                                                          proc(
                                                                                                                                                            proc(
                                                                                                                                                              proc(
                                                                                                                                                                proc(
                                                                                                                                                                  proc(
                                                                                                                                                                    proc(
                                                                                                                                                                      proc(
                                                                                                                                                                        proc(
                                                                                                                                                                          proc(
                                                                                                                                                                            proc(
                                                                                                                                                                              proc(
                                                                                                                                                                                proc(
                                                                                                                                                                                  proc(
                                                                                                                                                                                    proc(
                                                                                                                                                                                      proc(
                                                                                                                                                                                        proc(
                                                                                                                                                                                          proc(
                                                                                                                                                                                            proc(
                                                                                                                                                                                              proc(
                                                                                                                                                                                                proc(
                                                                                                                                                                                                  proc(
                                                                                                                                                                                                    proc(
                                                                                                                                                                                                      proc(
                                                                                                                                                                                                        proc(
                                                                                                                                                                                                          proc(
                                                                                                                                                                                                            proc(
                                                                                                                                                                                                              input
                                                                                                                                                                                                            )
                                                                                                                                                                                                          )
                                                                                                                                                                                                        )
                                                                                                                                                                                                      )
                                                                                                                                                                                                    )
                                                                                                                                                                                                  )
                                                                                                                                                                                                )
                                                                                                                                                                                              )
                                                                                                                                                                                            )
                                                                                                                                                                                          )
                                                                                                                                                                                        )
                                                                                                                                                                                      )
                                                                                                                                                                                    )
                                                                                                                                                                                  )
                                                                                                                                                                                )
                                                                                                                                                                              )
                                                                                                                                                                            )
                                                                                                                                                                          )
                                                                                                                                                                        )
                                                                                                                                                                      )
                                                                                                                                                                    )
                                                                                                                                                                  )
                                                                                                                                                                )
                                                                                                                                                              )
                                                                                                                                                            )
                                                                                                                                                          )
                                                                                                                                                        )
                                                                                                                                                      )
                                                                                                                                                    )
                                                                                                                                                  )
                                                                                                                                                )
                                                                                                                                              )
                                                                                                                                            )
                                                                                                                                          )
                                                                                                                                        )
                                                                                                                                      )
                                                                                                                                    )
                                                                                                                                  )
                                                                                                                                )
                                                                                                                              )
                                                                                                                            )
                                                                                                                          )
                                                                                                                        )
                                                                                                                      )
                                                                                                                    )
                                                                                                                  )
                                                                                                                )
                                                                                                              )
                                                                                                            )
                                                                                                          )
                                                                                                        )
                                                                                                      )
                                                                                                    )
                                                                                                  )
                                                                                                )
                                                                                              )
                                                                                            )
                                                                                          )
                                                                                        )
                                                                                      )
                                                                                    )
                                                                                  )
                                                                                )
                                                                              )
                                                                            )
                                                                          )
                                                                        )
                                                                      )
                                                                    )
                                                                  )
                                                                )
                                                              )
                                                            )
                                                          )
                                                        )
                                                      )
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    };

/**
 * Numbers are essentially defined as "counts".
 * If a process occurs N times, that is a number.
 *
 * If that process is defined as (input: X) = X + 1, then we're incrementing by 1
 * for each time that process is called. But the process can be anything.
 */

import { Proc } from "./common";

export const Zero =
  <Y>(_proc: Proc<Y>) =>
  (input: Y) => {
    return input;
  };

export const One =
  <Y>(proc: Proc<Y>) =>
  (input: Y) => {
    return proc(input);
  };

export const Two =
  <Y>(proc: Proc<Y>) =>
  (input: Y) => {
    return proc(proc(input));
  };

export const Three =
  <Y>(proc: Proc<Y>) =>
  (input: Y) => {
    return proc(proc(proc(input)));
  };

export const Five =
  <Y>(proc: Proc<Y>) =>
  (input: Y) => {
    return proc(proc(proc(proc(proc(input)))));
  };

export const Fifteen =
  <Y>(proc: Proc<Y>) =>
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
  <Y>(proc: Proc<Y>) =>
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

import { EnumDefault } from "."

enum types {
  ARITH_NONE = 0,
  ARITH_ADD = 1,
  ARITH_MULTI = 2,
  ARITH_SUB = 3,
  ARITH_DIVIDE = 4,
}

export const ArithType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  LINEAR = 0,
  QUADRATIC = 1,
  CUBIC = 2,
}

export const OpennessFuncType: EnumDefault = {
  __signed: true,
  types: types,
}
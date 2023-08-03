import { EnumDefault } from "."

enum types {
  Trigger = 0,
  Bool = 1,
  Int = 2,
  Float = 3,
}

export const AnimatorParamType: EnumDefault = {
  __signed: true,
  types: types,
}

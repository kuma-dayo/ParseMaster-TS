import { EnumDefault } from "."

enum types {
  All = 0,
  Walk = 1,
  Run = 2,
  None = 3,
}

export const PositionModifyState: EnumDefault = {
  __signed: true,
  types: types,
}

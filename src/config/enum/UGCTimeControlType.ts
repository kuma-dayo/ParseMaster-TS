import { EnumDefault } from "."

enum types {
  Level = 0,
  Challenge = 1,
  Default = 2,
}

export const UGCTimeControlType: EnumDefault = {
  __signed: true,
  types: types,
}

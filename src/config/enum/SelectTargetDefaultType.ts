import { EnumDefault } from "."

enum types {
  First = 0,
  Loop = 1,
  None = 2,
}

export const SelectTargetDefaultType: EnumDefault = {
  __signed: true,
  types: types,
}

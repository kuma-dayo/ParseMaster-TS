import { EnumDefault } from "."

enum types {
  TL = 0,
  T = 1,
  TR = 2,
  L = 3,
  R = 4,
  BL = 5,
  B = 6,
  BR = 7,
}

export const WidgetInfoPos: EnumDefault = {
  __signed: true,
  types: types,
}

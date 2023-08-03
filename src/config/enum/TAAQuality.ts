import { EnumDefault } from "."

enum types {
  TAALow = 0,
  TAAHigh = 1,
}

export const TAAQuality: EnumDefault = {
  __signed: true,
  types: types,
}

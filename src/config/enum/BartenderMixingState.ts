import { EnumDefault } from "."

enum types {
  LIGHT = 0,
  MIDDLE = 1,
  HEAVY = 2,
}

export const BartenderMixingState: EnumDefault = {
  __signed: true,
  types: types,
}
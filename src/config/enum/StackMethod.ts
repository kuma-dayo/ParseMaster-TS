import { EnumDefault } from "."

enum types {
  Top = 0,
  Sum = 1,
  Multiplied = 2,
  OneMinusMultiplied = 3,
}

export const StackMethod: EnumDefault = {
  __signed: true,
  types: types,
}

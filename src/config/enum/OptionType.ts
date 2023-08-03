import { EnumDefault } from "."

enum types {
  Default = 0,
  VeryLow = 1,
  Low = 2,
  Medium = 3,
  High = 4,
  VeryHigh = 5,
}

export const OptionType: EnumDefault = {
  __signed: true,
  types: types,
}

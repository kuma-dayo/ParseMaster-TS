import { EnumDefault } from "."

enum types {
  VeryLow = 0,
  Low = 1,
  Medium = 2,
  High = 3,
  VeryHigh = 4,
}

export const ShadowQuality: EnumDefault = {
  __signed: true,
  types: types,
}

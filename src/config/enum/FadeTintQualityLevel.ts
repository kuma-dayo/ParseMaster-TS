import { EnumDefault } from "."

enum types {
  VeryLow = 1,
  Low = 2,
  Middle = 3,
  High = 4,
  VeryHigh = 5,
  Num = 6,
}

export const FadeTintQualityLevel: EnumDefault = {
  __signed: true,
  types: types,
}
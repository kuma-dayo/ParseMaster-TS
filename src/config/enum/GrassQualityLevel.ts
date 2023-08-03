import { EnumDefault } from "."

enum types {
  VeryLow = 1,
  Low = 2,
  Middle = 3,
  High = 4,
  VeryHigh = 5,
  UltraHigh = 6,
  Num = 8,
}

export const GrassQualityLevel: EnumDefault = {
  __signed: true,
  types: types,
}
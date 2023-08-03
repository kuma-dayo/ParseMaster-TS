import { EnumDefault } from "."

enum types {
  Default = 0,
  Topmost = 1,
  High = 2,
  Middle = 3,
  Low = 4,
  VeryLow = 5,
  Off = 6,
}

export const VolatileType: EnumDefault = {
  __signed: true,
  types: types,
}
import { EnumDefault } from "."

enum types {
  Low = 0,
  Medium = 1,
  High = 2,
  VeryHigh = 3,
}

export const ConfigShadowResolution: EnumDefault = {
  __signed: true,
  types: types,
}

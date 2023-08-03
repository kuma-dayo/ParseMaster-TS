import { EnumDefault } from "."

enum types {
  Low = 0,
  Middle = 1,
  High = 2,
  Invalid = 3,
}

export const LightLevel: EnumDefault = {
  __signed: true,
  types: types,
}

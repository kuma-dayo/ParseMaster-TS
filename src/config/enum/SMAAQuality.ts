import { EnumDefault } from "."

enum types {
  Low = 0,
  Medium = 1,
  High = 2,
  Ultra = 3,
}

export const SMAAQuality: EnumDefault = {
  __signed: true,
  types: types,
}

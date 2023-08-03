import { EnumDefault } from "."

enum types {
  None = 0,
  iOS = 1,
  Standalone = 2,
  Android = 3,
  PS4 = 4,
  Switch = 5,
}

export const GuidePlatform: EnumDefault = {
  __signed: true,
  types: types,
}
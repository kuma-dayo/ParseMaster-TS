import { EnumDefault } from "."

enum types {
  None = 0,
  Rise = 1,
  Fade = 2,
  All = 3,
}

export const ClimateTrendType: EnumDefault = {
  __signed: true,
  types: types,
}

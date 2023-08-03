import { EnumDefault } from "."

enum types {
  AllEnter = 0,
  AllInScope = 1,
  OneInScope = 2,
}

export const AimType: EnumDefault = {
  __signed: true,
  types: types,
}

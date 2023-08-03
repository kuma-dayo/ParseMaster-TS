import { EnumDefault } from "."

enum types {
  None = 0,
  Ray = 1,
  Spray = 2,
  Wall = 3,
}

export const GearType: EnumDefault = {
  __signed: true,
  types: types,
}

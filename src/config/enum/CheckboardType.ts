import { EnumDefault } from "."

enum types {
  None = 0,
  MSAA2x = 1,
  LineHalf = 2,
}

export const CheckboardType: EnumDefault = {
  __signed: true,
  types: types,
}
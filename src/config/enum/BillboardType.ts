import { EnumDefault } from "."

enum types {
  None = 0,
  Sneak = 1,
  Icon = 2,
}

export const BillboardType: EnumDefault = {
  __signed: true,
  types: types,
}

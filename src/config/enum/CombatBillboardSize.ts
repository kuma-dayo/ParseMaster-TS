import { EnumDefault } from "."

enum types {
  Normal = 0,
  Big = 1,
  Grand = 2,
  Small = 3,
}

export const CombatBillboardSize: EnumDefault = {
  __signed: true,
  types: types,
}
import { EnumDefault } from "."

enum types {
  None = 0,
  Melee = 1,
  Range = 2,
  Default = 3,
}

export const AttackType: EnumDefault = {
  __signed: true,
  types: types,
}

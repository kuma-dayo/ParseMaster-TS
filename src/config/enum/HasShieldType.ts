import { EnumDefault } from "."

enum types {
  EliteShield = 0,
  ElementShield = 1,
  GlobalShield = 2,
  All = 3,
}

export const HasShieldType: EnumDefault = {
  __signed: true,
  types: types,
}
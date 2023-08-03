import { EnumDefault } from "."

enum types {
  HPMaxPercent = 0,
  HPCurPercent = 1,
  DamageConstant = 2,
}

export const DamageClampType: EnumDefault = {
  __signed: true,
  types: types,
}
import { EnumDefault } from "."

enum types {
  Caster = 0,
  Self = 1,
}

export const DamageAttacker: EnumDefault = {
  __signed: true,
  types: types,
}

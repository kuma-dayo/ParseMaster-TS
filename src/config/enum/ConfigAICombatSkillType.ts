import { EnumDefault } from "."

enum types {
  Unclassified = 0,
  MeleeAttack = 1,
  RangedAttack = 2,
}

export const ConfigAICombatSkillType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  normalMove = 0,
  combatMove = 1,
  combatAir = 2,
  combatSkillAir = 3,
  performMove = 4,
  combatSkillMove = 5,
}

export const MoveType: EnumDefault = {
  __signed: true,
  types: types,
}

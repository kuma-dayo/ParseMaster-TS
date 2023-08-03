import { EnumDefault } from "."

enum types {
  UNCLASSIFIED = 0,
  FIGHTER = 1,
  MAGE = 2,
  SUP = 3,
  COMBATROLE_COUNT = 4,
}

export const ConfigAICombatRole: EnumDefault = {
  __signed: true,
  types: types,
}

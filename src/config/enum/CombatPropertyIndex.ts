import { EnumDefault } from "."

enum types {
  HP = 0,
  ATTACK = 1,
  DEFENSE = 2,
  WEIGHT = 3,
  ENDURE = 4,
  LEVEL = 5,
  ELEMENTADDHURT = 6,
  DEFENSEIGNORE = 7,
}

export const CombatPropertyIndex: EnumDefault = {
  __signed: true,
  types: types,
}

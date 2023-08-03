import { EnumDefault } from "."

enum types {
  None = 0,
  ElementLevelCo = 1,
  PlayerElementLevelCo = 2,
  PlayerShieldLevelCo = 3,
  PlayerElementLevelCoWithMastery = 4,
}

export const SystemValuerType: EnumDefault = {
  __signed: true,
  types: types,
}

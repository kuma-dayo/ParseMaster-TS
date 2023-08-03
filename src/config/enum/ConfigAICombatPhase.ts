import { EnumDefault } from "."

enum types {
  Default = 0,
  P1 = 1,
  P2 = 2,
  P3 = 3,
  P4 = 4,
  P5 = 5,
}

export const ConfigAICombatPhase: EnumDefault = {
  __signed: true,
  types: types,
}

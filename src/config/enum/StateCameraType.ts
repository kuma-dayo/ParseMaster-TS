import { EnumDefault } from "."

enum types {
  normalMove = 0,
  combatNormal = 1,
  combatBeHit = 2,
}

export const StateCameraType: EnumDefault = {
  __signed: true,
  types: types,
}

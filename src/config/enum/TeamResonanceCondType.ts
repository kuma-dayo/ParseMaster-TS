import { EnumDefault } from "."

enum types {
  TEAM_RESONANCE_COND_NONE = 0,
  TEAM_RESONANCE_COND_ALL_DIFFERENT = 1,
}

export const TeamResonanceCondType: EnumDefault = {
  __signed: true,
  types: types,
}

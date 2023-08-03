import { EnumDefault } from "."

enum types {
  FLEUR_FAIR_MINI_GAME_NONE = 0,
  FLEUR_FAIR_MINI_GAME_BALLOON = 1,
  FLEUR_FAIR_MINI_GAME_FALL = 2,
  FLEUR_FAIR_MINI_GAME_MUSIC = 3,
}

export const FleurFairMiniGameType: EnumDefault = {
  __signed: true,
  types: types,
}

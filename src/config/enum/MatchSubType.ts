import { EnumDefault } from "."

enum types {
  MATCH_SUB_TYPE_NONE = 0,
  MATCH_SUB_TYPE_HIDE = 1,
  MATCH_SUB_TYPE_BOUNCE_CONJURING = 2,
  MATCH_SUB_TYPE_ISLAND_PARTY = 3,
  MATCH_SUB_TYPE_CHAR_AMUSEMENT = 4,
  MATCH_SUB_TYPE_BRICK_BREAKER = 5,
  MATCH_SUB_TYPE_LAN_V3_BOAT_GAME_MULTI = 6,
  MATCH_SUB_TYPE_PACMAN = 7,
}

export const MatchSubType: EnumDefault = {
  __signed: true,
  types: types,
}

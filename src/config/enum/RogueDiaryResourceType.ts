import { EnumDefault } from "."

enum types {
  ROGUE_DIARY_GET_FIGHT = 0,
  ROGUE_DIARY_GET_CHALLENGE = 1,
  ROGUE_DIARY_GET_BOSS = 2,
  ROGUE_DIARY_USE_REROLL = 3,
  ROGUE_DIARY_GET_BUYCARD = 4,
  ROGUE_DIARY_GET_REVIVE = 5,
}

export const RogueDiaryResourceType: EnumDefault = {
  __signed: true,
  types: types,
}

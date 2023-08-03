import { EnumDefault } from "."

enum types {
  SALVAGE_PLAY_TYPE_NONE = 0,
  SALVAGE_PLAY_TYPE_LAND = 1,
  SALVAGE_PLAY_TYPE_SEA = 2,
  SALVAGE_PLAY_TYPE_CARRIAGE = 3,
  SALVAGE_PLAY_TYPE_ESCORT = 4,
  SALVAGE_PLAY_TYPE_BOSS = 5,
}

export const SalvagePlayType: EnumDefault = {
  __signed: true,
  types: types,
}
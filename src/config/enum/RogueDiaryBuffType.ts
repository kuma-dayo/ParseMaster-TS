import { EnumDefault } from "."

enum types {
  ROGUE_DIARY_BUFF_NONE = 0,
  ROGUE_DIARY_BUFF_R = 1,
  ROGUE_DIARY_BUFF_SR = 2,
}

export const RogueDiaryBuffType: EnumDefault = {
  __signed: true,
  types: types,
}

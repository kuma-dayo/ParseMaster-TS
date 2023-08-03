import { EnumDefault } from "."

enum types {
  LUNA_RITE_QUEST_TYPE_MAINLINE = 0,
  LUNA_RITE_QUEST_TYPE_BIGWORLD = 1,
}

export const LunaRiteQuestType: EnumDefault = {
  __signed: true,
  types: types,
}

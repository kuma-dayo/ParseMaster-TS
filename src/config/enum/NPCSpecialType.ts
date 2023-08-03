import { EnumDefault } from "."

enum types {
  NPC_SPECIAL_NONE = 0,
  NPC_SPECIAL_ARANARA = 1,
}

export const NPCSpecialType: EnumDefault = {
  __signed: true,
  types: types,
}

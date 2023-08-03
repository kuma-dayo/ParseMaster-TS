import { EnumDefault } from "."

enum types {
  DUNGEON_ENTRY_CONDITION_NONE = 0,
  DUNGEON_ENTRY_CONDITION_LEVEL = 1,
  DUNGEON_ENTRY_CONDITION_QUEST = 2,
}

export const DungeonEntrySatisfiedConditionType: EnumDefault = {
  __signed: true,
  types: types,
}
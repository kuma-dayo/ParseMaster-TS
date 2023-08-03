import { EnumDefault } from "."

enum types {
  FUNGUS_TRAINING_DUNGEON_NONE = 0,
  FUNGUS_TRAINING_DUNGEON_ATTACK = 1,
  FUNGUS_TRAINING_DUNGEON_DEFEND = 2,
}

export const FungusTrainingDungeonType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  None = 0,
  DungeonLevel = 1,
  WorldLevel = 2,
  Creator = 3,
}

export const LevelOption: EnumDefault = {
  __signed: true,
  types: types,
}

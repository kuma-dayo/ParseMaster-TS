import { EnumDefault } from "."

enum types {
  WORLD_NONE = 0,
  WORLD_PLAYER = 1,
  WORLD_HOME = 2,
}

export const WorldType: EnumDefault = {
  __signed: true,
  types: types,
}

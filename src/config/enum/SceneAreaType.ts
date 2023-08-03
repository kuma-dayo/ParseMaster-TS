import { EnumDefault } from "."

enum types {
  NORMAL = 0,
  ALL = 1,
  Other = 2,
}

export const SceneAreaType: EnumDefault = {
  __signed: true,
  types: types,
}

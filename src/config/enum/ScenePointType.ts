import { EnumDefault } from "."

enum types {
  NORMAL = 0,
  TOWER = 1,
  PORTAL = 2,
  Other = 3,
}

export const ScenePointType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  NAVMESH_MODE_DEFAULT = 0,
  NAVMESH_MODE_POLYGON = 1,
}

export const NavmeshModeType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  AREA = 0,
  SUBAREA = 1,
  POLYGON = 2,
  BIGWORLD = 3,
}

export const RegionType: EnumDefault = {
  __signed: true,
  types: types,
}

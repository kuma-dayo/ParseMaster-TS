import { EnumDefault } from "."

enum types {
  AREA_TERRAIN_NONE = 0,
  AREA_TERRAIN_CITY = 1,
  AREA_TERRAIN_OUTDOOR = 2,
}

export const AreaTerrainType: EnumDefault = {
  __signed: true,
  types: types,
}

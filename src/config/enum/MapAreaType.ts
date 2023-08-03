import { EnumDefault } from "."

enum types {
  MAP_AREA_TYPE_NONE = 0,
  MAP_AREA_TYPE_EROSION = 1,
  MAP_AREA_TYPE_LEVEL_TAG = 2,
}

export const MapAreaType: EnumDefault = {
  __signed: true,
  types: types,
}

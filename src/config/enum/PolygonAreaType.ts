import { EnumDefault } from "."

enum types {
  POLYGON_AREA_TYPE_INSIDE = 0,
  POLYGON_AREA_TYPE_OUTSIDE = 1,
}

export const PolygonAreaType: EnumDefault = {
  __signed: true,
  types: types,
}

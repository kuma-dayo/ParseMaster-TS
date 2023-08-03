import { EnumDefault } from "."

enum types {
  Plain = 0,
  Forest = 1,
  Hill = 2,
  Water = 3,
  Mountain = 4,
}

export const ConfigLevelPolygonTag: EnumDefault = {
  __signed: true,
  types: types,
}
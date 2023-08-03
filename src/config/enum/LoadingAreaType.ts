import { EnumDefault } from "."

enum types {
  LOADING_AREA_NONE = 0,
  LOADING_AREA_CITY = 1,
  LOADING_AREA_OUTDOOR = 2,
}

export const LoadingAreaType: EnumDefault = {
  __signed: true,
  types: types,
}

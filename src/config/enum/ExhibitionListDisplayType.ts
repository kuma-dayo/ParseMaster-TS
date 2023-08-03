import { EnumDefault } from "."

enum types {
  EXHIBITION_DISPLAY_TYPE_NONE = 0,
  EXHIBITION_DISPLAY_TYPE_TIME_MINSEC = 1,
  EXHIBITION_DISPLAY_TYPE_INT = 2,
}

export const ExhibitionListDisplayType: EnumDefault = {
  __signed: true,
  types: types,
}

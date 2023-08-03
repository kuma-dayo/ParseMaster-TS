import { EnumDefault } from "."

enum types {
  EXHIBITION_SCORE_NONE = 0,
  EXHIBITION_SCORE_VALUE = 1,
  EXHIBITION_SCORE_DISPLAY_PARAM_FACTOR = 2,
}

export const ExhibitionScoreType: EnumDefault = {
  __signed: true,
  types: types,
}

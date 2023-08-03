import { EnumDefault } from "."

enum types {
  LOC_DEFAULT = 0,
  LOC_IMAGE = 1,
  LOC_TEXT = 2,
  LOC_SUBTITLE = 3,
  LOC_TROPHY_SET_ICON = 4,
}

export const LocalizationAssetType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  HOME_FIELD_NONE = 0,
  HOME_FIELD_DRY = 1,
  HOME_FIELD_FLOWER = 2,
  HOME_FIELD_WATER = 3,
}

export const HomeWorldFieldType: EnumDefault = {
  __signed: true,
  types: types,
}

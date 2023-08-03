import { EnumDefault } from "."

enum types {
  RELIQUARY_ITEM = 0,
  BARTENDER_ITEM = 1,
  DEFAULT_ITEM = 100,
}

export const DisplayItemType: EnumDefault = {
  __signed: true,
  types: types,
}

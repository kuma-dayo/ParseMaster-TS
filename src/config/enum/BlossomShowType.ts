import { EnumDefault } from "."

enum types {
  BLOSSOM_SHOWTYPE_NONE = 0,
  BLOSSOM_SHOWTYPE_CHALLENGE = 1,
  BLOSSOM_SHOWTYPE_NPCTALK = 2,
  BLOSSOM_SHOWTYPE_GROUPCHALLENGE = 3,
}

export const BlossomShowType: EnumDefault = {
  __signed: true,
  types: types,
}
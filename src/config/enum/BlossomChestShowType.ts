import { EnumDefault } from "."

enum types {
  BLOSSOM_CHEST_SHOWTYPE_BLOSSOM = 0,
  BLOSSOM_CHEST_SHOWTYPE_NO_RESIN = 1,
}

export const BlossomChestShowType: EnumDefault = {
  __signed: true,
  types: types,
}
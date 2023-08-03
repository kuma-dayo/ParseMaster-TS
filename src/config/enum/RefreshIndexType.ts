import { EnumDefault } from "."

enum types {
  REFRESHINDEX_MONSTER = 0,
  REFRESHINDEX_GADGET = 1,
}

export const RefreshIndexType: EnumDefault = {
  __signed: true,
  types: types,
}
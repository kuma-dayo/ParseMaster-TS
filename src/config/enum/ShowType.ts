import { EnumDefault } from "."

enum types {
  SHOWTYPE_SHOW = 0,
  SHOWTYPE_HIDE = 1,
}

export const ShowType: EnumDefault = {
  __signed: true,
  types: types,
}

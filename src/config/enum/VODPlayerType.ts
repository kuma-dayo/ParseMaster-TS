import { EnumDefault } from "."

enum types {
  Live = 0,
}

export const VODPlayerType: EnumDefault = {
  __signed: true,
  types: types,
}

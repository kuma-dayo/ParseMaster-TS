import { EnumDefault } from "."

enum types {
  BUFF_REFRESH = 0,
  BUFF_EXTEND = 1,
  BUFF_STACK = 2,
}

export const BuffStackType: EnumDefault = {
  __signed: true,
  types: types,
}
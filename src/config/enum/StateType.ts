import { EnumDefault } from "."

enum types {
  BUFF_NONE = 0,
  BUFF_CONTROL = 1,
}

export const StateType: EnumDefault = {
  __signed: true,
  types: types,
}

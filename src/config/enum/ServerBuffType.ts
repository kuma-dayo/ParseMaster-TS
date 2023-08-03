import { EnumDefault } from "."

enum types {
  SERVER_BUFF_NONE = 0,
  SERVER_BUFF_AVATAR = 1,
  SERVER_BUFF_TEAM = 2,
  SERVER_BUFF_TOWER = 3,
}

export const ServerBuffType: EnumDefault = {
  __signed: true,
  types: types,
}

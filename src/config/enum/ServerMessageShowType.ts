import { EnumDefault } from "."

enum types {
  SERVER_MESSAGE_SHOW_TYPE_NONE = 0,
  SERVER_MESSAGE_SHOW_TYPE_MESSAGE = 1,
  SERVER_MESSAGE_SHOW_TYPE_INFO_MESSAGE = 2,
}

export const ServerMessageShowType: EnumDefault = {
  __signed: true,
  types: types,
}

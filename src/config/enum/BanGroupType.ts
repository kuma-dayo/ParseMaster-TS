import { EnumDefault } from "."

enum types {
  BAN_GROUP_INVALID = 0,
  BAN_GROUP_COMMON = 1,
  BAN_GROUP_TRANSPORT_ONLY = 2,
  BAN_GROUP_TRANSPORT_MAP = 3,
  BAN_GROUP_TRANSPOR_GOTO_SCENE = 4,
}

export const BanGroupType: EnumDefault = {
  __signed: true,
  types: types,
}

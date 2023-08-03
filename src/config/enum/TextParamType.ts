import { EnumDefault } from "."

enum types {
  TEXT_PARAM_NONE = 0,
  TEXT_PARAM_AVATAR_NAME = 1,
  TEXT_PARAM_ROUTINE_TYPE = 2,
}

export const TextParamType: EnumDefault = {
  __signed: true,
  types: types,
}

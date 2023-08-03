import { EnumDefault } from "."

enum types {
  SOURCE_INVALID = -1,
  SOURCE_HIT = 0,
  ELEMENT_REACTION = 1,
  LOW_EFFECT_IN_TOKEN_QUEUE = 2,
  SOURCE_COUNT = 3,
}

export const ActionTokenSourceType: EnumDefault = {
  __signed: true,
  types: types,
}

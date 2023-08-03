import { EnumDefault } from "."

enum types {
  BORED_ACTION_NONE = 0,
  BORED_ACTION_CREATE_MONSTER = 1,
  BORED_ACTION_AMBUSH = 2,
  BORED_ACTION_ENHANCE_GATHER = 3,
}

export const BoredActionType: EnumDefault = {
  __signed: true,
  types: types,
}

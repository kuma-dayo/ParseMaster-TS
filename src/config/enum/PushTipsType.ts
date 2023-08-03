import { EnumDefault } from "."

enum types {
  PUSH_TIPS_NONE = 0,
  PUSH_TIPS_TUTORIAL = 1,
  PUSH_TIPS_MONSTER = 2,
}

export const PushTipsType: EnumDefault = {
  __signed: true,
  types: types,
}
import { EnumDefault } from "."

enum types {
  TALK_MARK_NONE = 0,
  TALK_MARK_COMMON = 1,
  TALK_MARK_HIDE = 2,
}

export const TalkMarkType: EnumDefault = {
  __signed: true,
  types: types,
}

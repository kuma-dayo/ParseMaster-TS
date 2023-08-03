import { EnumDefault } from "."

enum types {
  TALK_BEGIN_NONE = 0,
  TALK_BEGIN_AUTO = 1,
  TALK_BEGIN_MANUAL = 2,
}

export const TalkBeginWay: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  TALK_SHOW_DEFAULT = 0,
  TALK_SHOW_FORCE_SELECT = 1,
}

export const TalkShowType: EnumDefault = {
  __signed: true,
  types: types,
}

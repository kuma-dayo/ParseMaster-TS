import { EnumDefault } from "."

enum types {
  NONE = 0,
  TASK = 1,
  QUEST = 2,
}

export const GuideNavigationType: EnumDefault = {
  __signed: true,
  types: types,
}

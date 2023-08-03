import { EnumDefault } from "."

enum types {
  DEFAULT = 0,
  QUEST = 1,
  GADGET = 2,
  TASK = 3,
}

export const TargetIndicatorType: EnumDefault = {
  __signed: true,
  types: types,
}

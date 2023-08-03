import { EnumDefault } from "."

enum types {
  QTE_ACTION_NONE = 0,
  QTE_ACTION_FINISH_QUEST = 1,
  QTE_ACTION_FAIL_QUEST = 2,
}

export const QTEActionType: EnumDefault = {
  __signed: true,
  types: types,
}

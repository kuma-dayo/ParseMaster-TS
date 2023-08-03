import { EnumDefault } from "."

enum types {
  QTE_TYPE_NONE = 0,
  QTE_TYPE_ANY_STEP_FAIL_TO_FAIL = 1,
  QTE_TYPE_NEVER_FAIL = 2,
}

export const QTEType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  QTE_STEP_COND_NONE = 0,
  QTE_STEP_COND_POWER_BAR_VALUE = 1,
  QTE_STEP_COND_BUTTON_COUNT_DOWN_VALUE = 2,
}

export const QTEStepCondType: EnumDefault = {
  __signed: true,
  types: types,
}

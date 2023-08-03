import { EnumDefault } from "."

enum types {
  QTE_STEP_BUTTON_STYLE_NORMAL = 0,
  QTE_STEP_BUTTON_STYLE_SINGLE = 1,
  QTE_STEP_BUTTON_STYLE_DIRECT = 2,
}

export const QTEStepButtonStyleType: EnumDefault = {
  __signed: true,
  types: types,
}

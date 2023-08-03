import { EnumDefault } from "."

enum types {
  QTE_STEP_BUTTON_SLIDE_DIRECT_UP = 0,
  QTE_STEP_BUTTON_SLIDE_DIRECT_DOWN = 1,
  QTE_STEP_BUTTON_SLIDE_DIRECT_LEFT = 2,
  QTE_STEP_BUTTON_SLIDE_DIRECT_RIGHT = 3,
}

export const QTEStepButtonSlideDirectType: EnumDefault = {
  __signed: true,
  types: types,
}

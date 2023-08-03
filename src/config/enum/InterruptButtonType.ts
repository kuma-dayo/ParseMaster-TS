import { EnumDefault } from "."

enum types {
  INTERRUPT_BUTTON_TYPE_NONE = 0,
  INTERRUPT_BUTTON_TYPE_HOST = 1,
  INTERRUPT_BUTTON_TYPE_ALL = 2,
}

export const InterruptButtonType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  INTERACT_COND_NONE = 0,
  INTERACT_COND_WIDGET_ON = 1,
  INTERACT_COND_HAS_ITEM = 2,
  INTERACT_COND_REGIONAL_PLAY_VAR_GREATER_THAN = 3,
  INTERACT_COND_OFFERING_LEVEL = 4,
}

export const InteractCondType: EnumDefault = {
  __signed: true,
  types: types,
}

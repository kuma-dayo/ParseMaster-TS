import { EnumDefault } from "."

enum types {
  INTERACT_ACTION_NONE = 0,
  INTERACT_ACTION_STATE = 1,
  INTERACT_ACTION_SET_GADGET_CHAIN_BUFF = 2,
  INTERACT_ACTION_UNLOCK_SPECIAL_TRANSPORT_POINT = 3,
  INTERACT_ACTION_CONSUME_REGIONAL_PLAY_VAR = 4,
}

export const InteractActionType: EnumDefault = {
  __signed: true,
  types: types,
}

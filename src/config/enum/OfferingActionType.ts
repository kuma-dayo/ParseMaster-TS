import { EnumDefault } from "."

enum types {
  OFFERING_ACTION_NONE = 0,
  OFFERING_ACTION_OPEN_ROUTINE = 1,
  OFFERING_ACTION_CLOSE_ROUTINE = 2,
  OFFERING_ACTION_NOTIFY_GROUP = 3,
  OFFERING_ACTION_SET_GADGET_CHAIN_LEVEL = 4,
  OFFERING_ACTION_SET_LUMEN_STONE_LEVEL = 5,
}

export const OfferingActionType: EnumDefault = {
  __signed: true,
  types: types,
}

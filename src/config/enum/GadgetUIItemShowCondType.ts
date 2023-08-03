import { EnumDefault } from "."

enum types {
  NONE = 0,
  HOST = 1,
  GUEST = 2,
  CUSTOM_COOP_FRAME_CHECK = 3,
}

export const GadgetUIItemShowCondType: EnumDefault = {
  __signed: true,
  types: types,
}

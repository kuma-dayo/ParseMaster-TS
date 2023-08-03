import { EnumDefault } from "."

enum types {
  ROGUE_GADGET_ROT_UP = 0,
  ROGUE_GADGET_ROT_DOWN = 1,
  ROGUE_GADGET_ROT_LEFT = 2,
  ROGUE_GADGET_ROT_RIGHT = 3,
}

export const RogueGadgetDirType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  QUEST = 0,
  FREE = 1,
  NARRATOR = 2,
  BLOSSOM = 3,
  ACTIVITY = 4,
  COOP = 5,
  GADGET = 6,
}

export const DialogGroupSchemeType: EnumDefault = {
  __signed: true,
  types: types,
}

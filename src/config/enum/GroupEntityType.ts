import { EnumDefault } from "."

enum types {
  None = 0,
  Monster = 1,
  NPC = 2,
  Gadget = 3,
  Trigger = 4,
}

export const GroupEntityType: EnumDefault = {
  __signed: true,
  types: types,
}

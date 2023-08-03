import { EnumDefault } from "."

enum types {
  GIVING_TYPE_NONE = 0,
  GIVING_TYPE_QUEST = 1,
  GIVING_TYPE_GADGET = 2,
}

export const GivingType: EnumDefault = {
  __signed: true,
  types: types,
}

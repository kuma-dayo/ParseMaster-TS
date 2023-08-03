import { EnumDefault } from "."

enum types {
  COOP_NODE_NONE = 0,
  COOP_NODE_TALK = 1,
  COOP_NODE_SELECT = 2,
  COOP_NODE_COND = 3,
  COOP_NODE_ACTION = 4,
  COOP_NODE_END = 5,
}

export const CoopNodeType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  THREAT = 0,
  MASTER = 1,
  SERVANT = 2,
  OWNER = 3,
  CHILDREN = 4,
  BUDDY = 5,
  NERVE_TARGET = 6,
  AWAKE_TARGET = 7,
}

export const AITargetSystemType: EnumDefault = {
  __signed: true,
  types: types,
}

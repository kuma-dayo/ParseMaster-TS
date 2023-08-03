import { EnumDefault } from "."

enum types {
  NONE = 0,
  REMOVE = 1,
  REMOVE_WITH_DISAPPEAR = 2,
}

export const RemoveActorType: EnumDefault = {
  __signed: true,
  types: types,
}

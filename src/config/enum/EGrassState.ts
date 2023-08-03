import { EnumDefault } from "."

enum types {
  NormalState = 0,
  ExcitedState = 1,
  DestroyState = 2,
}

export const EGrassState: EnumDefault = {
  __signed: true,
  types: types,
}

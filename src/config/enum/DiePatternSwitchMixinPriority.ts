import { EnumDefault } from "."

enum types {
  Entity = 0,
  LevelPlay = 1,
  Num = 2,
}

export const DiePatternSwitchMixinPriority: EnumDefault = {
  __signed: true,
  types: types,
}

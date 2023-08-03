import { EnumDefault } from "."

enum types {
  PreferTargetToInput = 0,
  OnlyInput = 1,
  OnlyTarget = 2,
  PreferTargetToCamera = 3,
  OnlyCamera = 4,
}

export const TurnMode: EnumDefault = {
  __signed: true,
  types: types,
}

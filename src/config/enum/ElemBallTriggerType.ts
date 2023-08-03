import { EnumDefault } from "."

enum types {
  None = 0,
  InRain = 1,
  AfterRain = 2,
  InSnow = 3,
  InStorm = 4,
}

export const ElemBallTriggerType: EnumDefault = {
  __signed: true,
  types: types,
}

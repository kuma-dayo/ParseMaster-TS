import { EnumDefault } from "."

enum types {
  None = 0,
  ToAvatar = 1,
  RemainingDistance = 2,
}

export const IndicatorDistanceInfoType: EnumDefault = {
  __signed: true,
  types: types,
}
import { EnumDefault } from "."

enum types {
  Low = 0,
  High = 1,
  VeryHigh = 2,
}

export const MotionBlurQuality: EnumDefault = {
  __signed: true,
  types: types,
}

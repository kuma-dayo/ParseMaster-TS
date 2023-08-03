import { EnumDefault } from "."

enum types {
  CenterToSide = 0,
  Clockwise = 1,
  Counterclockwise = 2,
}

export const CircleDetectDirection: EnumDefault = {
  __signed: true,
  types: types,
}

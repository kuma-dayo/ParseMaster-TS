import { EnumDefault } from "."

enum types {
  None = 0,
  BlackScreen = 1,
  SummerTime = 2,
}

export const CurtainType: EnumDefault = {
  __signed: true,
  types: types,
}

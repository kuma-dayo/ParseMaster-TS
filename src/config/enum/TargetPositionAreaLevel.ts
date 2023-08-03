import { EnumDefault } from "."

enum types {
  City = 0,
  FirstArea = 1,
  SecondArea = 2,
}

export const TargetPositionAreaLevel: EnumDefault = {
  __signed: true,
  types: types,
}

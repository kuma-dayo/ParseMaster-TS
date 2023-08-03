import { EnumDefault } from "."

enum types {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3,
  Front = 4,
  Back = 5,
}

export const UGCRayTriggerDirectionType: EnumDefault = {
  __signed: true,
  types: types,
}
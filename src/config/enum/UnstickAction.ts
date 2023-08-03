import { EnumDefault } from "."

enum types {
  Stay = 0,
  Keep = 1,
  Destroy = 2,
  StayAndReturn = 3,
}

export const UnstickAction: EnumDefault = {
  __signed: true,
  types: types,
}
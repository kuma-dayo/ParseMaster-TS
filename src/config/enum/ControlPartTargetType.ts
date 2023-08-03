import { EnumDefault } from "."

enum types {
  AIThreatTarget = 0,
  ActionSetTarget = 1,
}

export const ControlPartTargetType: EnumDefault = {
  __signed: true,
  types: types,
}

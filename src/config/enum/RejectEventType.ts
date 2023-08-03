import { EnumDefault } from "."

enum types {
  None = 0,
  HasAttackLanded = 1,
  RejectAll = 255,
}

export const RejectEventType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  Idle = 0,
  ResetGlobalValue = 1,
}

export const AddActionType: EnumDefault = {
  __signed: true,
  types: types,
}
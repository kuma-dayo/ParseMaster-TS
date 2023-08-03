import { EnumDefault } from "."

enum types {
  None = 0,
  Normal = 1,
  Disappear = 2,
}

export const KillSelfType: EnumDefault = {
  __signed: true,
  types: types,
}
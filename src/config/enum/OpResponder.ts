import { EnumDefault } from "."

enum types {
  Caster = 0,
  Receiver = 1,
  FreeAgent = 2,
  Effect = 3,
}

export const OpResponder: EnumDefault = {
  __signed: true,
  types: types,
}
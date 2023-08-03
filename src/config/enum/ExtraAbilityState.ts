import { EnumDefault } from "."

enum types {
  Start = 0,
  Success = 1,
  Interrupt = 2,
}

export const ExtraAbilityState: EnumDefault = {
  __signed: true,
  types: types,
}
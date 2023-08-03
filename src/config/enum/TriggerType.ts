import { EnumDefault } from "."

enum types {
  TriggerOnce = 0,
  TriggerNoRepeat = 1,
  TriggerAlways = 2,
}

export const TriggerType: EnumDefault = {
  __signed: true,
  types: types,
}
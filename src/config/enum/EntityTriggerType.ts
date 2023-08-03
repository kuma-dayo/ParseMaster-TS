import { EnumDefault } from "."

enum types {
  Common = 0,
  OneWay = 1,
}

export const EntityTriggerType: EnumDefault = {
  __signed: true,
  types: types,
}

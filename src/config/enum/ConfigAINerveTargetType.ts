import { EnumDefault } from "."

enum types {
  None = 0,
  Monitor = 1,
  Responser = 2,
  TriggerResponser = 3,
}

export const ConfigAINerveTargetType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  RegisterOnce = 0,
  RegisterAlways = 1,
}

export const TargetRegisterType: EnumDefault = {
  __signed: true,
  types: types,
}

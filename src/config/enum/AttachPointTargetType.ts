import { EnumDefault } from "."

enum types {
  Target = 0,
  Self = 1,
  Caster = 2,
  Applier = 3,
}

export const AttachPointTargetType: EnumDefault = {
  __signed: true,
  types: types,
}

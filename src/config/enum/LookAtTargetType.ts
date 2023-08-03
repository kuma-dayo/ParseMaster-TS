import { EnumDefault } from "."

enum types {
  NPC = 0,
  CAMERA = 1,
  NONE = 2,
}

export const LookAtTargetType: EnumDefault = {
  __signed: true,
  types: types,
}

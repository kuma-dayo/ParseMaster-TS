import { EnumDefault } from "."

enum types {
  Touch = 0,
  Mouse = 1,
  Joypad = 2,
}

export const ProjectionGameGuideInputMode: EnumDefault = {
  __signed: true,
  types: types,
}
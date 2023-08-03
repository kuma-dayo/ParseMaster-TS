import { EnumDefault } from "."

enum types {
  DRAG_NONE = 0,
  DRAG_ROTATE_CAMERA = 1,
  DRAG_ROTATE_CHARACTER = 2,
}

export const SkillDrag: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  ROBOT_TYPE_NONE = 0,
  ROBOT_TYPE_NORMAL = 1,
  ROBOT_TYPE_HIDDEN = 2,
}

export const ActivityGachaRobot: EnumDefault = {
  __signed: true,
  types: types,
}
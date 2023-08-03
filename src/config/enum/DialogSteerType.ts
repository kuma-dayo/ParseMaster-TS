import { EnumDefault } from "."

enum types {
  FREE = 0,
  ABSOLUTE = 1,
  TO_LOCAL_AVATAR = 2,
  RETURN = 3,
  TO_LOCAL_AVATAR_ADVANCED = 4,
  LOOK_AT_ONLY = 5,
  TO_TARGET = 6,
  TO_TARGET_ADVANCED = 7,
  FOLLOW_CAMERA = 8,
  Other = 9,
}

export const DialogSteerType: EnumDefault = {
  __signed: true,
  types: types,
}

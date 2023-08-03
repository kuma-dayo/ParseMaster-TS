import { EnumDefault } from "."

enum types {
  ABSOLUTE = 0,
  TO_INTEE = 1,
  TO_INTER = 2,
  TO_MID = 3,
  RELATIVE_TO_INTER = 4,
  RELATIVE_TO_TARGET_ENTITY = 5,
  RELATIVE_TO_INTEE_FORWARD = 6,
  RELATIVE_TO_INTER_FORWARD = 7,
  RELATIVE_TO_MULTI_TARGET_ENTITY = 8,
  RELATIVE_TO_INTEE = 9,
  Other = 10,
}

export const StoryCameraTargetType: EnumDefault = {
  __signed: true,
  types: types,
}
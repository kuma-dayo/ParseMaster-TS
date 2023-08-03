import { EnumDefault } from "."

enum types {
  ABSOLUTE = 0,
  RELATIVE_TO_INTEE = 1,
  RELATIVE_TO_INTER = 2,
  RELATIVE_POS_TO_INTEE = 3,
  RELATIVE_POS_TO_INTER = 4,
  EXIT = 5,
  RELATIVE_TO_INTEE_ONLY = 6,
  RELATIVE_TO_INTER_ONLY = 7,
  RELATIVE_TO_TARGET_ENTITY = 8,
  RELATIVE_TO_MULTI_TARGET_ENTITY = 9,
  Other = 10,
}

export const StoryCameraPosType: EnumDefault = {
  __signed: true,
  types: types,
}

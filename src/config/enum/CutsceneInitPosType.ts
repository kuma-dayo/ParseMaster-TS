import { EnumDefault } from "."

enum types {
  FREE = 0,
  RELATIVE_TO_LOCAL_AVATAR = 1,
  RELATIVE_TO_INTEE = 2,
  Other = 3,
  RELATIVE_TO_LOCAL_AVATAR_WITH_ROTATION = 4,
  RELATIVE_TO_ENTITY_WITH_ROTATION = 5,
}

export const CutsceneInitPosType: EnumDefault = {
  __signed: true,
  types: types,
}

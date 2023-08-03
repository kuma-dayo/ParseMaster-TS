import { EnumDefault } from "."

enum types {
  AVATAR = 0,
  MAIN_INTEE = 1,
  NPC = 2,
  AVATAR_NEW = 3,
}

export const ActorBornRelativePosType: EnumDefault = {
  __signed: true,
  types: types,
}

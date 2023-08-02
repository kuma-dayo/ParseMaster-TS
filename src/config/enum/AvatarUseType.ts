import { EnumDefault } from "."

enum types {
  AVATAR_TEST = 0,
  AVATAR_SYNC_TEST = 1,
  AVATAR_FORMAL = 2,
  AVATAR_ABANDON = 3,
}

export const AvatarUseType: EnumDefault = {
  __signed: true,
  types: types,
}

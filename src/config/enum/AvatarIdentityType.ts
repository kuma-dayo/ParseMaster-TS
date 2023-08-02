import { EnumDefault } from "."

enum types {
  AVATAR_IDENTITY_MASTER = 0,
  AVATAR_IDENTITY_NORMAL = 1,
}

export const AvatarIdentityType: EnumDefault = {
  __signed: true,
  types: types,
}

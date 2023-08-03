import { EnumDefault } from "."

enum types {
  Normal = 0,
  InTeam = 1,
}

export const GuideHasAvatarType: EnumDefault = {
  __signed: true,
  types: types,
}

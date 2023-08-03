import { EnumDefault } from "."

enum types {
  AST_AVATAR = 0,
  AST_TEAM = 1,
  AST_PLAY = 2,
  AST_VEHICLE = 3,
}

export const ActivitySkillTarget: EnumDefault = {
  __signed: true,
  types: types,
}

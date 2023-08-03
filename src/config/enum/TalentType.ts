import { EnumDefault } from "."

enum types {
  None = 0,
  CoreProudSkill = 1,
  InherentProudSkill = 2,
  AvatarSkill = 3,
}

export const TalentType: EnumDefault = {
  __signed: true,
  types: types,
}

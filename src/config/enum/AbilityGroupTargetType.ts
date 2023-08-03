import { EnumDefault } from "."

enum types {
  ABILITY_GROUP_TARGET_NONE = 0,
  ABILITY_GROUP_TARGET_AVATAR = 1,
  ABILITY_GROUP_TARGET_TEAM = 2,
}

export const AbilityGroupTargetType: EnumDefault = {
  __signed: true,
  types: types,
}

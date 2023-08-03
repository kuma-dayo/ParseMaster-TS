import { EnumDefault } from "."

enum types {
  THREAT_1 = 0,
  MASTER_0 = 1,
  SERVANT_0 = 2,
  OWNER_0 = 3,
  CHILDREN_0 = 4,
  BUDDY_0 = 5,
  NERVE_TARGET_0 = 6,
  AWAKE_TARGET_0 = 7,
  SELF_0 = 8,
  TARGET = 9,
  AI_SKILL_TARGET_COUNT = 10,
}

export const AISkillTargetType: EnumDefault = {
  __signed: true,
  types: types,
}

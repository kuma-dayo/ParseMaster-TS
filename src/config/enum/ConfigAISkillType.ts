import { EnumDefault } from "."

enum types {
  Free = 0,
  Combat = 1,
  OnAware = 2,
  OnAlert = 3,
  OnNerve = 4,
  ActionPoint = 5,
  CombatBuddy = 6,
}

export const ConfigAISkillType: EnumDefault = {
  __signed: true,
  types: types,
}

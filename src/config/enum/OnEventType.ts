import { EnumDefault } from "."

enum types {
  None = 0,
  HP = 1,
  ExpGain = 2,
  ChestOpen = 3,
  QuestFinish = 4,
  PickItem = 5,
  HPUp = 6,
  HPDown = 7,
  EnergyDonwBySkill = 8,
  SkillReady = 9,
  Energy = 10,
  UnlockAnchorPoint = 11,
  UnlockGoddess = 12,
  InteractFlowerAndTreeReward = 13,
}

export const OnEventType: EnumDefault = {
  __signed: true,
  types: types,
}

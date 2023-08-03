import { EnumDefault } from "."

enum types {
  None = 0,
  UnlockTips = 1,
  FinishTips = 2,
  RewardScroller = 3,
  ButtonGoto = 4,
  ButtonCheck = 5,
  Animator = 6,
  InfoTips = 7,
}

export const ActivityBannerUIElementType: EnumDefault = {
  __signed: true,
  types: types,
}
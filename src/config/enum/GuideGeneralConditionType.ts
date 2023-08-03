import { EnumDefault } from "."

enum types {
  None = 0,
  MusicGameV3Button = 1,
  MusicGameV3Slider = 2,
  RewardAddResin = 3,
  VintageMarketSlider = 4,
}

export const GuideGeneralConditionType: EnumDefault = {
  __signed: true,
  types: types,
}

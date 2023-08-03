import { EnumDefault } from "."

enum types {
  Normal = 0,
  Slot = 1,
  CharacterAvatarBtn = 2,
  CharacterFuncBtn = 3,
  CharacterAvatarBtnByLevel = 4,
  Button = 5,
  TabItem = 6,
  SynthesisListItem = 7,
  QuestSelectItem = 8,
  DynUIItem = 9,
  GridScroller = 10,
  SimpleList = 11,
  CenterVirtualDial = 12,
}

export const GuideWidgetSpecialType: EnumDefault = {
  __signed: true,
  types: types,
}

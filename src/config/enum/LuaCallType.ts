import { EnumDefault } from "."

enum types {
  Gadget = 0,
  OwnerGadegt = 1,
  FromGroup = 2,
  OwnerFromGroup = 3,
  SpecificGroup = 4,
  CurScenePlay = 5,
  CurChallengeGroup = 6,
  CurGalleryControlGroup = 7,
  CurRogueBossGroup = 8,
  AbilityGroupSourceGroup = 9,
}

export const LuaCallType: EnumDefault = {
  __signed: true,
  types: types,
}

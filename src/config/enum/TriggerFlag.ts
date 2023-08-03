import { EnumDefault } from "."

enum types {
  None = 0,
  NoReviveRegion = 1,
  DeadRegion = 2,
  ReturnRegion = 3,
  CameraSceneLook = 4,
  LevelAbility = 5,
  AudioEvent = 6,
  GlobalValue = 7,
  Teleport = 8,
  TeleportWithoutPaimonReminder = 9,
  TeleportV2 = 10,
}

export const TriggerFlag: EnumDefault = {
  __signed: true,
  types: types,
}

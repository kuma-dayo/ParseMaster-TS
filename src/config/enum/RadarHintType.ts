import { EnumDefault } from "."

enum types {
  Default = 0,
  Oculus = 1,
  Ore = 2,
  HarvetGadget = 3,
  SmallMeteorite = 4,
  ReginFeatherIntact = 5,
  AbyssalisleHarvest = 6,
  AbyssalislePlant = 7,
  ActivityTreasureHuntBall = 8,
  EchoShell = 9,
  ActivityVintagePresent = 10,
  General = 1000,
}

export const RadarHintType: EnumDefault = {
  __signed: true,
  types: types,
}

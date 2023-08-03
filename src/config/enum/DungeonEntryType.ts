import { EnumDefault } from "."

enum types {
  Normal = 0,
  Weekly = 1,
  Daily = 2,
  Tower = 3,
  Effigy = 4,
  FleurFair = 5,
  Arena = 6,
  ChannellerSlabLoop = 7,
  ChannellerSlabOneOff = 8,
  BlitzRush = 9,
  Sumo = 10,
  Roguelike = 11,
  ActivityHachi = 12,
  ActivityPotion = 13,
  ActivityMiniEldritch = 14,
  CustomLevel = 15,
  CrystalLink = 16,
  RogueDiary = 17,
  ActivitySummerTimeV2Story = 18,
  ActivitySummerTimeV2Battle = 19,
  ActivityMuqadasPotion = 20,
  ActivityInstableSpray = 21,
  ActivityWindField = 22,
  ActivityEffigyV2 = 23,
  ActivityFungusFighterTraining = 24,
  ActivityFungusFighterPlot = 25,
}

export const DungeonEntryType: EnumDefault = {
  __signed: true,
  types: types,
}

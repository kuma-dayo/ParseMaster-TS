import { ConfigDefault } from ".."

export const ConfigGuideDungeonIdCondition: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideCondition",
  Fields: {
    dungeonId: "vuint",
    dungeonIdList: "vuint[]",
    isDungeon: "bool",
  },
}

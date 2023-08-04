import { ConfigDefault } from ".."

export const ConfigCrowdGroupInfo: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    crowdGroupID: "vint",
    boundCenter: "Vector",
    boundSize: "Vector",
    spawnByDefault: "bool",
    crowdRestrictionGroups: "ConfigCrowdRestrictionGroup[]",
    crowdItemsRestrictionGroups: "CrowdItemsRestrictionGroup[]",
    cutsceneID: "vint",
    ignoreLowPerfMode: "bool",
    jointBlocks: "vuint[]",
    canBeOptimized: "bool",
  },
}

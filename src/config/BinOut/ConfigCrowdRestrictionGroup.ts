import { ConfigDefault } from ".."

export const ConfigCrowdRestrictionGroup: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    spawnCondition: "CrowdSpawnConditionType",
    questRes: "ConfigCrowdQuestRestriction[]",
    activityRes: "ConfigCrowdActivityRestriction[]",
    timeRes: "ConfigCrowdTimeRestriction[]",
    sceneTags: "ConfigCrowdSceneTagRestriction[]",
  },
}

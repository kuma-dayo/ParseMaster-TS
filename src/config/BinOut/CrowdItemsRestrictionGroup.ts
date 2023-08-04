import { ConfigDefault } from ".."

export const CrowdItemsRestrictionGroup: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    itemName: "string",
    itemShowCondition: "CrowdItemConditionType",
    questRes: "ConfigCrowdQuestRestriction[]",
    activityRes: "ConfigCrowdActivityRestriction[]",
    timeRes: "ConfigCrowdTimeRestriction[]",
    sceneTags: "ConfigCrowdSceneTagRestriction[]",
  },
}

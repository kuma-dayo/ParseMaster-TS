import { ConfigDefault } from ".."

export const PSActivitiesActivityConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "PSActivitiesBaseConfig",
  Fields: {
    activityNameTextMapHash: "vuint",
    activityDescTextMapHash: "vuint",
    category: "PSActivitiesCategoryType",
    availableByDefault: "bool",
    isRequiredForCompletion: "bool",
    hidden: "bool",
    isOnlineMultiplay: "bool",
    largeIcon: "string",
    smallIcon: "string",
  },
}

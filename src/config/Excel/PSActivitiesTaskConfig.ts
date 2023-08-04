import { ConfigDefault } from ".."

export const PSActivitiesTaskConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "PSActivitiesBaseConfig",
  Fields: {
    activityID: "vuint",
    taskNameTextMapHash: "vuint",
    isRequiredForCompletion: "bool",
    hidden: "bool",
  },
}

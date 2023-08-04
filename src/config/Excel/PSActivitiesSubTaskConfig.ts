import { ConfigDefault } from ".."

export const PSActivitiesSubTaskConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "PSActivitiesBaseConfig",
  Fields: {
    taskId: "vuint",
    hidden: "bool",
  },
}

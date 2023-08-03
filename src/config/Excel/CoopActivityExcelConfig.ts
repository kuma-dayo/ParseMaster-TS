import { ConfigDefault } from "../"

export const CoopActivityExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    activityId: "vuint",
    avatarId: "vuint",
    prefabPath: "string",
    activityNameTextMapHash: "vuint",
    activityDesTextMapHash: "vuint",
  },
}
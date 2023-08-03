import { ConfigDefault } from "../"

export const NewActivityScoreLimitExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityID: "vuint",
    limitValue: "vuint",
  },
}

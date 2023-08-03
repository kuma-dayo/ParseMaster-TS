import { ConfigDefault } from "../"

export const ReputationQuestExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ParentQuestId: "vuint",
    cityId: "vuint",
    rewardId: "vuint",
    iconName: "string",
    titleTextMapHash: "vuint",
    order: "vuint",
  },
}

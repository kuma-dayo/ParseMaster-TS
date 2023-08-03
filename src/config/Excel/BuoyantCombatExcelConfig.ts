import { ConfigDefault } from "../"

export const BuoyantCombatExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    rewardPreviewId: "vuint",
    pushTipsId: "vuint",
    levelIdList: "vuint[]",
  },
}

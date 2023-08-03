import { ConfigDefault } from "../"

export const SalesmanSpecialReward: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    rewardType: "SalesmanSpecialRewardType",
    obtainMethod: "SalesmanSpecialRewardObtainMethod",
    obtainParam: "string",
    id: "vuint",
    previewId: "vuint",
  },
}

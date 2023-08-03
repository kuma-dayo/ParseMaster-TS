import { ConfigDefault } from "../"

export const ReputationCityExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    cityId: "vuint",
    exploreAreaVec: "vuint[]",
    virtualItemId: "vuint",
    openState: "OpenStateType",
    bgIconPath: "string",
    bgEffectPath: "string",
    explainTitleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    rewardItemId: "vuint",
    rewardItemDescTextMapHash: "vuint",
    rewardItemIcon: "string",
    rewardBgIcon: "string",
    cityIcon: "string",
  },
}

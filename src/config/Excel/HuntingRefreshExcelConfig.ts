import { ConfigDefault } from ".."

export const HuntingRefreshExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    cityId: "vuint",
    difficulty: "HuntingOfferDifficultyType",
    regionId: "vuint",
    finishRewardId: "vuint",
  },
}

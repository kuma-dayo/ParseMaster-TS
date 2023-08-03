import { ConfigDefault } from "../"

export const CookBonusExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    avatarId: "vuint",
    recipeId: "vuint",
    bonusType: "CookBonusType",
    paramVec: "vuint[]",
    complexParamVec: "vuint[]",
  },
}
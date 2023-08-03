import { ConfigDefault } from "../"

export const CookRecipeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    nameTextMapHash: "vuint",
    rankLevel: "vuint",
    icon: "string",
    descTextMapHash: "vuint",
    effectDesc: "vuint[]",
    foodType: "CookFoodType",
    cookMethod: "CookMethodType",
    isDefaultUnlocked: "bool",
    maxProficiency: "vuint",
    qualityOutputVec: "IdCountConfig[]",
    inputVec: "IdCountConfig[]",
    qteParam: "string",
    qteQualityWeightVec: "vuint[]",
  },
}

import { ConfigDefault } from "../"

export const CombineExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    combineId: "vuint",
    playerLevel: "vuint",
    isDefaultShow: "bool",
    combineType: "vuint",
    subCombineType: "vuint",
    resultItemId: "vuint",
    resultItemCount: "vuint",
    scoinCost: "vuint",
    randomItems: "RandomItemConfig[]",
    materialItems: "IdCountConfig[]",
    effectDescTextMapHash: "vuint",
    recipeType: "RecipeType",
  },
}
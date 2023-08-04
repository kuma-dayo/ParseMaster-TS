import { ConfigDefault } from ".."

export const RegionSearchExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    searchNameTextMapHash: "vuint",
    searchDescTextMapHash: "vuint",
    searchCompleteTextMapHash: "vuint",
    tutorialId: "vuint",
    markIconTypeName: "string",
    searchType: "RegionSearchType",
    materialId: "vuint",
    isClearMaterial: "bool",
    searchGroupId: "vuint",
    reviseLevel: "vuint",
    abilityGroup: "string",
  },
}

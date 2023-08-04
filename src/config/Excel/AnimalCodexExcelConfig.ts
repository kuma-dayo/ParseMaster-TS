import { ConfigDefault } from ".."

export const AnimalCodexExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    type: "AnimalCodexType",
    describeId: "vuint",
    isSeenActive: "bool",
    SortOrder: "vuint",
    isDisuse: "bool",
    showOnlyUnlocked: "bool",
    subType: "AnimalCodexSubType",
    countType: "AnimalCodexCountType",
    descTextMapHash: "vuint",
    modelPath: "string",
    pushTipsCodexId: "vuint",
  },
}

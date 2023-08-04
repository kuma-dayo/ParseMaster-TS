import { ConfigDefault } from ".."

export const HomeWorldCustomFurnitureSlotExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "CustomSlotConfig",
  Fields: {
    slotNameTextMapHash: "vuint",
    noPartsTipsTextMapHash: "vuint",
    getPartsTipsTextMapHash: "vuint",
    rootGadgetIdList: "vuint[]",
    slotIdentifierPathList: "string[]",
    dependentSlotIdList: "vuint[]",
    pageTitle: "string",
    effectSlotSelect: "string",
    effectPartsSetup: "string",
  },
}

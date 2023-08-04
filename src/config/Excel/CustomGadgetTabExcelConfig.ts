import { ConfigDefault } from ".."

export const CustomGadgetTabExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    tabId: "vuint",
    tabNameTextMapHash: "vuint",
    slotIdentifierPathList: "string[]",
    dependentTabId: "vuint",
    effectSlotSelect: "string",
    effectPartsSetup: "string",
    noPartsTipsTextMapHash: "vuint",
    getPartsTipsTextMapHash: "vuint",
  },
}

import { ConfigDefault } from ".."

export const HomeWorldFarmFieldExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    fieldItemID: "vuint",
    fieldType: "HomeWorldFieldType",
    fieldGadgetID: "vuint",
    fieldSlotNum: "vuint",
    fieldSlotGadgetID: "vuint[]",
  },
}

import { ConfigDefault } from ".."

export const BlessingScanTypeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    typeId: "vuint",
    priority: "vuint",
    upPoolId: "vuint[]",
    dailyScanLimit: "vuint",
    typeNameTextMapHash: "vuint",
    typeNameWithColorTextMapHash: "vuint",
  },
}

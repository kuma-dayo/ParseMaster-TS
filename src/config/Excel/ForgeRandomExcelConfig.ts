import { ConfigDefault } from ".."

export const ForgeRandomExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    forgeRandomId: "vuint",
    mainRandomItems: "RandomItemConfig[]",
  },
}

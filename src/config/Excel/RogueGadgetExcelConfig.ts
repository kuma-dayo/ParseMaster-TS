import { ConfigDefault } from ".."

export const RogueGadgetExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    gadgetType: "RogueCreateGadgetType",
    gadgetId: "vuint",
    gadgetStateConfigList: "RogueGadgetStateConfig[]",
  },
}

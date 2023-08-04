import { ConfigDefault } from ".."

export const CustomGadgetSlotLevelTagConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    customGadgetType: "CustomGadgetRootType",
    slotMap: "CustomGadgetSlotGroup[]",
    levelTagID: "vuint",
    GadgetId: "vuint",
  },
}

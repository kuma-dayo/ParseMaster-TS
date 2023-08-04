import { ConfigDefault } from ".."

export const CustomGadgetSlotGroup: ConfigDefault = {
  attribute: ["excel", "nozig"],
  baseClass: null,
  Fields: {
    slotIdentifier: "string",
    slotList: "vuint[]",
  },
}

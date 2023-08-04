import { ConfigDefault } from ".."

export const ConfigGadgetCreationLimit: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    tag: "string",
    gadgetIDs: "vuint[]",
    maxValue: "vuint",
  },
}

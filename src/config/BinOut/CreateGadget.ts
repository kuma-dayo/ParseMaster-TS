import { ConfigDefault } from ".."

export const CreateGadget: ConfigDefault = {
  attribute: [],
  baseClass: "CreateEntity",
  Fields: {
    gadgetID: "vuint",
    campID: "vuint",
    campTargetType: "TargetType",
    byServer: "bool",
  },
}

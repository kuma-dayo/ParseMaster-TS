import { ConfigDefault } from "../"

export const CreateMovingPlatform: ConfigDefault = {
  attribute: [],
  baseClass: "CreateGadget",
  Fields: {
    routeID: "vuint",
    detectHeight: "float",
    detectWidth: "float",
    enableRotationOffset: "bool",
    failActions: "ConfigAbilityAction[]",
  },
}

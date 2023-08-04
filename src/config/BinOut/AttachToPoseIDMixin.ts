import { ConfigDefault } from ".."

export const AttachToPoseIDMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    poseIDs: "vint[]",
    modifierName: "string",
  },
}

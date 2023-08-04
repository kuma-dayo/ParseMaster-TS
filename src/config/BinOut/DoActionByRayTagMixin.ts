import { ConfigDefault } from ".."

export const DoActionByRayTagMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    UGCRayTriggerDirections: "UGCRayTriggerDirectionType[]",
    rayTags: "vuint[]",
    modifierToTags: "string[]",
    raycastInterval: "float",
  },
}

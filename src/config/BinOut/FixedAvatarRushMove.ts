import { ConfigDefault } from "../"

export const FixedAvatarRushMove: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    toPos: "ConfigBornType",
    timeRange: "DynamicFloat",
    maxRange: "float",
    animatorStateIDs: "string[]",
    overrideMoveCollider: "string",
    isInAir: "bool",
    checkAnimatorStateOnExitOnly: "bool",
    ignoreDetectForward: "bool",
    exactArrive: "bool",
  },
}

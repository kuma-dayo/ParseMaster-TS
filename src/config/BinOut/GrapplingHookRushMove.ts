import { ConfigDefault } from ".."

export const GrapplingHookRushMove: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    toPos: "ConfigBornType",
    speed: "DynamicFloat",
    accSpeed: "DynamicFloat",
    maxSpeed: "DynamicFloat",
    animatorStateIDs: "string[]",
    isInAir: "bool",
  },
}

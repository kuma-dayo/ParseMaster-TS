import { ConfigDefault } from ".."

export const MonsterLandMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    onMotionChange: "ConfigAbilityAction[]",
    dropToPos: "string",
    dropSpeedBezierType: "vint",
    hasDropPos: "bool",
    dropTime: "float",
    dropSpeed: "float",
  },
}

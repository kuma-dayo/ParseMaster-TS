import { ConfigDefault } from "../"

export const MonsterLaunchMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    onMotionChange: "ConfigAbilityAction[]",
    runUpToPos: "string",
    launchToPos: "string",
    launchSpeedBezierType: "vint",
    hasLaunchPos: "bool",
    launchTime: "float",
    launchSpeed: "float",
  },
}

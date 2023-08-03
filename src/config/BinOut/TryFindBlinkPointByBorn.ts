import { ConfigDefault } from "../"

export const TryFindBlinkPointByBorn: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    born: "ConfigBornType",
    hitSceneTest: "bool",
    hitSceneType: "BlinkHitSceneTestType",
    limitY: "DynamicFloat",
    ignoreWater: "bool",
  },
}

import { ConfigDefault } from ".."

export const TryFindMotionChangePosByBorn: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    born: "ConfigBornType",
    key: "string",
    setTarget: "bool",
    hitSceneTest: "bool",
    limitY: "DynamicFloat",
    ignoreWater: "bool",
  },
}

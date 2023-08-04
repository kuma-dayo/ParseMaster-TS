import { ConfigDefault } from ".."

export const ConfigMoveStickToGround: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    maxStepHeight: "float",
    maxSlopeAngle: "float",
    heightToGround: "float",
    flexibleRange: "float",
    isStickToWater: "bool",
    ignoreBarrier: "bool",
    unstickWhenDownSlide: "UnstickAction",
    unstickWhenUpSlide: "UnstickAction",
  },
}

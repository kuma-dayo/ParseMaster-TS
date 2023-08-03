import { ConfigDefault } from "../"

export const ConfigBornType: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    offset: "DynamicFloatVector",
    bornRandom: "BornRandom",
    onGround: "bool",
    onGroundIgnoreWater: "bool",
    onGroundRaycastUpDist: "float",
    direction: "ConfigBornDirectionType",
    alongGround: "bool",
    useRotation: "bool",
  },
}

import { ConfigDefault } from "../"

export const ConfigHeadControl: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    useHeadControl: "bool",
    maxYawDegree: "float",
    maxPitchDegree: "float",
    speed: "float",
    weightSpeed: "float",
    useWhiteAnimStates: "bool",
    animStates: "string[]",
    dontAnimStates: "string[]",
  },
}

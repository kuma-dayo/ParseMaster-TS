import { ConfigDefault } from "../"

export const ConfigAIPickActionPointCriteria: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    pointType: "ActionPointType",
    detectDistance: "float",
    speedLevel: "vint",
    pose: "vint[]",
    nerveTrigger: "NeuronName[]",
    skillID: "vint",
  },
}

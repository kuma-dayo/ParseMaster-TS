import { ConfigDefault } from "../"

export const ConfigAIThreatScoreBaseSetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    enable: "bool",
    weight: "vint",
    value: "float",
    min: "float",
    max: "float",
    compareOperation: "OrderingType",
  },
}
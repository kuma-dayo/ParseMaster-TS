import { ConfigDefault } from "../"

export const ConfigGuideMultiPlayerCondition: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideCondition",
  Fields: {
    isIn: "bool",
    playerNum: "vint",
    opt: "GuideOperator",
    mode: "GuideMultiPlayerMode",
  },
}

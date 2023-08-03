import { ConfigDefault } from "../"

export const ConfigQTEStepNode: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    startTrigger: "ConfigQTEStepCondActionGroup[]",
    components: "ConfigQTEStepBaseComponent[]",
    successTrigger: "ConfigQTEStepCondActionGroup[]",
    failTrigger: "ConfigQTEStepCondActionGroup[]",
  },
}

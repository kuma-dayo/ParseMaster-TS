import { ConfigDefault } from "../"

export const ConfigQTEStepPowerBarComponent: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigQTEStepBaseComponent",
  Fields: {
    initValue: "vuint",
    maxValue: "vuint",
    autoChangeValuePerSecond: "float",
    noInputAutoChangeInterval: "float",
    valueChangeTrigger: "ConfigQTEStepCondActionGroup[]",
  },
}

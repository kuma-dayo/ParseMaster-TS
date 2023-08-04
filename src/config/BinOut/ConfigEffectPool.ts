import { ConfigDefault } from ".."

export const ConfigEffectPool: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    particleSystemBudgetSize: "vuint",
    particleSystemBudgetSizeLowMemory: "vuint",
    particleSystemBudgetSizeMidMemory: "vuint",
    effectpoolBudgetSize: "vuint",
    releaseForBudgetTimeThreshold: "float",
    releaseForBudgetTimeThresholdLowMemory: "float",
    releaseForBudgetTimeThresholdMidMemory: "float",
    releaseBudgetTimeThresholdPerFrame: "float",
    poolItems: "map<string,ConfigEffectPoolItem>",
  },
}

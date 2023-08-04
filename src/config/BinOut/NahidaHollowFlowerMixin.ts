import { ConfigDefault } from ".."

export const NahidaHollowFlowerMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    effectPattern: "string",
    effectTrigger: "string",
    interval: "float",
    maxCount: "vint",
    createMaxNumPerInterval: "vint",
    createOffset: "Vector",
    minRange: "float",
    maxRange: "float",
    destroyRange: "float",
  },
}

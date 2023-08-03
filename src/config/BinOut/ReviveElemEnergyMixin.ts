import { ConfigDefault } from "../"

export const ReviveElemEnergyMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    type: "AvatarStageType",
    period: "DynamicFloat",
    baseEnergy: "DynamicFloat",
    ratio: "DynamicFloat",
  },
}

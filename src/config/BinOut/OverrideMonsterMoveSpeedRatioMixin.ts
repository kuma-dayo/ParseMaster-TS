import { ConfigDefault } from ".."

export const OverrideMonsterMoveSpeedRatioMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    minValue: "float",
    maxValue: "float",
  },
}

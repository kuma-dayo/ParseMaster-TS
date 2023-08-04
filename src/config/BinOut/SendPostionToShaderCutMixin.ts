import { ConfigDefault } from ".."

export const SendPostionToShaderCutMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    sendTarget: "AbilityTargetting",
    sendRadius: "float",
    scale: "Vector",
    offset: "Vector",
  },
}

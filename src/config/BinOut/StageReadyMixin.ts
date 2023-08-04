import { ConfigDefault } from ".."

export const StageReadyMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    onStageReady: "ConfigAbilityAction[]",
  },
}

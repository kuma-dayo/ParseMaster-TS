import { ConfigDefault } from ".."

export const TriggerWidgetMusicGameMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    musicId: "vuint",
    range: "float",
    onSuccess: "ConfigAbilityAction[]",
  },
}

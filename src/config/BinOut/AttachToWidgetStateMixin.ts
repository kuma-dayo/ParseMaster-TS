import { ConfigDefault } from "../"

export const AttachToWidgetStateMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    targetWidgetMaterialId: "vuint",
    onActive: "ConfigAbilityAction[]",
    onDisable: "ConfigAbilityAction[]",
    onRemoved: "ConfigAbilityAction[]",
  },
}

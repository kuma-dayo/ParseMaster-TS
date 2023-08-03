import { ConfigDefault } from "../"

export const WidgetCDSyncMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    syncOnTick: "bool",
    syncOnChangeAvatar: "bool",
    syncOnCDChange: "bool",
    syncOnlyGreater: "bool",
    itemId: "vuint",
    skillId: "vuint",
    skillCDOffset: "float",
  },
}

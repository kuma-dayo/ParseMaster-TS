import { ConfigDefault } from ".."

export const DoWatcherSystemAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    watcherId: "vuint",
    authorityOnly: "bool",
    inThreatListOnly: "bool",
  },
}

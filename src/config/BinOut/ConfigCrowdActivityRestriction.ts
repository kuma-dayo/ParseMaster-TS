import { ConfigDefault } from ".."

export const ConfigCrowdActivityRestriction: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    activityType: "vuint",
    isActive: "bool",
    activityPhase: "vuint[]",
    condID: "vuint",
  },
}

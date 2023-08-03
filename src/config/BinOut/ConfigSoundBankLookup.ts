import { ConfigDefault } from "../"

export const ConfigSoundBankLookup: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    defaultCooldown: "float",
    unloadPolicies: "map<string,ConfigSoundBankUnloadPolicy>",
    plainEvents: "vuint[]",
    bankIds: "vuint[]",
    conditionals: "vuint[]",
    bankReuseRate: "double",
    switchGroupsAffectedByRtpcs: "string[]",
    switchGroupsAffectedByEvents: "string[]",
    stateGroupsAffectedByEvents: "string[]",
  },
}

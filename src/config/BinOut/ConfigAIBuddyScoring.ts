import { ConfigDefault } from ".."

export const ConfigAIBuddyScoring: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    hpFactor: "vint",
    hpWeight: "float",
    distFactor: "float",
    distWeight: "vint",
    roleScores: "float[]",
  },
}

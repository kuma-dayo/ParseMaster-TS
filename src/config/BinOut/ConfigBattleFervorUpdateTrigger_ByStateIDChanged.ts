import { ConfigDefault } from ".."

export const ConfigBattleFervorUpdateTrigger_ByStateIDChanged: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBattleFervorUpdateTrigger",
  Fields: {
    type: "BattleFervorStateIDTriggerType",
    stateIDs: "string[]",
    cd: "float",
  },
}

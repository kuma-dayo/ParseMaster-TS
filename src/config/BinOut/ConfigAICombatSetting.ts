import { ConfigDefault } from "../"

export const ConfigAICombatSetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    combatPhases: "map<ConfigAICombatPhase,vint[]>",
    combatRole: "ConfigAICombatRole",
    broadcastFearOnDeath: "bool",
  },
}

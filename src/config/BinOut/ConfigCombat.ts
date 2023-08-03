import { ConfigDefault } from "../"

export const ConfigCombat: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    property: "ConfigCombatProperty",
    beHit: "ConfigCombatBeHit",
    combatLock: "ConfigCombatLock",
    die: "ConfigDie",
    animEvents: "map<string,ConfigAttackEvent>",
    summon: "ConfigSummon",
    simulatePhysics: "ConfigSimulatePhysics",
  },
}
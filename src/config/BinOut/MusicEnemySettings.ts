import { ConfigDefault } from "../"

export const MusicEnemySettings: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    entityId: "vuint",
    mainStateValue: "ConfigWwiseString",
    auxStateGroup: "ConfigWwiseString",
    defaultAuxStateValue: "ConfigWwiseString",
    combatPhaseStates: "MusicEnemyCombatPhaseState[]",
  },
}

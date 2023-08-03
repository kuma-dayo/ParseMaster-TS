import { ConfigDefault } from "../"

export const ConfigAudioMusic: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    stateGroupName: "ConfigWwiseString",
    casualStateValue: "ConfigWwiseString",
    combatPrepStateValue: "ConfigWwiseString",
    combatStateValue: "ConfigWwiseString",
    peaceStateValue: "ConfigWwiseString",
    cityApproachTrigger: "ConfigWwiseString",
    combatTrigger: "ConfigWwiseString",
    combatMusicRtpc: "ConfigWwiseString",
    outerEnemyConcernRange: "float",
    innerEnemyConcernRange: "float",
    attackFromBehindEnterDistance: "float",
    attackFromBehindExitDistance: "float",
    intentionInFrontProductThreshold: "float",
    IntentionFromBehindProductThreshold: "float",
    combatRtpcLowerBound: "float",
    combatRtpcUpperBound: "float",
    waitFramesTillStageMature: "vint",
    enemyMainStateGroup: "ConfigWwiseString",
    defaultEnemyMainStateValue: "ConfigWwiseString",
    enemySettings: "MusicEnemySettings[]",
    skiffStateOp: "AudioStateOp",
  },
}

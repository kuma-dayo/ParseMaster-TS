import { ConfigDefault } from "../"

export const ConfigEffectData: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    elementView: "ConfigElementView",
    beHit: "ConfigBeHitEffect",
    recoverEnergy: "ConfigRecoverEnergyEffect[]",
    effectPool: "ConfigEffectPool",
    scenePropShakeAnim: "map<string,string>",
    effectLOD: "ConfigEffectLOD",
    skipUnindexedEffectCreation: "map<string,ConfigSkipUnindexedEffectCreation>",
    tokenForceEnqueueMap: "map<string,TokenForceEnqueueReason>",
    tokenForceHandleThisFrameArray: "string[]",
    tokenIgnoreTickLod: "string[]",
    logicEffect: "string[]",
  },
}

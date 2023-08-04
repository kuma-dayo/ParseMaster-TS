import { ConfigDefault } from ".."

export const ConfigAIThreatSetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    enable: "bool",
    clearThreatTargetDistance: "float",
    clearThreatEdgeDistance: "float",
    clearThreatByLostPath: "bool",
    clearThreatByTargetOutOfZone: "bool",
    clearThreatTimerByDistance: "float",
    clearThreatTimerByLostPath: "float",
    clearThreatTimerByTargetOutOfZone: "float",
    viewThreatGrow: "float",
    hearThreatGrow: "float",
    feelThreatGrow: "float",
    threatDecreaseSpeed: "float",
    threatBroadcastRange: "float",
    viewAttenuation: "AIPoint[]",
    hearAttenuation: "AIPoint[]",
    timeDecreaseTemper: "float",
    resistTauntLevel: "TauntLevel",
    auxScoreChangeTargetCD: "float",
    abilityGlobalValueScoreSystem: "ConfigAITSAbilityGlobalValueSetting",
    targetDistanceScoreSystem: "ConfigAITSTargetDistanceSetting",
    targetBearingScoreSystem: "ConfigAITSTargetBearingSetting",
  },
}

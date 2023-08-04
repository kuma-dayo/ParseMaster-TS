import { ConfigDefault } from ".."

export const ConfigAudioAmbience: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    effectiveSceneIds: "vuint[]",
    relativePositions: "Vector[]",
    positionedEvents: "AudioAmbiencePositionedEvent[]",
    treeInfo: "ConfigAudioTreeInfo",
    dynamicRayInfo: "ConfigAudioDynamicRayInfo",
    area2DInfo: "ConfigAudioArea2DInfo",
    heightRTPCKey: "ConfigWwiseString",
    deathZoneRtpckey: "ConfigWwiseString",
    usingAdaptiveOpennessDetection: "bool",
    adaptiveDynamicRayInfo: "ConfigAudioAdaptiveDynamicRayInfo",
  },
}

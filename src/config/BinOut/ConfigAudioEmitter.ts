import { ConfigDefault } from "../"

export const ConfigAudioEmitter: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    emitterLifetime: "float",
    emitInterval: "float",
    instLifetime: "float",
    endingDuration: "float",
    emitEventName: "ConfigWwiseString",
    endEventName: "ConfigWwiseString",
    multiPositionType: "AudioEmitterMultiPositionType",
  },
}
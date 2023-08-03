import { ConfigDefault } from "../"

export const AudioPlatformMoveSettings: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    id: "vuint",
    moveType: "AudioPlatformMoveType",
    moveStartEvent: "ConfigWwiseString",
    moveStopEvent: "ConfigWwiseString",
    rotateStartEvent: "ConfigWwiseString",
    rotateStopEvent: "ConfigWwiseString",
    linearVelocityThreshold: "float",
    angularVelocityThreshold: "float",
  },
}

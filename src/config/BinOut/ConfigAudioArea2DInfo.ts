import { ConfigDefault } from "../"

export const ConfigAudioArea2DInfo: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    leaveReverbDelay: "float",
    enterReverbStates: "AudioStateOp[]",
    leaveReverbStates: "AudioStateOp[]",
    volumes: "AudioArea2DVolumeArea[]",
  },
}

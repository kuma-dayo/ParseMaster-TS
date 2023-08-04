import { ConfigDefault } from ".."

export const ConfigAudioMIDI: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    instruments: "map<vint,map<vint,ConfigWwiseString>>",
    freeplay_buttons: "map<vint,vint>",
    freeplay_timeout: "float",
    freeplay_max_distance: "float",
  },
}

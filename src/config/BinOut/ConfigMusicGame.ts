import { ConfigDefault } from ".."

export const ConfigMusicGame: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    button_sequence: "ConfigMusicGameKey[]",
    instrument: "vint",
    playMusicEvent: "ConfigWwiseString",
    stopMusicEvent: "ConfigWwiseString",
    pauseMusicEvent: "ConfigWwiseString",
    resumeMusicEvent: "ConfigWwiseString",
    autoPlay: "bool",
  },
}

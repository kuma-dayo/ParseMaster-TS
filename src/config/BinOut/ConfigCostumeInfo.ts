import { ConfigDefault } from "../"

export const ConfigCostumeInfo: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    effects: "map<string,string>",
    gadgets: "map<string,string>",
    audio: "ConfigCostumeAudio",
    weatherPatterns: "map<string,string>",
    eventPatterns: "map<string,string>",
  },
}

import { ConfigDefault } from "../"

export const ConfigAudioLevel: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    teleportEvents: "ConfigWwiseString[]",
    stateGroup: "ConfigWwiseString",
    dungeonEventMap: "map<string,ConfigWwiseString>",
    enterDungeonEventMap: "map<vint,ConfigWwiseString>",
  },
}

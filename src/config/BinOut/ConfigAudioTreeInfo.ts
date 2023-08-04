import { ConfigDefault } from ".."

export const ConfigAudioTreeInfo: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    detectRadius: "float",
    dataAssetFolder: "string",
    treeSoundEventName: "ConfigWwiseString",
    treeNumRtpcName: "ConfigWwiseString",
    multiPositionType: "MultiPositionType",
    dataAssetNamePatterns: "AudioTreeDataAssetNamePattern[]",
  },
}

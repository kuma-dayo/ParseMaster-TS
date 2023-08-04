import { ConfigDefault } from ".."

export const ConfigAudioResource: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    soundBankPackageName: "string",
    externalSourcePackageName: "string",
    streamedMusicPackageName: "string",
    streamedFilePackageName: "string",
    nSoundBankSplitBits: "byte",
    nExternalSourceSplitBits: "byte",
    nStreamedMusicSplitBits: "byte",
    nStreamedFileSplitBits: "byte",
    packageFileExtension: "string",
    incrementals: "map<string,ConfigAudioIncrementalResources>",
  },
}

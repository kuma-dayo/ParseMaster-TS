import { ConfigDefault } from "../"

export const ConfigEmoSyncInterAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    dataPath: "string",
    phonemePath: "string",
    emotionPath: "string",
    mateDataPath: "string",
    matePhonemePath: "string",
    mateEmotionPath: "string",
    backType: "EmoBackType",
    enableBlink: "bool",
    dataPathHashList: "vuint[]",
    phonemePathHashList: "vuint[]",
    emotionPathHashList: "vuint[]",
    mateDataPathHashList: "vuint[]",
    matePhonemePathHashList: "vuint[]",
    mateEmotionPathHashList: "vuint[]",
  },
}

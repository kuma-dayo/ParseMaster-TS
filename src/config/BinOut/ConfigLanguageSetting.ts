import { ConfigDefault } from "../"

export const ConfigLanguageSetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    textShowTypes: "map<string,TextLanguageType[]>",
    textDisableTypes: "map<string,TextLanguageType[]>",
    voiceShowTypes: "map<string,VoiceLanguageType[]>",
    voiceDisableTypes: "map<string,VoiceLanguageType[]>",
  },
}

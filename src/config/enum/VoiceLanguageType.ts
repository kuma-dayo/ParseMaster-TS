import { EnumDefault } from "."

enum types {
  Chinese = 0,
  English = 1,
  Japanese = 2,
  Korean = 3,
}

export const VoiceLanguageType: EnumDefault = {
  __signed: true,
  types: types,
}

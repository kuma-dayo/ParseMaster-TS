import { EnumDefault } from "."

enum types {
  LANGUAGE_NONE = 0,
  LANGUAGE_EN = 1,
  LANGUAGE_SC = 2,
  LANGUAGE_TC = 3,
  LANGUAGE_FR = 4,
  LANGUAGE_DE = 5,
  LANGUAGE_ES = 6,
  LANGUAGE_PT = 7,
  LANGUAGE_RU = 8,
  LANGUAGE_JP = 9,
  LANGUAGE_KR = 10,
  LANGUAGE_TH = 11,
  LANGUAGE_VN = 12,
  LANGUAGE_ID = 13,
  LANGUAGE_TR = 14,
  LANGUAGE_IT = 15,
}

export const TextLanguageType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  ASSOC_TYPE_NONE = 0,
  ASSOC_TYPE_MONDSTADT = 1,
  ASSOC_TYPE_LIYUE = 2,
  ASSOC_TYPE_MAINACTOR = 3,
  ASSOC_TYPE_FATUI = 4,
  ASSOC_TYPE_INAZUMA = 5,
  ASSOC_TYPE_RANGER = 6,
  ASSOC_TYPE_SUMERU = 7,
  ASSOC_TYPE_FONTAINE = 8,
  ASSOC_TYPE_NATLAN = 9,
  ASSOC_TYPE_SNEZHNAYA = 10,
}

export const AssocType: EnumDefault = {
  __signed: true,
  types: types,
}

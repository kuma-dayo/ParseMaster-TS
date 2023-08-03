import { EnumDefault } from "."

enum types {
  TwoDimensional = 0,
  ThreeDimensional = 1,
  TutorialSpecial = 2,
  ThreeDimensionalPassby = 3,
  InnerMonologue = 4,
}

export const VoicePositioning: EnumDefault = {
  __signed: true,
  types: types,
}
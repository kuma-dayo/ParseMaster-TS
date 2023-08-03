import { EnumDefault } from "."

enum types {
  First = 0,
  Third = 1,
  Npc = 2,
}

export const VoicePersonality: EnumDefault = {
  __signed: true,
  types: types,
}
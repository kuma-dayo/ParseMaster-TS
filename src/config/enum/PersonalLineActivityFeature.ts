import { EnumDefault } from "."

enum types {
  LegendQuest = 0,
  NoLegendQuest = 1,
}

export const PersonalLineActivityFeature: EnumDefault = {
  __signed: true,
  types: types,
}

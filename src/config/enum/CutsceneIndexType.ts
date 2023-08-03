import { EnumDefault } from "."

enum types {
  CUTSCENE = 0,
  VIDEO = 1,
  Other = 2,
}

export const CutsceneIndexType: EnumDefault = {
  __signed: true,
  types: types,
}
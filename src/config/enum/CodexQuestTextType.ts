import { EnumDefault } from "."

enum types {
  ChapterTitle = 1,
  ChapterNum = 2,
  MainQuestTitle = 3,
  MainQuestDesp = 4,
  SubQuestTitle = 5,
  IPCustomizedWhole = 6,
  IPCustomizedPartial = 7,
  DialogNormal = 8,
  DialogBranch = 9,
  SpeakerKnown = 10,
  SpeakerUnknown = 11,
  SpeakerPlayer = 12,
  Aside = 13,
  Narratage = 14,
}

export const CodexQuestTextType: EnumDefault = {
  __signed: true,
  types: types,
}
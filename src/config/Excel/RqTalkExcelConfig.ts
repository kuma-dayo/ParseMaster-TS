import { ConfigDefault } from "../"

export const RqTalkExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    beginWay: "TalkBeginWay",
    activeMode: "PlayMode",
    beginCondComb: "LogicType",
    beginCond: "TalkCond[]",
    priority: "vuint",
    nextTalks: "vuint[]",
    nextRandomTalks: "vuint[]",
    showRandomTalkCount: "vint",
    initDialog: "vuint",
    npcId: "vuint[]",
    performCfg: "string",
    heroTalk: "TalkHeroType",
    questId: "vuint",
    dontBlockDaily: "bool",
  },
}
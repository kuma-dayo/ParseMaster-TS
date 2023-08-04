import { ConfigDefault } from ".."

export const TalkExcelConfig: ConfigDefault = {
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
    initDialog: "vuint",
    decoratorID: "vuint",
    nextRandomTalks: "vuint[]",
    showRandomTalkCount: "vint",
    npcId: "vuint[]",
    participantId: "vuint[]",
    performCfg: "string",
    heroTalk: "TalkHeroType",
    loadType: "TalkLoadType",
    questId: "vuint",
    extraLoadMarkId: "vuint[]",
    dontBlockDaily: "bool",
    prePerformCfg: "string",
    stayFreeStyle: "bool",
    enableCameraDisplacement: "bool",
    lockGameTime: "bool",
    talkMarkType: "TalkMarkType",
    talkMarkHideList: "vuint[]",
    crowdLOD0List: "vint[]",
    checkActionAfter: "bool",
    questIdleTalk: "bool",
    forceNpcNotDestroy: "bool",
    lowPriority: "bool",
    finishExec: "TalkExec[]",
  },
}

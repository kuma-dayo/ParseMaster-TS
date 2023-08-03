import { ConfigDefault } from "../"

export const ConfigQuestScheme: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    subId: "vuint",
    mainId: "vuint",
    order: "vint",
    subIdSet: "vuint",
    isMpBlock: "bool",
    descTextMapHash: "vuint",
    stepDescTextMapHash: "vuint",
    guideTipsTextMapHash: "vuint",
    showType: "QuestShowType",
    JFBOMIFLMMH: "BanGroupType",
    finishCond: "QuestContentEx[]",
    failCond: "QuestContentEx[]",
    guide: "QuestGuideEx",
    showGuide: "ShowQuestGuideType",
    guideHint: "QuestGuideHint",
    finishParent: "bool",
    failParent: "bool",
    failParentShow: "QuestShowType",
    isRewind: "bool",
    finishExec: "QuestExecEx[]",
    failExec: "QuestExecEx[]",
    DPBPJBFMAFM: "string",
    HNGPKNPMGAG: "string",
  },
}

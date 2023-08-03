import { ConfigDefault } from "../"

export const DraftExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    transferConfig: "DraftTransferConfig[]",
    sceneId: "vuint",
    exec: "DraftExecType",
    execSubType: "DraftExecSubType",
    param: "vuint",
    enableMp: "bool",
    isNeedAllAgree: "bool",
    confirmCountDown: "vuint",
    minPlayerCount: "vuint",
    isNeedTwiceConfirm: "bool",
    twiceConfirmCountDown: "vuint",
    isExecWhenCountDownOver: "bool",
  },
}
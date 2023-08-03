import { ConfigDefault } from "../"

export const PhotographTask: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    task_id: "vuint",
    taskType: "PhotographTaskType",
    sceneID: "vuint",
    centerX: "float",
    centerY: "float",
    centerZ: "float",
    radius: "float",
    targetGadgetID: "string[]",
    startTime: "float",
    endTime: "float",
    questid: "vuint",
    finishTipsTextMapHash: "vuint",
    startTipsTextMapHash: "vuint",
  },
}

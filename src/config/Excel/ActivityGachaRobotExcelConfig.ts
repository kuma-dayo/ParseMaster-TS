import { ConfigDefault } from ".."

export const ActivityGachaRobotExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    robotId: "vuint",
    shapeList: "vuint[]",
    colorList: "vuint[]",
    actionList: "vuint[]",
    type: "ActivityGachaRobot",
    furnitureId: "vuint",
    materialId: "vuint",
    modelPath: "string",
    animatorID: "vuint",
    playInterval: "vuint",
    descTextMapHash: "vuint",
    audio: "string",
  },
}

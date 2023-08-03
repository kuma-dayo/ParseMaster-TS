import { ConfigDefault } from "../"

export const ActivityGearExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    gearLevelIdList: "vuint[]",
    gearToothLength: "float",
    gearThickness: "float",
    shaftSelectEffect: "string",
    shaftTipEffect: "string",
    endGearSuccessEffect: "string",
    coverUpEffect: "string",
    gearPlaceEffect: "string",
    pushTipsId: "vuint",
    watcherIdList: "vuint[]",
    playerTipDelay: "float",
  },
}

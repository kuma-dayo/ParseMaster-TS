import { ConfigDefault } from "../"

export const ConfigQTEStepButtonComponent: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigQTEStepBaseComponent",
  Fields: {
    positionId: "vuint",
    inputEvent: "QTEStepButtonInputType",
    clickTrigger: "ConfigQTEStepCondActionGroup[]",
    style: "QTEStepButtonStyleType",
    countDownTime: "float",
    countDownChangeTrigger: "ConfigQTEStepCondActionGroup[]",
    slideDirTrigger: "ConfigQTEStepCondActionGroup[]",
    slideDir: "QTEStepButtonSlideDirectType",
    slideAngle: "float",
    slideTouchDis: "float",
    slideJoypadDis: "float",
  },
}
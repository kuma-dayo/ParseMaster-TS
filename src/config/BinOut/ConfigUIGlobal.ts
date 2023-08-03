import { ConfigDefault } from "../"

export const ConfigUIGlobal: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    inputActions: "map<InputActionType,ConfigBaseInputAction>",
    inputEvents: "map<InputEventType,ConfigBaseInputEvent>",
    actionGroups: "map<string,InputActionEvent[]>",
    inputModes: "map<string,ConfigBaseContext>",
    joypadChangeViewScale: "Point2D",
    joypadLongPressDuration: "float",
    joypadSenseScales: "float[]",
    joypadFocusSenseScales: "float[]",
    mouseSenseScales: "float[]",
    mouseFocusSenseScales: "float[]",
    touchpadSenseScales: "float[]",
    touchpadFocusSenseScales: "float[]",
    touchpadFocusAccelerationScales: "float[]",
    touchpadFocusAccelerationPara: "TouchpadFocusAccelerationSigmoidPara",
    configUIPhotograph: "ConfigUIPhotograph",
    configInputCheck: "ConfigInputCheck",
  },
}

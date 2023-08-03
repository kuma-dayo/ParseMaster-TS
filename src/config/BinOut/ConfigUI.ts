import { ConfigDefault } from "../"

export const ConfigUI: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    inputEvents: "map<InputEventType,ConfigBaseInputEvent>",
    actionGroups: "map<string,InputActionEvent[]>",
    context: "map<string,ConfigBaseContext>",
  },
}

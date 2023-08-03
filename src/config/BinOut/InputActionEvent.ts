import { ConfigDefault } from "../"

export const InputActionEvent: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    priority: "vint",
    eventType: "InputEventType",
    nextToHandle: "ContextEventType",
    eventConfig: "ConfigBaseInputEvent",
    proxyEventType: "InputEventType",
    contextEvent: "ContextEventType",
  },
}

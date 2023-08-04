import { ConfigDefault } from ".."

export const ConfigGadgetCollidedPattern: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGadgetPattern",
  Fields: {
    collisionActions: "ConfigBaseGadgetTriggerAction[]",
    thisColliderName: "string",
    targetColliderName: "string",
  },
}

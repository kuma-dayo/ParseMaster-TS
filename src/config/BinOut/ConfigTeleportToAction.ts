import { ConfigDefault } from "../"

export const ConfigTeleportToAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    position: "Vector",
    forward: "Vector",
    openLongDisTeleport: "bool",
    syncForward: "bool",
  },
}
import { ConfigDefault } from ".."

export const ConfigSpatialAudio: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    sceneId: "vuint",
    roomList: "ConfigSpatialRoom[]",
    portalList: "ConfigSpatialPortal[]",
    globalRoom: "string",
  },
}

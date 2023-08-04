import { ConfigDefault } from ".."

export const ConfigSpatialPortal: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    name: "string",
    position: "Vector",
    rotation: "Vector",
    size: "Vector",
    enabled: "bool",
    frontRoomName: "string",
    backRoomName: "string",
  },
}

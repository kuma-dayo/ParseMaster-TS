import { ConfigDefault } from ".."

export const PointInfo: ConfigDefault = {
  attribute: ["excel", "nozig"],
  baseClass: null,
  Fields: {
    pointID: "vuint",
    pointType: "vuint",
    offsetX: "float",
    offsetY: "float",
    offsetZ: "float",
    rotX: "float",
    rotY: "float",
    rotZ: "float",
  },
}

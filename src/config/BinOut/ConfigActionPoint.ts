import { ConfigDefault } from ".."

export const ConfigActionPoint: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    localId: "vuint",
    type: "ActionPointType",
    pos: "Vector",
    rot: "Vector",
    capacity: "vint",
    actZoneInnerRadius: "float",
    actZoneOuterRadius: "float",
    freestyle: "vint",
    faceCenter: "bool",
  },
}

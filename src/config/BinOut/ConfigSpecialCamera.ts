import { ConfigDefault } from "../"

export const ConfigSpecialCamera: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    priority: "float",
    enterRadius: "float",
    exitRadius: "float",
    heightAdjust: "float",
    fov: "float",
    zoom: "float",
    sphericalY: "float",
    lockSphericalY: "bool",
    sphericalYUp: "float",
    sphericalYDown: "float",
    autoTurnStartMin: "float",
    autoTurnStartMax: "float",
    autoTurnEndMin: "float",
    autoTurnEndMax: "float",
    enterShape: "string",
    exitShape: "string",
    shapeCenterOffset: "Vector",
    subPriorityInStack: "vint",
    inStack: "ESpecialCameraPushStackType",
    adjustSphericalXatStart: "bool",
  },
}
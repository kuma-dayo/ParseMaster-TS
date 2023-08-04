import { ConfigDefault } from ".."

export const CheckGrapplingHookConfig: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    gadgetState: "vuint",
    hookAreaRadius: "float",
    minDistToAvatar: "float",
    maxDistToAvatar: "float",
    screenEllipseRatioX: "float",
    screenEllipseRatioY: "float",
    xweight: "float",
    yweight: "float",
    ui: "GrapplingHookUIConfig",
  },
}

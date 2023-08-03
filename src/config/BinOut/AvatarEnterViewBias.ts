import { ConfigDefault } from "../"

export const AvatarEnterViewBias: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    sphereBiasPole: "float",
    sphereBiasElev: "float",
    sphereRadius: "float",
    postForwardPoleDeltaAngle: "float",
    postForwardElevDeltaAngle: "float",
    durationInNormalState: "float",
    lockZoom: "bool",
    lockResetBack: "bool",
  },
}
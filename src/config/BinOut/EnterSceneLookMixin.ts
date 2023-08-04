import { ConfigDefault } from ".."

export const EnterSceneLookMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    lookAtTag: "string",
    followOffset: "Vector",
    fov: "float",
    trackedObjectOffset: "Vector",
    lookaheadTime: "float",
    lookaheadSmoothing: "float",
    horizontalDamping: "float",
    verticalDamping: "float",
    screenX: "float",
    screenY: "float",
    deadZoneWidth: "float",
    deadZoneHeight: "float",
    softZoneWidth: "float",
    softZoneHeight: "float",
    biasX: "float",
    biasY: "float",
  },
}

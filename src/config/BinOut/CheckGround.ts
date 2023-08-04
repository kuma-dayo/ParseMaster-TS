import { ConfigDefault } from ".."

export const CheckGround: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    enable: "bool",
    raycastUpHeight: "float",
    raycastDownHeight: "float",
    stickToGroundIfValid: "bool",
    dontCreateIfInvalid: "bool",
  },
}

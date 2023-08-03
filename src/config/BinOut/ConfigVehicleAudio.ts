import { ConfigDefault } from "../"

export const ConfigVehicleAudio: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGadgetAudio",
  Fields: {
    collisionEvent: "ConfigWwiseString",
    maxVelocity: "float",
    collisionAudioTriggerCooldown: "vuint",
    collisionAudioTriggerThreshold: "float",
  },
}

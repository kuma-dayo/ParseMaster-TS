import { ConfigDefault } from ".."

export const ConfigSpeedupField: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigConstForceField",
  Fields: {
    attenuation: "float",
    singleDir: "bool",
    triggerVehicle: "bool",
    stopVelocity: "float",
    vehicleTargetFOV: "float",
    vehicleTargetFOVDuration: "float",
    vehicleTargetFOVPriority: "vuint",
    vehicleFOVEnterSpeed: "float",
    vehicleFOVExitSpeed: "float",
  },
}

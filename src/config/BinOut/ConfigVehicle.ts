import { ConfigDefault } from ".."

export const ConfigVehicle: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    vehicleType: "VehicleType",
    playMode: "PlayModeType",
    cameraMode: "string",
    maxSeatCount: "vuint",
    seats: "ConfigVehicleSeat[]",
    defaultLevel: "vuint",
    serverBuffId: "vuint",
    stamina: "ConfigVehicleStamina",
  },
}

import { ConfigDefault } from "../"

export const ConfigSpatialRoom: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    name: "string",
    reverbAuxBus: "ConfigWwiseString",
    reverbLevel: "float",
    wallOcclusion: "float",
    auxSendLevelToSelf: "float",
    keepRegister: "bool",
    priority: "vint",
    isMajorRoom: "bool",
    boxRoomTriggers: "ConfigSpatialBoxRoomTrigger[]",
    sphereRoomTriggers: "ConfigSpatialSphereRoomTrigger[]",
  },
}

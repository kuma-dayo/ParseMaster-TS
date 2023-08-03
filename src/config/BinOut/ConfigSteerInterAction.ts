import { ConfigDefault } from "../"

export const ConfigSteerInterAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    steerType: "DialogSteerType",
    useAngle: "bool",
    steerDir: "Vector",
    steerAngle: "float",
    useSteerAnim: "bool",
    interruptFreestyle: "bool",
    forceSteer: "bool",
    targetNpcAlias: "string",
  },
}

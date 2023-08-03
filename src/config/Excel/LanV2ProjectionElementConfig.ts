import { ConfigDefault } from "../"

export const LanV2ProjectionElementConfig: ConfigDefault = {
  attribute: ["excel", "nozig"],
  baseClass: null,
  Fields: {
    prefabPath: "string",
    shadowPrefabPath: "string",
    switchButtonConfigId: "vuint",
    correctPose: "float[]",
    initialPose: "float[]",
    motionType: "LanV2ProjectionMotionType",
    freeRotationTolerance: "float[]",
    singleAxisMotionAxis: "float[]",
    singleAxisMotionLimit: "float[]",
    singleAxisMotionTolerance: "float",
  },
}

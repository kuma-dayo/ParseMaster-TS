import { ConfigDefault } from "../"

export const ConfigAIPoseControlItem: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    minTime: "float",
    maxTime: "float",
    poseID: "vint",
    RandomPose: "vint[]",
    switchOnlyInCanDoSkillState: "bool",
  },
}

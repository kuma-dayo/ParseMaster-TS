import { ConfigDefault } from "../"

export const AvatarEnterFocus: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    cameraFollowLower: "Vector",
    cameraFollowUpper: "Vector",
    cameraFollowMaxDegree: "float",
    cameraFollowMinDegree: "float",
    cameraFastFocusMode: "bool",
    faceToTarget: "bool",
    faceToTargetAngleThreshold: "float",
    changeMainSkillID: "bool",
    dragButtonName: "string",
    assistance: "FocusAssistanceGroup",
    canMove: "bool",
    showCrosshair: "bool",
    vcam_fov: "float",
    focusAnchorHorAngle: "float",
    focusAnchorVerAngle: "float",
    disableAnim: "bool",
    disableAimLayer: "bool",
    targetAnchorY: "float",
  },
}

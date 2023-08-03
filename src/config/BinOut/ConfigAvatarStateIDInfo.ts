import { ConfigDefault } from "../"

export const ConfigAvatarStateIDInfo: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigNormalStateIDInfo",
  Fields: {
    cameraType: "StateCameraType",
    cameraParam: "ConfigStateCameraParam",
    canChangeAvatar: "ConfigCanChangeAvatar[]",
    canSupportChange: "bool",
    actionPanelState: "ActionPanelState",
    equipReattach: "ConfigEquipReattach[]",
    jumpCancelStart: "float",
    jumpCancelEnd: "float",
    sprintCancelStart: "float",
    sprintCancelEnd: "float",
    flyCancelStart: "float",
    flyCancelEnd: "float",
    animatorTriggerOnLanded: "string",
    battouOnStart: "bool",
    battouOnStartNormalizedTime: "float",
    sheatheOnStart: "bool",
    sheatheOnEnd: "bool",
    ignorePreSheath: "bool",
    subEquipConfig: "ConfigStateSubEquip",
  },
}

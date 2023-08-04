import { ConfigDefault } from ".."

export const ShootFromCameraMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    ui_message_id: "UIInteractMesaage",
    offsetFromCamera: "Vector",
    gvBulletInitPos: "string",
    gvBulletForward: "string",
    actionList: "ConfigAbilityAction[]",
    aimAngelThreshoold: "float",
    rayMaxDistance: "float",
  },
}

import { ConfigDefault } from ".."

export const ConfigCustomGadgetNode: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    cameraSettings: "CustomGadgetCameraSettings",
    slotMap: "map<string,CustomGadgetNodeSlot>",
  },
}

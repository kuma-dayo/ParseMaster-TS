import { ConfigDefault } from ".."

export const WidgetCameraScanExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    cameraID: "vuint",
    configID: "vuint",
    scannableState: "vuint[]",
    isHint: "bool",
    action: "WidgetCameraActionType",
  },
}

import { EnumDefault } from "."

enum types {
  WIDGET_CAMERA_ACTION_NONE = 0,
  WIDGET_CAMERA_ACTION_NOTIFY_SERVER = 1,
}

export const WidgetCameraActionType: EnumDefault = {
  __signed: true,
  types: types,
}
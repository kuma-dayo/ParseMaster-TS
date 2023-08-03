import { ConfigDefault } from "../"

export const ConfigGuideUIMaskAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideAction",
  Fields: {
    widgetList: "ConfigGuideWidgetContent[]",
    topInfo: "string",
    prefabList: "string[]",
    clickToClose: "bool",
    needSave: "bool",
    contextListType: "ConfigGuideContextListType",
    pageShowPrefabAndGlobalHint: "string",
  },
}

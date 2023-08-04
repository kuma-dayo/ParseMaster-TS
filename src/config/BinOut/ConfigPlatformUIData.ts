import { ConfigDefault } from ".."

export const ConfigPlatformUIData: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    baseCanvansAction: "ConfigPlatformUIAction",
    basePageAction: "ConfigPlatformUIAction",
    contextActions: "map<string,ConfigPlatformUIAction>",
  },
}

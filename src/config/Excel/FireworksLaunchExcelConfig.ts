import { ConfigDefault } from ".."

export const FireworksLaunchExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    launchParamType: "FireworksLaunchParamType",
    defaultValue: "vint",
    adjustRange: "vint[]",
    adjustStep: "vint",
    launchParamNameTextMapHash: "vuint",
  },
}

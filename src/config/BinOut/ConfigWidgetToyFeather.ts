import { ConfigDefault } from ".."

export const ConfigWidgetToyFeather: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseWidgetToy",
  Fields: {
    showOnRadar: "bool",
    uiCameraEffect: "string",
    mainCameraEffect: "string",
    showHint: "bool",
    showHintDistance: "float",
    showHintEntityIDList: "vuint[]",
    abilityName: "string",
    excludeSuiteIndex: "vuint",
    abilityGroupName: "string",
    isTeam: "bool",
  },
}

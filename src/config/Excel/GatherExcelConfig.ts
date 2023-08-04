import { ConfigDefault } from ".."

export const GatherExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    areaId: "vuint",
    pointType: "vuint",
    gadgetId: "vuint",
    itemId: "vuint",
    blockLimits: "vuint[]",
    pointLocation: "PointLocation",
    refreshId: "vuint",
    initDisableInteract: "bool",
    isForbidGuest: "bool",
    saveType: "GatherSaveType",
    isForbidMpMode: "bool",
    cd: "bool",
  },
}

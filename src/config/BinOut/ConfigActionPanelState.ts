import { ConfigDefault } from "../"

export const ConfigActionPanelState: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    slotMap: "map<ActionSlotType,ConfigActionButton[]>",
    slotMapJoypadOverride: "map<ActionSlotType,ConfigActionButton[]>",
  },
}

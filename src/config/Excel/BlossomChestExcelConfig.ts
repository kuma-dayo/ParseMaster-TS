import { ConfigDefault } from "../"

export const BlossomChestExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    chest_gadget_id: "vuint",
    world_resin: "vuint",
    resin: "vuint",
    refreshType: "BlossomRefreshType",
    clientShowType: "BlossomChestShowType",
  },
}

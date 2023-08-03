import { ConfigDefault } from "../"

export const WeaponCodexExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    weaponId: "vuint",
    SortOrder: "vuint",
    isDisuse: "bool",
    showOnlyUnlocked: "bool",
  },
}

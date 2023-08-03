import { ConfigDefault } from "../"

export const CombatEndCleanExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    combatEndType: "CombatEndType",
    modifierTags: "ModifierTag[]",
    teamAbilities: "string[]",
  },
}

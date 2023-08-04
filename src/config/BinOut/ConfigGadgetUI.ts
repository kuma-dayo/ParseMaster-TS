import { ConfigDefault } from ".."

export const ConfigGadgetUI: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGadgetUIBase",
  Fields: {
    alwaysInteractive: "bool",
    canInteractInCombat: "bool",
    canOnlyInteractInStandStill: "bool",
    openRewardId: "vuint",
    gadgetUIExtraItems: "ConfigGadgetUIExtraItem[]",
  },
}

import { EnumDefault } from "."

enum types {
  ElementArt = 0,
  ElementBurst = 1,
  HPBar = 2,
}

export const ActionPanelEffectSlot: EnumDefault = {
  __signed: true,
  types: types,
}

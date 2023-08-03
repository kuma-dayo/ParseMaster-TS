import { EnumDefault } from "."

enum types {
  Default = 0,
  NormalChest = 1,
  FloraChest = 2,
  MultipleReward = 3,
  SingleReward = 4,
  OwnerOnlyReward = 5,
  GadgetChain = 6,
  WidgetMPSupport = 7,
  PostUIInteractGadgetAction = 8,
  GeneralUIInteract = 9,
}

export const TouchInteractType: EnumDefault = {
  __signed: true,
  types: types,
}

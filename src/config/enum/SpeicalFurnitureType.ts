import { EnumDefault } from "."

enum types {
  NormalFurnitrue = 0,
  BlockDependent = 1,
  FarmField = 2,
  TeleportPoint = 3,
  Fishpond = 4,
  NPC = 5,
  Apartment = 6,
  FurnitureSuite = 7,
  Paimon = 8,
  Fish = 9,
  CustomBaseFurnitrue = 10,
  CustomNodeFurnitrue = 11,
  VirtualFurnitrue = 12,
  GroupFurnitrue = 13,
  CoopPictureFrame = 14,
  ChangeBgmFurniture = 15,
  ServerGadget = 16,
  Fishtank = 17,
}

export const SpeicalFurnitureType: EnumDefault = {
  __signed: true,
  types: types,
}

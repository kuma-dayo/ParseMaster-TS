import { EnumDefault } from "."

enum types {
  TriggerAntiFire = 0,
  TriggerBurning = 1,
  TriggerExplode = 2,
  TriggerSuperconductor = 3,
  TriggerMelt = 4,
  TriggerSteam = 5,
  TriggerFreeze = 6,
  TriggerFrozen = 7,
  TriggerElectricAdd = 8,
  TriggerVehicleMuteIce = 9,
  COUNT = 10,
}

export const MassiveElementTriggerType: EnumDefault = {
  __signed: true,
  types: types,
}
import { EnumDefault } from "."

enum types {
  None = 0,
  QteStart = 1,
  QteTrigger = 2,
  RequestQuit = 3,
  CastAnchorPoint = 4,
  SelectBait = 5,
  Pull = 6,
  NotifyBait = 7,
}

export const FishingEvent: EnumDefault = {
  __signed: true,
  types: types,
}

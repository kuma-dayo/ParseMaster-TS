import { EnumDefault } from "."

enum types {
  VisionNone = 0,
  VisionMeet = 1,
  VisionReborn = 2,
  VisionReplace = 3,
  VisionWaypointReborn = 4,
  VisionMiss = 5,
  VisionDie = 6,
  VisionGatherEscape = 7,
  VisionRefresh = 8,
  VisionTransport = 9,
  VisionReplaceDie = 10,
}

export const EntityAppearVisionType: EnumDefault = {
  __signed: true,
  types: types,
}

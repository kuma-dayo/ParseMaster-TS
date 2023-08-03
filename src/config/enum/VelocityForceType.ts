import { EnumDefault } from "."

enum types {
  RetreatType = 0,
  RetreatAirType = 1,
  RushMoveType = 2,
  WindZoneType = 3,
  AirflowType = 4,
  RiseType = 5,
  SpeedupType = 6,
  AirflowAccType = 7,
  InertiaType = 8,
  FixedRushMoveType = 9,
  LightCoreTypeNormal = 10,
  LightCoreTypeAccelerate = 11,
  GorouZoneType = 12,
  UGCDirectedForceType = 13,
  TrampolineForceType = 14,
  GrapplingHookMoveType = 15,
}

export const VelocityForceType: EnumDefault = {
  __signed: true,
  types: types,
}

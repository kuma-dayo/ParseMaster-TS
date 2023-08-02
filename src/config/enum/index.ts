export * from "./AvatarIdentityType"
export * from "./AvatarUseType"
export * from "./BodyType"
export * from "./FightPropType"
export * from "./GrowCurveType"
export * from "./MonsterSecurityLevel"
export * from "./MonsterType"
export * from "./QualityType"
export * from "./VisionLevelType"
export * from "./WeaponType"

export interface EnumDefault {
  __signed: boolean
  types: any
}

export function get(name: string): EnumDefault {
  return <EnumDefault>this[name]
}

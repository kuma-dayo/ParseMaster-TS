export * from "./AvatarExcelConfig"
export * from "./CreatureExcelConfig"
export * from "./EntityExcelConfig"
export * from "./FightPropGrowConfig"
export * from "./MonsterDrop"
export * from "./MonsterExcelConfig"
export interface ConfigDefault {
  attribute: string[]
  // baseClass: ConfigDefault // TODO: baseClass: Config.TestClass
  baseClass: string
  Fields: {
    [key: string]: string //TODO: I want to make the type explicit
  }
}

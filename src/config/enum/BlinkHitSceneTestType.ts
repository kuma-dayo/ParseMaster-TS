import { EnumDefault } from "."

enum types {
  BlinkHitSceneTestByStraightLine = 0,
  BlinkHitSceneTestByThreeSegments = 1,
}

export const BlinkHitSceneTestType: EnumDefault = {
  __signed: true,
  types: types,
}

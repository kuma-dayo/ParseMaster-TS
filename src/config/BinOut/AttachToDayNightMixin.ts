import { ConfigDefault } from "../"

export const AttachToDayNightMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    time: "LevelDayTimeType",
    modifierName: "string",
  },
}

import { ConfigDefault } from ".."

export const ResistClimateMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    climateTypes: "JsonClimateType[]",
    source: "ClimateSourceType",
    trend: "ClimateTrendType",
    ratio: "DynamicFloat",
    type: "AvatarStageType",
  },
}

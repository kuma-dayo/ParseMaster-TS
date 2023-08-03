import { ConfigDefault } from "../"

export const ConfigPerfRatingSetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    perfRating: "map<PerfRatingCategory,ConfigPerfRatingLevel[]>",
    perfRatingCopyMap: "map<PerfRatingCategory,PerfRatingCategory>",
    perfRatingDefault: "map<PerfRatingCategory,vint>",
  },
}

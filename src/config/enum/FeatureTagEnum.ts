import { EnumDefault } from "."

enum types {
  FEATURE_TAG_NONE = 0,
  FEATURE_TAG_AVATAR = 1,
  FEATURE_TAG_HUMAN = 2,
  FEATURE_TAG_ARANARA = 3,
  FEATURE_TAG_MONSTER = 4,
  FEATURE_TAG_ANIMAL = 5,
  FEATURE_TAG_NAHIDA_INTER = 6,
}

export const FeatureTagEnum: EnumDefault = {
  __signed: true,
  types: types,
}

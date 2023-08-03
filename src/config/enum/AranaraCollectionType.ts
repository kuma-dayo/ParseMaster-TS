import { EnumDefault } from "."

enum types {
  ARANARA_COLLECTION_TYPE_NONE = 0,
  ARANARA_COLLECTION_TYPE_CATALOG_V1 = 1,
}

export const AranaraCollectionType: EnumDefault = {
  __signed: true,
  types: types,
}

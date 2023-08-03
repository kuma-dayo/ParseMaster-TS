import { EnumDefault } from "."

enum types {
  CATALOG_TYPE_NONE = 0,
  CATALOG_TYPE_ARANARA = 1,
  CATALOG_TYPE_DESHRET_GUIDE = 2,
}

export const CatalogType: EnumDefault = {
  __signed: true,
  types: types,
}

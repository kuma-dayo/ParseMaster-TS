import { ConfigDefault } from "../"

export const AvatarFlycloakExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    flycloakId: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    prefab_path: "string",
    json_name: "string",
    icon: "string",
    material_id: "vuint",
    hide: "bool",
  },
}

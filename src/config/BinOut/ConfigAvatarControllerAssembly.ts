import { ConfigDefault } from "../"

export const ConfigAvatarControllerAssembly: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    controllerPath: "string",
    normalMoveSubs: "string",
    weaponMoveSubs: "string",
    skillSubs: "ConfigAvatarControllerAssemblySkillSubs",
  },
}

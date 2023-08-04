import { ConfigDefault } from ".."

export const ConfigNpcTalkScheme: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    npcId: "vuint",
    talks: "ConfigTalkScheme[]",
  },
}

import { ConfigDefault } from ".."

export const DoTileActionManagerMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    duration: "float",
    actionID: "string",
    actionPosKey: "string",
    actionRadiusKey: "string",
    reactionForceUseOwnerProp: "bool",
    actions: "ConfigAbilityAction[]",
  },
}

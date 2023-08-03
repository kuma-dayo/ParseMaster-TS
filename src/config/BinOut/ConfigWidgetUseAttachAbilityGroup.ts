import { ConfigDefault } from "../"

export const ConfigWidgetUseAttachAbilityGroup: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseWidgetToy",
  Fields: {
    abilityGroupName: "string",
    abilityGroupNameSecond: "string",
    sharedCdGroup: "vuint",
    replaceSkillHintList: "WidgetSkillReplaceType[]",
    isUpdateCDAfterAbilityTrigger: "bool",
    isSkipTakeOffAbilityGroupWhenChangeAvatar: "bool",
  },
}

import { ConfigDefault } from "../"

export const EraseBrickActivityMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    explodeDelay: "DynamicFloat",
    hpMap: "map<EraseBrickActivity_BrickType,DynamicFloat>",
    scoreMap: "map<EraseBrickActivity_BrickType,DynamicFloat>",
    rule: "EraseBrickActivity_CreateBrick[]",
    ruleSteps: "EraseBrickActivity_CreateBrickRuleListItem[]",
    ruleStepGvKey: "string",
    otherRuleSteps: "map<vint,EraseBrickActivity_CreateBrickRuleListItem[]>",
    onStaminaBroken: "ConfigAbilityAction[]",
    staminaBuffDuration: "DynamicFloat",
    staminaBuffRatio: "DynamicFloat",
    stateSwitchActions: "EraseBrickActivity_SwitchStateAction[]",
    stateSwitchActionArray: "ConfigAbilityAction[][]",
    stateParaName: "string",
    stateParaValues: "EraseBrickActivity_StatePara[]",
    hpParaName: "string",
    countParaName: "string",
    typeCountParaName: "map<EraseBrickActivity_BrickType,string>",
    durabilityChangedGvlist: "string[]",
    initRule: "map<vint,EraseBrickActivity_BrickType[]>",
    clearRule: "map<vint,EraseBrickActivity_BrickType[]>",
  },
}

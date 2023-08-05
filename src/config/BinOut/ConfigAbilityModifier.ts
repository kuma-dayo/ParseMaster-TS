//Auto Generated by ConfigParser
import { ConfigDefault } from ".."

export const ConfigAbilityModifier: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    timeScale: "ModifierTimeScale",
    stacking: "ModifierStacking",
    stackingOption: "ConfigModifierStackingOption",
    isBuff: "bool",
    isDebuff: "bool",
    modifierName: "string",
    isUnique: "bool",
    duration: "DynamicFloat",
    elementType: "ElementType",
    elementDurability: "DynamicFloat",
    maxElementDurability: "float",
    purgeIncrement: "float",
    isElementDurabilityMutable: "bool",
    forceTriggerBurning: "bool",
    overrideWeaponElement: "bool",
    thinkInterval: "DynamicFloat",
    modifierMixins: "ConfigAbilityMixin[]",
    trimThinkInterval: "bool",
    properties: "map<string,DynamicFloat>",
    state: "AbilityState",
    stateOption: "ConfigAbilityStateOption",
    muteStateDisplayEffect: "bool",
    applyAttackerWitchTimeRatio: "bool",
    onAdded: "ConfigAbilityAction[]",
    onRemoved: "ConfigAbilityAction[]",
    onBeingHit: "ConfigAbilityAction[]",
    onAttackLanded: "ConfigAbilityAction[]",
    onHittingOther: "ConfigAbilityAction[]",
    onHeal: "ConfigAbilityAction[]",
    onBeingHealed: "ConfigAbilityAction[]",
    onThinkInterval: "ConfigAbilityAction[]",
    onThinkIntervalIsFixedUpdate: "bool",
    onKill: "ConfigAbilityAction[]",
    onCrash: "ConfigAbilityAction[]",
    onAvatarIn: "ConfigAbilityAction[]",
    onAvatarOut: "ConfigAbilityAction[]",
    onVehicleIn: "ConfigAbilityAction[]",
    onVehicleOut: "ConfigAbilityAction[]",
    onZoneEnter: "ConfigAbilityAction[]",
    onZoneExit: "ConfigAbilityAction[]",
    onReconnect: "ConfigAbilityAction[]",
    onChangeAuthority: "ConfigAbilityAction[]",
    forbiddenEntities: "EntityType[]",
    fireEventWhenApply: "bool",
    isDurabilityGlobal: "bool",
    tickThinkIntervalAfterDie: "bool",
    thinkIntervalIgnoreTimeScale: "bool",
    reduceDurablityIgnoreTimeScale: "bool",
    isLimitedProperties: "bool",
    forceSyncToRemote: "bool",
    buffID: "vint",
    retainWhenDurabilityIsZero: "bool",
    modifierTags: "ModifierTag[]",
    useDummyAbility: "bool",
    dummyAbilityOption: "ConfigDummyAbilityOption",
  },
}

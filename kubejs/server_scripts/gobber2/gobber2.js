// priority: 0

console.info('AQM3 -- Modifying Gobber2)');

const gobberRemove = [
'gobber2:gobber2_medallion_glowing',
'gobber2:gobber2_medallion_shielding',
'gobber2:gobber2_medallion_suffering',
'gobber2:gobber2_ring_airwalking',
'gobber2:gobber2_ring_ascent',
'gobber2:gobber2_ring_blaze',
'gobber2:gobber2_ring_farmer',
'gobber2:gobber2_ring_husbandry',
'gobber2:gobber2_ring_phoenix',
'gobber2:gobber2_ring_pyro',
'gobber2:gobber2_ring_repair',
'gobber2:gobber2_ring_sunshine',
'gobber2:gobber2_ring_swiftness',
'gobber2:gobber2_ring_vision',
'gobber2:gobber2_staff_farmer',
'gobber2:gobber2_staff_harvest',
'gobber2:gobber2_sword_traveler',
'gobber2:gobber2_hammer_end',
'gobber2:gobber2_hammer_nether',
'gobber2:gobber2_hammer',
'gobber2:gobber2_staff_ensnarement',
'gobber2:gobber2_tree_axe_end',
'gobber2:gobber2_tree_axe_nether',
'gobber2:gobber2_tree_axe',
'gobber2:gobber2_ring_stealth'
];

onEvent('recipes', event => {
  gobberRemove.forEach(item => {
    event.remove({output: item})
  })

// event.replaceInput(
//   { id:"gobber2:gobber2_links_end" },
//     "minecraft:nether_star",
//     "gobber2:dragon_star"
// );

// swimming
event.replaceInput(
  { id:"gobber2:gobber2_medallion_stepping" },
    "minecraft:feather",
    "cyclic:apple_lofty_stature"
);

// gobber2_medallion_breathing
event.remove({output: "gobber2:gobber2_medallion_breathing"})
event.shaped("gobber2:gobber2_medallion_breathing", [
[null, 'artifacts:snorkel', null],
['gobber2:gobber2_ingot_nether', 'gobber2:gobber2_medallion', 'gobber2:gobber2_ingot_nether'],
[null, 'aquaculture:catfish', null],
]);

// gobber2:gobber2_medallion_hero
event.remove({output: "gobber2:gobber2_medallion_hero"})
event.shaped("gobber2:gobber2_medallion_hero", [
[null, 'artifacts:villager_hat', null],
['minecraft:emerald', 'gobber2:gobber2_medallion', 'minecraft:emerald'],
[null, 'minecraft:emerald', null],
]);

// Gobber Ore
// event.recipes.immersiveengineeringCrusher(output, input)
// event.recipes.immersiveengineeringCrusher(output, input, [secondaries]) // Secondary output format: {chance: 0.5, output: 'item:id'}
// EXAMPLE: event.recipes.immersiveengineeringCrusher('7x create:crushed_copper_ore', 'minecraft:copper_ore', [Item.of('minecraft:copper_ore').withChance(0.5)])
// event.remove({input: "gobber2:gobber2_ore"})
// event.recipes.immersiveengineeringCrusher('3x gobber2:gobber2_globette', 'gobber2:gobber2_ore', [Item.of('gobber2:gobber2_glob').withChance(0.055)]);
// event.remove({input: "gobber2:gobber2_ore_deepslate"})
// event.recipes.immersiveengineeringCrusher('3x gobber2:gobber2_globette', 'gobber2:gobber2_ore_deepslate', [Item.of('gobber2:gobber2_glob').withChance(0.056)]);
// event.remove({input: "gobber2:gobber2_ore_nether"})
// event.recipes.immersiveengineeringCrusher('3x gobber2:gobber2_globette_nether', 'gobber2:gobber2_ore_nether', [Item.of('gobber2:gobber2_glob_nether').withChance(0.0575)]);
// event.remove({input: "gobber2:gobber2_ore_end"})
// event.recipes.immersiveengineeringCrusher('3x gobber2:gobber2_globette_end', 'gobber2:gobber2_ore_end', [Item.of('gobber2:gobber2_glob_end').withChance(0.0575)]);

// Use Compacter for Dragonstar
event.remove({output: "gobber2:dragon_star"})
event.recipes.createCompacting('gobber2:dragon_star', [
  'gobber2:gobber2_block_end',
  'gobber2:gobber2_rod_end',
  'gobber2:gobber2_ore_end']).heated()

event.replaceInput(
  { id:"mysticalagriculture:globette_end_seeds_infusion" },
    "mysticalagriculture:supremium_essence",
    "mysticalagradditions:insanium_essence"
);

event.remove({output: "gobber2:gobber2_ring_curing"})
event.shaped("gobber2:gobber2_ring_curing", [
["minecraft:glowstone_dust", "reliquary:witherless_rose", "minecraft:glowstone_dust"],
[null, 'gobber2:gobber2_medallion_nether', null],
["minecraft:glowstone_dust", 'finsandtails:spindly_gem_crab_gem_from_gems', "minecraft:glowstone_dust"],
]);

event.replaceInput({id:"gobber2:gobber2_ring_haste"},"minecraft:emerald","mowziesmobs:barakoa_mask_rage");

//end
});
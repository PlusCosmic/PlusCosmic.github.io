// priority: 0

console.info('Creating AQM3 Items...');

// Listen to item registry event
onEvent('item.registry', event => {

  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
 event.create('corrupted_emerald').displayName('Corrupted Emerald').tooltip('§8A Worthy Trophy of a Hard Battle').maxStackSize(1).burnTime(3000);

  event.create('star_of_icon').displayName('Star of Icon').tooltip('§8Something about a Icon of Sin').maxStackSize(1).burnTime(3000);

  event.create('demon_pearl').displayName('Demon Pearl').tooltip('§8Arch Makyr\'s Dim Pearl').maxStackSize(1).burnTime(3000);

});
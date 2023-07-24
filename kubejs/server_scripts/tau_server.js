// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

let STONEPLATES = ['stone','polished_blackstone']
let WOODPLATES = ['oak','spruce','birch','jungle','acacia','dark_oak','mangrove','crimson','warped']

ServerEvents.recipes(event => {
    event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:tome_of_finality"}'), ['#forge:rods/wooden','#forge:rods/wooden']).id('finality:documentation_book')
    event.remove({id: 'minecraft:redstone_from_smelting_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_smelting_deepslate_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_blasting_redstone_ore'}) // cursed recipe
    event.remove({id: 'minecraft:redstone_from_blasting_deepslate_redstone_ore'}) // cursed recipe
	event.remove({id: 'createaddition:rolling/gold_ingot'})
	event.remove({id: 'createaddition:rolling/brass_ingot'})
	event.remove({id: 'createaddition:rolling/straw'})
	event.remove({id: 'createaddition:mixing/bioethanol'})
	event.shaped('minecraft:bucket', [
		'I I',
		' I '
	], {
		I: 'create:iron_sheet'
	}).id('minecraft:bucket')
	event.shaped('minecraft:clock', [
		' G ',
		'GMG',
		' G '
	], {
		G: 'create:golden_sheet',
		M: 'create:precision_mechanism'
	}).id('minecraft:clock')
	event.shaped('minecraft:compass', [
		' I ',
		'IRI',
		' I '
	], {
		I: 'create:iron_sheet',
		R: 'minecraft:redstone'
	}).id('minecraft:compass')
	event.shaped('minecraft:piston', [
		'WWW',
		'CEC',
		'CRC'
	], {
		W: '#minecraft:planks',
		C: 'minecraft:cobblestone',
		E: 'create:piston_extension_pole',
		R: 'minecraft:redstone'
	}).id('minecraft:piston')
    event.shaped('minecraft:hopper',[
        'F F',
        'FCF',
        ' F '
    ],{
        F: 'create:iron_sheet',
        C: '#forge:chests/wooden'
    }).id('minecraft:hopper')
	event.shaped('minecraft:trident', [
		'PPP',
		' A ',
		' A '
	], {
		P: 'kubejs:trident_prong',
		A: 'kubejs:trident_pole'
	}).id('finality:trident')
	event.shaped('kubejs:trident_pole', [
		'S',
		'S'
	], {
		S: 'minecraft:prismarine_shard'
	}).id('finality:trident_pole')
	event.shapeless('kubejs:trident_prong', [
		'minecraft:pointed_dripstone',
		'minecraft:prismarine_crystals'
	]).id('finality:trident_prong')
	event.recipes.createMixing('kubejs:omnipotent_alloy', [
		'extendedcrafting:the_ultimate_catalyst',
		'extendedcrafting:crystaltine_catalyst',
		'minecraft:netherite_ingot',
		'create:rose_quartz',
		'create:brass_ingot',
		'create:andesite_alloy',
		'minecraft:diamond',
		'minecraft:amethyst_shard',
		Fluid.of('kubejs:condensed_universal_entropy', 500)
	]).id('finality:mixing/omnipotent_alloy')
	event.shaped('kubejs:final_helmet', [
		'EEE',
		'E E'
	], {
		E: 'kubejs:omnipotent_alloy',
	}).id('finality:crafting/final_helmet')
	event.shaped('kubejs:final_chestplate', [
		'E E',
		'EEE',
		'EEE'
	], {
		E: 'kubejs:omnipotent_alloy'
	}).id('finality:crafting/final_chestplate')
	event.shaped('kubejs:final_leggings', [
		'EEE',
		'E E',
		'E E'
	], {
		E: 'kubejs:omnipotent_alloy'
	}).id('finality:crafting/final_leggings')
	event.shaped('kubejs:final_boots', [
		'E E',
		'E E'
	], {
		E: 'kubejs:omnipotent_alloy'
	}).id('finality:crafting/final_boots')
	event.shaped('kubejs:final_sword', [
		'E',
		'E',
		'S'
	], {
		E: 'kubejs:omnipotent_alloy',
		S: 'extendedcrafting:black_iron_ingot'
	}).id('finality:crafting/final_sword')
	event.shaped('kubejs:final_pickaxe', [
		'EEE',
		' S ',
		' S '
	], {
		E: 'kubejs:omnipotent_alloy',
		S: 'extendedcrafting:black_iron_ingot'
	}).id('finality:crafting/final_pickaxe')
	event.shaped('kubejs:final_axe', [
		'EE',
		'ES',
		' S'
	], {
		E: 'kubejs:omnipotent_alloy',
		S: 'extendedcrafting:black_iron_ingot'
	}).id('finality:crafting/final_axe')
	event.shaped('kubejs:final_shovel', [
		'E',
		'S',
		'S'
	], {
		E: 'kubejs:omnipotent_alloy',
		S: 'extendedcrafting:black_iron_ingot'
	}).id('finality:crafting/final_shovel')
	event.shaped('kubejs:final_hoe', [
		'EE',
		' S',
		' S'
	], {
		E: 'kubejs:omnipotent_alloy',
		S: 'extendedcrafting:black_iron_ingot'
	}).id('finality:crafting/final_hoe')
	STONEPLATES.forEach(stone => {
		event.stonecutting(`${stone}_pressure_plate`, `${stone}_slab`).id(`minecraft:${stone}_pressure_plate`)
	})
	WOODPLATES.forEach(wood => {
		event.stonecutting(`${wood}_pressure_plate`, `${wood}_slab`).id(`minecraft:${wood}_pressure_plate`)
	})
	STONEPLATES.forEach(stone => {
		event.recipes.create.cutting([`${stone}_pressure_plate`, `${stone}_slab`], `${stone}`).id(`finality:${stone}_pressure_plate`)
	})
	WOODPLATES.forEach(wood => {
		event.recipes.create.cutting([`${wood}_pressure_plate`, `${wood}_slab`], `${wood}_planks`).id(`finality:${wood}_pressure_plate`)
	})
	event.shaped('light_weighted_pressure_plate', [
		'G',
		'R'
	], {
		G: 'create:golden_sheet',
		R: 'minecraft:redstone'
	}).id('minecraft:light_weighted_pressure_plate')
	event.shaped('heavy_weighted_pressure_plate', [
		'G',
		'R'
	], {
		G: 'create:iron_sheet',
		R: 'minecraft:redstone'
	}).id('minecraft:heavy_weighted_pressure_plate')
	let CHARCOAL = ['stripped_palm_log','palm_log','stripped_palm_wood','palm_wood','palm_beam']
	CHARCOAL.forEach(wood => {
		event.smelting('charcoal', `beachparty:${wood}`).id(`finality:smelting/beachparty_${wood}/charcoal_compat`)
		event.blasting('charcoal', `beachparty:${wood}`).id(`finality:blasting/beachparty_${wood}/charcoal_compat`)
	})
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
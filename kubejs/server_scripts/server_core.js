// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

let C = (id) => `create:${id}`
let MC = (id) => `minecraft:${id}`
let EXT = (id) => `extendedcrafting:${id}`

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
	event.remove({output: 'projecte:dm_furnace'})
    event.remove({output: 'projecte:rm_furnace'})
    event.remove({output: 'waystones:warp_plate'})
    event.remove({output: 'waystones:attuned_shard'})
    event.remove({output: 'waystones:warp_dust'})
	event.shaped('bucket', [
		'I I',
		' I '
	], {
		I: C('iron_sheet')
	}).id('minecraft:bucket')
	event.shaped('clock', [
		' G ',
		'GMG',
		' G '
	], {
		G: C('golden_sheet'),
		M: C('precision_mechanism')
	}).id('minecraft:clock')
	event.shaped('compass', [
		' I ',
		'IRI',
		' I '
	], {
		I: C('iron_sheet'),
		R: MC('redstone')
	}).id('minecraft:compass')
	event.shaped('piston', [
		'WWW',
		'CEC',
		'CRC'
	], {
		W: '#minecraft:planks',
		C: 'cobblestone',
		E: 'create:piston_extension_pole',
		R: 'redstone'
	}).id('minecraft:piston')
	event.shaped('trident', [
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
		S: 'prismarine_shard'
	}).id('finality:trident_pole')
	event.shapeless('kubejs:trident_prong', [
		'pointed_dripstone',
		'prismarine_crystals'
	]).id('finality:trident_prong')
	event.recipes.createMixing('finality:omnipotent_alloy', [
		EXT('the_ultimate_catalyst'),
		EXT('crystaltine_catalyst'),
		MC('netherite_ingot'),
		C('rose_quartz'),
		C('brass_ingot'),
		C('andesite_alloy'),
		MC('diamond'),
		MC('amethyst_shard'),
		Fluid.of('finality:condensed_universal_entropy', 500)
	]).id('finality:mixing/omnipotent_alloy')
	event.shaped('finality:final_helmet', [
		'EEE',
		'E E'
	], {
		E: 'finality:omnipotent_alloy',
	}).id('finality:crafting/final_helmet')
	event.shaped('finality:final_chestplate', [
		'E E',
		'EEE',
		'EEE'
	], {
		E: 'finality:omnipotent_alloy'
	}).id('finality:crafting/final_chestplate')
	event.shaped('finality:final_leggings', [
		'EEE',
		'E E',
		'E E'
	], {
		E: 'finality:omnipotent_alloy'
	}).id('finality:crafting/final_leggings')
	event.shaped('finality:final_boots', [
		'E E',
		'E E'
	], {
		E: 'finality:omnipotent_alloy'
	}).id('finality:crafting/final_boots')
	event.shaped('finality:final_sword', [
		'E',
		'E',
		'S'
	], {
		E: 'finality:omnipotent_alloy',
		S: 'extendedcrafting:black_iron_ingot'
	}).id('finality:crafting/final_sword')
	event.shaped('finality:final_pickaxe', [
		'EEE',
		' S ',
		' S '
	], {
		E: 'finality:omnipotent_alloy',
		S: 'extendedcrafting:black_iron_ingot'
	}).id('finality:crafting/final_pickaxe')
	event.shaped('finality:final_axe', [
		'EE',
		'ES',
		' S'
	], {
		E: 'finality:omnipotent_alloy',
		S: 'extendedcrafting:black_iron_ingot'
	}).id('finality:crafting/final_axe')
	event.shaped('finality:final_shovel', [
		'E',
		'S',
		'S'
	], {
		E: 'finality:omnipotent_alloy',
		S: 'extendedcrafting:black_iron_ingot'
	}).id('finality:crafting/final_shovel')
	event.shaped('finality:final_hoe', [
		'EE',
		' S',
		' S'
	], {
		E: 'finality:omnipotent_alloy',
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
		R: 'redstone'
	}).id('minecraft:light_weighted_pressure_plate')
	event.shaped('heavy_weighted_pressure_plate', [
		'G',
		'R'
	], {
		G: 'create:iron_sheet',
		R: 'redstone'
	}).id('minecraft:heavy_weighted_pressure_plate')
	let CHARCOAL = ['stripped_palm_log','palm_log','stripped_palm_wood','palm_wood','palm_beam']
	CHARCOAL.forEach(wood => {
		event.blasting('charcoal', `beachparty:${wood}`).id(`finality:beachparty_${wood}/charcoal_compat`)
	})
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
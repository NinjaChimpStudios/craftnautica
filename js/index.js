var material_data = {},
  materialNames = {
    acid_mushroom: "Acid Mushroom",
    advanced_wiring_kit: "Advanced Wiring Kit",
    aerogel: "Aerogel",
    air_bladder: "Air Bladder",
    alien_containment: "Alien Containment",
    an_unusual_doll: "An Unusual Doll",
    aquarium: "Aquarium",
    bar_table: "Bar Table",
    base_pipe_connector: "Base Pipe Connector",
    basic_compartment: "Basic Compartment",
    basic_double_bed: "Basic Double Bed",
    battery: "Battery",
    battery_charger: "Battery Charger",
    beacon: "Beacon",
    bench: "Bench",
    benzene: "Benzene",
    bioreactor: "Bioreactor",
    bladderfish: "Bladderfish",
    bleach: "Bleach",
    blood_oil: "Blood Oil",
    blue_tablet: "Blue Tablet",
    bulb_bush_sample: "Bulb Bush Sample",
    bulkhead: "Bulkhead",
    camera_drone: "Camera Drone",
    cave_sulfur: "Cave Sulfur",
    chair: "Chair",
    chair_2: "Chair 2",
    chair_3: "Chair 3",
    coffee_vending_machine: "Coffee Vending Machine",
    compass: "Compass",
    computer_chip: "Computer Chip",
    copper_ore: "Copper Ore",
    copper_wire: "Copper Wire",
    coral_tube_sample: "Coral Tube Sample",
    creature_decoy: "CreatureDecoy",
    creepvine_sample: "Creepvine Sample",
    creepvine_seed_cluster: "Creepvine Seed Cluster",
    crystalline_sulfur: "Crystalline Sulfur",
    cyclops: "Cyclops",
    cyclops_decoy_tube_upgrade: "Cyclops Decoy Tube Upgrade",
    cyclops_depth_module_mk1: "Cyclops Depth Module MK1",
    cyclops_depth_module_mk2: "Cyclops Depth Module MK2",
    cyclops_depth_module_mk3: "Cyclops Depth Module MK3",
    cyclops_docking_bay_repair_module: "Cyclops Docking Bay Repair Module",
    cyclops_engine_efficiency_module: "Cyclops Engine Efficiency Module",
    cyclops_fire_suppression_system: "Cyclops Fire Suppression System",
    cyclops_pressure_compensator: "Cyclops Pressure Compensator",
    cyclops_shield_generator: "Cyclops Shield Generator",
    cyclops_sonar_upgrade: "Cyclops Sonar Upgrade",
    cyclops_thermal_reactor_module: "Cyclops Thermal Reactor Module",
    deep_shroom: "Deep Shroom",
    desk: "Desk",
    diamond: "Diamond",
    disinfected_water: "Disinfected Water",
    enameled_glass: "Enameled Glass",
    engine_efficiency_module: "Engine Efficiency Module",
    exterior_growbed: "Exterior Growbed",
    eyes_plant_seed: "Eyes Plant Seed",
    fabricator: "Fabricator",
    fiber_mesh: "Fiber Mesh",
    filtered_water: "Filtered Water",
    fins: "Fins",
    fire_extinguisher: "Fire Extinguisher",
    first_aid_kit: "First Aid Kit",
    flare: "Flare",
    flashlight: "Flashlight",
    floodlight: "Floodlight",
    foundation: "Foundation",
    fungal_sample: "Fungal Sample",
    gas_pod: "Gas Pod",
    gas_torpedo: "Gas Torpedo",
    gel_sack: "Gel Sack",
    ghost_weed_seed: "Ghost Weed Seed",
    glass: "Glass",
    glass_compartment: "Glass Compartment",
    gold: "Gold",
    grav_trap: "Grav Trap",
    habitat_builder: "Habitat Builder",
    hatch: "Hatch",
    hatching_enzymes: "Hatching Enzymes",
    high_capacity_o2_tank: "High Capacity O2 Tank",
    hull_reinforcement: "Hull Reinforcement",
    hydrochloric_acid: "Hydrochloric Acid",
    indoor_growbed: "Indoor Growbed",
    ion_battery: "Ion Battery",
    ion_crystal: "Ion Crystal",
    ion_power_cell: "Ion Power Cell",
    kyanite: "Kyanite",
    l_compartment: "L Compartment",
    l_glass_compartment: "LGlass Compartment",
    lab_counter: "Lab Counter",
    lab_trash_can: "Lab Trash Can",
    ladder: "Ladder",
    large_filtered_water: "Large Filtered Water",
    laser_cutter: "Laser Cutter",
    lead: "Lead",
    light_stick: "Light Stick",
    lightweight_high_capacity_tank: "Lightweight High Capacity Tank",
    lithium: "Lithium",
    locker: "Locker",
    lubricant: "Lubricant",
    magnetite: "Magnetite",
    medical_kit_fabricator: "Medical Kit Fabricator",
    metal_salvage: "Metal Salvage",
    mobile_vehicle_bay: "Mobile Vehicle Bay",
    modification_station: "Modification Station",
    moonpool: "Moonpool",
    multipurpose_room: "Multipurpose Room",
    neptune_launch_platform: "Neptune Launch Platform",
    nickel_ore: "Nickel Ore",
    nuclear_reactor: "Nuclear Reactor",
    observatory: "Observatory",
    orange_tablet: "Orange Tablet",
    pathfinder_tool: "Pathfinder Tool",
    picture_frame: "Picture Frame",
    pipe: "Pipe",
    pipe_surface_floater: "Pipe Surface Floater",
    plant_pot: "Plant Pot",
    plant_pot_2: "Plant Pot 2",
    plant_pot_3: "Plant Pot 3",
    plant_shelf: "Plant Shelf",
    plasteel_ingot: "Plasteel Ingot",
    polyaniline: "Polyaniline",
    power_cell: "Power Cell",
    power_cell_charger: "Power Cell Charger",
    power_transmitter: "Power Transmitter",
    prawn_suit: "Prawn Suit",
    prawn_suit_depth_module_mk1: "Prawn Suit Depth Module MK1",
    prawn_suit_depth_module_mk2: "Prawn Suit Depth Module MK2",
    prawn_suit_drill_arm: "Prawn Suit Drill Arm",
    prawn_suit_grappling_arm: "Prawn Suit Grappling Arm",
    prawn_suit_jump_jet_upgrade: "Prawn Suit Jump Jet Upgrade",
    prawn_suit_pressure_compensator_mark_1: "Prawn Suit Pressure Compensator Mark 1",
    prawn_suit_propulsion_cannon: "Prawn Suit Propulsion Cannon",
    prawn_suit_thermal_reactor: "Prawn Suit Thermal Reactor",
    prawn_suit_torpedo_arm: "Prawn Suit Torpedo Arm",
    propulsion_cannon: "Propulsion Cannon",
    purple_tablet: "Purple Tablet",
    quartz: "Quartz",
    quilted_double_bed: "Quilted Double Bed",
    radiation_suit: "Radiation Suit",
    radio: "Radio",
    reactor_rod: "Reactor Rod",
    rebreather: "Rebreather",
    reinforced_dive_suit: "Reinforced Dive Suit",
    reinforcement: "Reinforcement",
    repair_tool: "Repair Tool",
    repulsion_cannon: "Repulsion Cannon",
    ruby: "Ruby",
    salt_deposit: "Salt Deposit",
    scanner: "Scanner",
    scanner_room: "Scanner Room",
    scanner_room_hud_chip: "Scanner Room HUD Chip",
    scanner_room_range_upgrade: "Scanner Room Range Upgrade",
    scanner_room_speed_upgrade: "Scanner Room Speed Upgrade",
    sea_crown_seed: "Sea Crown Seed",
    seaglide: "Seaglide",
    seamoth: "Seamoth",
    seamoth_depth_module_mk1: "Seamoth Depth Module MK1",
    seamoth_depth_module_mk2: "Seamoth Depth Module MK2",
    seamoth_depth_module_mk3: "Seamoth Depth Module MK3",
    seamoth_perimeter_defense_system: "Seamoth Perimeter Defense System",
    seamoth_solar_charger: "Seamoth Solar Charger",
    seamoth_sonar: "Seamoth Sonar",
    sign: "Sign",
    silicone_rubber: "Silicone Rubber",
    silver_ore: "Silver Ore",
    single_bed: "Single Bed",
    single_wall_shelf: "Single Wall Shelf",
    solar_panel: "Solar Panel",
    spotlight: "Spotlight",
    stalker_tooth: "Stalker Tooth",
    standard_o2_tank: "Standard O2 Tank",
    stasis_rifle: "Stasis Rifle",
    stillsuit: "Stillsuit",
    storage_module: "Storage Module",
    survival_knife: "Survival Knife",
    swim_charge_fins: "Swim Charge Fins",
    synthetic_fibers: "Synthetic Fibers",
    t_compartment: "T Compartment",
    table_coral_sample: "Table Coral Sample",
    thermal_plant: "Thermal Plant",
    thermoblade: "Thermoblade",
    titanium: "Titanium",
    titanium_ingot: "Titanium Ingot",
    torpedo_system: "Torpedo System",
    trash_can: "Trash Can",
    ultra_glide_fins: "Ultra Glide Fins",
    ultra_high_capacity_tank: "Ultra High Capacity Tank",
    uraninite_crystal: "Uraninite Crystal",
    vehicle_upgrade_console: "Vehicle Upgrade Console",
    vending_machine: "Vending Machine",
    vertical_connector: "Vertical Connector",
    vortex_torpedo: "Vortex Torpedo",
    wall_locker: "Wall Locker",
    wall_planter: "Wall Planter",
    wall_shelves: "Wall Shelves",
    water: "Water",
    water_filtration_machine: "Water Filtration Machine",
    waterproof_locker: "Waterproof Locker",
    window: "Window",
    wiring_kit: "Wiring Kit",
    x_compartment: "X Compartment"
  };

for (var prop in materialNames) {
  if (materialNames.hasOwnProperty(prop)) {
    material_data[materialNames[prop]] = {
      name: materialNames[prop]
    };
  }
}

material_data[materialNames.advanced_wiring_kit].materials = [{
  item: material_data[materialNames.wiring_kit],
  qty: 1
}, {
  item: material_data[materialNames.gold],
  qty: 2
}, {
  item: material_data[materialNames.computer_chip],
  qty: 1
}];

material_data[materialNames.aerogel].materials = [{
  item: material_data[materialNames.gel_sack],
  qty: 1
}, {
  item: material_data[materialNames.ruby],
  qty: 1
}];

material_data[materialNames.air_bladder].materials = [{
  item: material_data[materialNames.silicone_rubber],
  qty: 1
}, {
  item: material_data[materialNames.bladderfish],
  qty: 1
}];

material_data[materialNames.alien_containment].materials = [{
  item: material_data[materialNames.glass],
  qty: 5
}, {
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.an_unusual_doll].materials = [{
  item: material_data[materialNames.glass],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.aquarium].materials = [{
  item: material_data[materialNames.glass],
  qty: 2
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.bar_table].materials = [{
  item: material_data[materialNames.glass],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.base_pipe_connector].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.basic_compartment].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.basic_double_bed].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}, {
  item: material_data[materialNames.fiber_mesh],
  qty: 1
}];

material_data[materialNames.battery].materials = [{
  item: material_data[materialNames.acid_mushroom],
  qty: 2
}, {
  item: material_data[materialNames.copper_ore],
  qty: 1
}];

material_data[materialNames.battery_charger].materials = [{
  item: material_data[materialNames.wiring_kit],
  qty: 1
}, {
  item: material_data[materialNames.copper_wire],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.beacon].materials = [{
  item: material_data[materialNames.copper_ore],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.bench].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.benzene].materials = [{
  item: material_data[materialNames.blood_oil],
  qty: 3
}];

material_data[materialNames.bioreactor].materials = [{
  item: material_data[materialNames.titanium],
  qty: 3
}, {
  item: material_data[materialNames.wiring_kit],
  qty: 1
}, {
  item: material_data[materialNames.lubricant],
  qty: 1
}];

material_data[materialNames.bleach].materials = [{
  item: material_data[materialNames.salt_deposit],
  qty: 1
}, {
  item: material_data[materialNames.coral_tube_sample],
  qty: 1
}];

material_data[materialNames.blue_tablet].materials = [{
  item: material_data[materialNames.ion_crystal],
  qty: 1
}, {
  item: material_data[materialNames.kyanite],
  qty: 2
}];

material_data[materialNames.bulkhead].materials = [{
  item: material_data[materialNames.titanium],
  qty: 3
}, {
  item: material_data[materialNames.silicone_rubber],
  qty: 1
}];

material_data[materialNames.camera_drone].materials = [{
  item: material_data[materialNames.computer_chip],
  qty: 1
}, {
  item: material_data[materialNames.battery],
  qty: 1
}, {
  item: material_data[materialNames.glass],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.chair].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.chair_2].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.chair_3].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.coffee_vending_machine].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.compass].materials = [{
  item: material_data[materialNames.copper_wire],
  qty: 1
}, {
  item: material_data[materialNames.wiring_kit],
  qty: 1
}];

material_data[materialNames.computer_chip].materials = [{
  item: material_data[materialNames.table_coral_sample],
  qty: 2
}, {
  item: material_data[materialNames.gold],
  qty: 1
}, {
  item: material_data[materialNames.copper_wire],
  qty: 1
}];

material_data[materialNames.copper_wire].materials = [{
  item: material_data[materialNames.copper_ore],
  qty: 2
}];

material_data[materialNames.creature_decoy].materials = [{
  item: material_data[materialNames.titanium],
  qty: 3
}, {
  item: material_data[materialNames.wiring_kit],
  qty: 1
}];

material_data[materialNames.creature_decoy].resultcount = 3;

material_data[materialNames.cyclops].materials = [{
  item: material_data[materialNames.plasteel_ingot],
  qty: 3
}, {
  item: material_data[materialNames.enameled_glass],
  qty: 3
}, {
  item: material_data[materialNames.lubricant],
  qty: 1
}, {
  item: material_data[materialNames.advanced_wiring_kit],
  qty: 1
}, {
  item: material_data[materialNames.lead],
  qty: 3
}];

material_data[materialNames.cyclops_decoy_tube_upgrade].materials = [{
  item: material_data[materialNames.titanium],
  qty: 3
}, {
  item: material_data[materialNames.lithium],
  qty: 2
}, {
  item: material_data[materialNames.aerogel],
  qty: 1
}];

material_data[materialNames.cyclops_depth_module_mk1].materials = [{
  item: material_data[materialNames.plasteel_ingot],
  qty: 1
}, {
  item: material_data[materialNames.ruby],
  qty: 3
}];

material_data[materialNames.cyclops_depth_module_mk2].materials = [{
  item: material_data[materialNames.cyclops_pressure_compensator],
  qty: 1
}, {
  item: material_data[materialNames.plasteel_ingot],
  qty: 1
}, {
  item: material_data[materialNames.nickel_ore],
  qty: 3
}];

material_data[materialNames.cyclops_depth_module_mk3].materials = [{
  item: material_data[materialNames.cyclops_depth_module_mk2],
  qty: 1
}, {
  item: material_data[materialNames.plasteel_ingot],
  qty: 1
}, {
  item: material_data[materialNames.kyanite],
  qty: 3
}];

material_data[materialNames.cyclops_docking_bay_repair_module].materials = [{
  item: material_data[materialNames.repair_tool],
  qty: 1
}, {
  item: material_data[materialNames.copper_wire],
  qty: 1
}, {
  item: material_data[materialNames.diamond],
  qty: 1
}];

material_data[materialNames.cyclops_engine_efficiency_module].materials = [{
  item: material_data[materialNames.computer_chip],
  qty: 1
}, {
  item: material_data[materialNames.polyaniline],
  qty: 1
}, {
  item: material_data[materialNames.magnetite],
  qty: 2
}];

material_data[materialNames.cyclops_fire_suppression_system].materials = [{
  item: material_data[materialNames.advanced_wiring_kit],
  qty: 1
}, {
  item: material_data[materialNames.aerogel],
  qty: 2
}, {
  item: material_data[materialNames.crystalline_sulfur],
  qty: 2
}];

material_data[materialNames.cyclops_shield_generator].materials = [{
  item: material_data[materialNames.advanced_wiring_kit],
  qty: 1
}, {
  item: material_data[materialNames.polyaniline],
  qty: 1
}, {
  item: material_data[materialNames.power_cell],
  qty: 1
}];

material_data[materialNames.cyclops_sonar_upgrade].materials = [{
  item: material_data[materialNames.polyaniline],
  qty: 2
}, {
  item: material_data[materialNames.magnetite],
  qty: 3
}];

material_data[materialNames.cyclops_thermal_reactor_module].materials = [{
  item: material_data[materialNames.plasteel_ingot],
  qty: 1
}, {
  item: material_data[materialNames.polyaniline],
  qty: 2
}, {
  item: material_data[materialNames.kyanite],
  qty: 3
}];

material_data[materialNames.desk].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.disinfected_water].materials = [{
  item: material_data[materialNames.bleach],
  qty: 1
}];

material_data[materialNames.disinfected_water].resultcount = 2;

material_data[materialNames.enameled_glass].materials = [{
  item: material_data[materialNames.stalker_tooth],
  qty: 1
}, {
  item: material_data[materialNames.glass],
  qty: 1
}];

material_data[materialNames.engine_efficiency_module].materials = [{
  item: material_data[materialNames.computer_chip],
  qty: 1
}, {
  item: material_data[materialNames.polyaniline],
  qty: 1
}];

material_data[materialNames.exterior_growbed].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.fabricator].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}, {
  item: material_data[materialNames.gold],
  qty: 1
}, {
  item: material_data[materialNames.table_coral_sample],
  qty: 1
}];

material_data[materialNames.fiber_mesh].materials = [{
  item: material_data[materialNames.creepvine_sample],
  qty: 2
}];

material_data[materialNames.filtered_water].materials = [{
  item: material_data[materialNames.bladderfish],
  qty: 1
}];

material_data[materialNames.fins].materials = [{
  item: material_data[materialNames.silicone_rubber],
  qty: 2
}];

material_data[materialNames.fire_extinguisher].materials = [{
  item: material_data[materialNames.titanium],
  qty: 3
}];

material_data[materialNames.first_aid_kit].materials = [{
  item: material_data[materialNames.fiber_mesh],
  qty: 1
}];

material_data[materialNames.flare].materials = [{
  item: material_data[materialNames.cave_sulfur],
  qty: 1
}];

material_data[materialNames.flare].resultcount = 5;

material_data[materialNames.flashlight].materials = [{
  item: material_data[materialNames.battery],
  qty: 1
}, {
  item: material_data[materialNames.glass],
  qty: 1
}];

material_data[materialNames.floodlight].materials = [{
  item: material_data[materialNames.glass],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.foundation].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}, {
  item: material_data[materialNames.lead],
  qty: 2
}];

material_data[materialNames.gas_torpedo].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}, {
  item: material_data[materialNames.gas_pod],
  qty: 1
}];

material_data[materialNames.gas_torpedo].resultcount = 2;

material_data[materialNames.glass].materials = [{
  item: material_data[materialNames.quartz],
  qty: 2
}];

material_data[materialNames.glass_compartment].materials = [{
  item: material_data[materialNames.glass],
  qty: 2
}];

material_data[materialNames.grav_trap].materials = [{
  item: material_data[materialNames.battery],
  qty: 1
}, {
  item: material_data[materialNames.copper_ore],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.habitat_builder].materials = [{
  item: material_data[materialNames.wiring_kit],
  qty: 1
}, {
  item: material_data[materialNames.computer_chip],
  qty: 1
}, {
  item: material_data[materialNames.battery],
  qty: 1
}];

material_data[materialNames.hatch].materials = [{
  item: material_data[materialNames.quartz],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.hatching_enzymes].materials = [{
  item: material_data[materialNames.eyes_plant_seed],
  qty: 1
}, {
  item: material_data[materialNames.fungal_sample],
  qty: 1
}, {
  item: material_data[materialNames.ghost_weed_seed],
  qty: 1
}, {
  item: material_data[materialNames.sea_crown_seed],
  qty: 1
}, {
  item: material_data[materialNames.bulb_bush_sample],
  qty: 1
}];

material_data[materialNames.high_capacity_o2_tank].materials = [{
  item: material_data[materialNames.standard_o2_tank],
  qty: 1
}, {
  item: material_data[materialNames.glass],
  qty: 2
}, {
  item: material_data[materialNames.titanium],
  qty: 4
}, {
  item: material_data[materialNames.silver_ore],
  qty: 1
}];

material_data[materialNames.hull_reinforcement].materials = [{
  item: material_data[materialNames.titanium],
  qty: 3
}, {
  item: material_data[materialNames.lithium],
  qty: 1
}, {
  item: material_data[materialNames.diamond],
  qty: 4
}];

material_data[materialNames.hydrochloric_acid].materials = [{
  item: material_data[materialNames.deep_shroom],
  qty: 3
}, {
  item: material_data[materialNames.salt_deposit],
  qty: 1
}];

material_data[materialNames.indoor_growbed].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.ion_battery].materials = [{
  item: material_data[materialNames.ion_crystal],
  qty: 1
}, {
  item: material_data[materialNames.gold],
  qty: 1
}, {
  item: material_data[materialNames.silver_ore],
  qty: 1
}];

material_data[materialNames.ion_power_cell].materials = [{
  item: material_data[materialNames.ion_battery],
  qty: 2
}, {
  item: material_data[materialNames.silicone_rubber],
  qty: 1
}];

material_data[materialNames.l_compartment].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.l_glass_compartment].materials = [{
  item: material_data[materialNames.glass],
  qty: 2
}];

material_data[materialNames.lab_counter].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.lab_trash_can].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.ladder].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.large_filtered_water].materials = [{
  item: material_data[materialNames.water],
  qty: 1
}];

material_data[materialNames.laser_cutter].materials = [{
  item: material_data[materialNames.diamond],
  qty: 2
}, {
  item: material_data[materialNames.battery],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}, {
  item: material_data[materialNames.cave_sulfur],
  qty: 1
}];

material_data[materialNames.light_stick].materials = [{
  item: material_data[materialNames.battery],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}, {
  item: material_data[materialNames.glass],
  qty: 1
}];

material_data[materialNames.lightweight_high_capacity_tank].materials = [{
  item: material_data[materialNames.high_capacity_o2_tank],
  qty: 1
}, {
  item: material_data[materialNames.plasteel_ingot],
  qty: 1
}];

material_data[materialNames.locker].materials = [{
  item: material_data[materialNames.quartz],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.lubricant].materials = [{
  item: material_data[materialNames.creepvine_seed_cluster],
  qty: 1
}];

material_data[materialNames.medical_kit_fabricator].materials = [{
  item: material_data[materialNames.computer_chip],
  qty: 1
}, {
  item: material_data[materialNames.fiber_mesh],
  qty: 1
}, {
  item: material_data[materialNames.silver_ore],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.mobile_vehicle_bay].materials = [{
  item: material_data[materialNames.titanium_ingot],
  qty: 1
}, {
  item: material_data[materialNames.lubricant],
  qty: 1
}, {
  item: material_data[materialNames.power_cell],
  qty: 1
}];

material_data[materialNames.modification_station].materials = [{
  item: material_data[materialNames.computer_chip],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}, {
  item: material_data[materialNames.diamond],
  qty: 1
}, {
  item: material_data[materialNames.lead],
  qty: 1
}];

material_data[materialNames.moonpool].materials = [{
  item: material_data[materialNames.titanium_ingot],
  qty: 2
}, {
  item: material_data[materialNames.lubricant],
  qty: 1
}, {
  item: material_data[materialNames.lead],
  qty: 2
}];

material_data[materialNames.multipurpose_room].materials = [{
  item: material_data[materialNames.titanium],
  qty: 6
}];

material_data[materialNames.neptune_launch_platform].materials = [{
  item: material_data[materialNames.lead],
  qty: 2
}, {
  item: material_data[materialNames.titanium_ingot],
  qty: 2
}, {
  item: material_data[materialNames.computer_chip],
  qty: 1
}, {
  item: material_data[materialNames.power_cell],
  qty: 1
}];

material_data[materialNames.nuclear_reactor].materials = [{
  item: material_data[materialNames.plasteel_ingot],
  qty: 1
}, {
  item: material_data[materialNames.advanced_wiring_kit],
  qty: 1
}, {
  item: material_data[materialNames.benzene],
  qty: 1
}];

material_data[materialNames.observatory].materials = [{
  item: material_data[materialNames.enameled_glass],
  qty: 2
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.orange_tablet].materials = [{
  item: material_data[materialNames.ion_crystal],
  qty: 1
}, {
  item: material_data[materialNames.diamond],
  qty: 2
}];

material_data[materialNames.pathfinder_tool].materials = [{
  item: material_data[materialNames.creepvine_sample],
  qty: 5
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.picture_frame].materials = [{
  item: material_data[materialNames.copper_wire],
  qty: 1
}];

material_data[materialNames.pipe].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.pipe].resultcount = 5;

material_data[materialNames.pipe_surface_floater].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.plant_pot].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.plant_pot_2].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.plant_pot_3].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.plant_shelf].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.plasteel_ingot].materials = [{
  item: material_data[materialNames.titanium_ingot],
  qty: 1
}, {
  item: material_data[materialNames.lithium],
  qty: 2
}];

material_data[materialNames.polyaniline].materials = [{
  item: material_data[materialNames.gold],
  qty: 1
}, {
  item: material_data[materialNames.hydrochloric_acid],
  qty: 1
}];

material_data[materialNames.power_cell].materials = [{
  item: material_data[materialNames.battery],
  qty: 2
}, {
  item: material_data[materialNames.silicone_rubber],
  qty: 1
}];

material_data[materialNames.power_cell_charger].materials = [{
  item: material_data[materialNames.advanced_wiring_kit],
  qty: 1
}, {
  item: material_data[materialNames.ruby],
  qty: 2
}, {
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.power_transmitter].materials = [{
  item: material_data[materialNames.gold],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.prawn_suit].materials = [{
  item: material_data[materialNames.plasteel_ingot],
  qty: 2
}, {
  item: material_data[materialNames.aerogel],
  qty: 2
}, {
  item: material_data[materialNames.enameled_glass],
  qty: 1
}, {
  item: material_data[materialNames.diamond],
  qty: 2
}, {
  item: material_data[materialNames.lead],
  qty: 2
}];

material_data[materialNames.prawn_suit_depth_module_mk1].materials = [{
  item: material_data[materialNames.plasteel_ingot],
  qty: 1
}, {
  item: material_data[materialNames.nickel_ore],
  qty: 3
}, {
  item: material_data[materialNames.aerogel],
  qty: 1
}];

material_data[materialNames.prawn_suit_depth_module_mk2].materials = [{
  item: material_data[materialNames.prawn_suit_pressure_compensator_mark_1],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 5
}, {
  item: material_data[materialNames.lithium],
  qty: 2
}, {
  item: material_data[materialNames.kyanite],
  qty: 3
}];

material_data[materialNames.prawn_suit_drill_arm].materials = [{
  item: material_data[materialNames.titanium],
  qty: 5
}, {
  item: material_data[materialNames.lithium],
  qty: 1
}, {
  item: material_data[materialNames.diamond],
  qty: 4
}];

material_data[materialNames.prawn_suit_grappling_arm].materials = [{
  item: material_data[materialNames.advanced_wiring_kit],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 5
}, {
  item: material_data[materialNames.lithium],
  qty: 1
}, {
  item: material_data[materialNames.benzene],
  qty: 1
}];

material_data[materialNames.prawn_suit_jump_jet_upgrade].materials = [{
  item: material_data[materialNames.nickel_ore],
  qty: 2
}, {
  item: material_data[materialNames.crystalline_sulfur],
  qty: 3
}, {
  item: material_data[materialNames.titanium],
  qty: 5
}, {
  item: material_data[materialNames.lithium],
  qty: 1
}];

material_data[materialNames.prawn_suit_propulsion_cannon].materials = [{
  item: material_data[materialNames.computer_chip],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 5
}, {
  item: material_data[materialNames.lithium],
  qty: 1
}, {
  item: material_data[materialNames.magnetite],
  qty: 2
}];

material_data[materialNames.prawn_suit_thermal_reactor].materials = [{
  item: material_data[materialNames.kyanite],
  qty: 2
}, {
  item: material_data[materialNames.polyaniline],
  qty: 2
}, {
  item: material_data[materialNames.wiring_kit],
  qty: 1
}];

material_data[materialNames.prawn_suit_torpedo_arm].materials = [{
  item: material_data[materialNames.titanium],
  qty: 5
}, {
  item: material_data[materialNames.lithium],
  qty: 1
}, {
  item: material_data[materialNames.aerogel],
  qty: 1
}];

material_data[materialNames.propulsion_cannon].materials = [{
  item: material_data[materialNames.wiring_kit],
  qty: 1
}, {
  item: material_data[materialNames.battery],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.purple_tablet].materials = [{
  item: material_data[materialNames.ion_crystal],
  qty: 1
}, {
  item: material_data[materialNames.diamond],
  qty: 2
}];

material_data[materialNames.quilted_double_bed].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}, {
  item: material_data[materialNames.fiber_mesh],
  qty: 1
}];

material_data[materialNames.radiation_suit].materials = [{
  item: material_data[materialNames.fiber_mesh],
  qty: 2
}, {
  item: material_data[materialNames.lead],
  qty: 2
}];

material_data[materialNames.radio].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}, {
  item: material_data[materialNames.copper_ore],
  qty: 1
}];

material_data[materialNames.reactor_rod].materials = [{
  item: material_data[materialNames.uraninite_crystal],
  qty: 3
}, {
  item: material_data[materialNames.lead],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}, {
  item: material_data[materialNames.glass],
  qty: 1
}];

material_data[materialNames.rebreather].materials = [{
  item: material_data[materialNames.wiring_kit],
  qty: 1
}, {
  item: material_data[materialNames.fiber_mesh],
  qty: 1
}];

material_data[materialNames.reinforced_dive_suit].materials = [{
  item: material_data[materialNames.synthetic_fibers],
  qty: 2
}];

material_data[materialNames.reinforcement].materials = [{
  item: material_data[materialNames.lithium],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 3
}];

material_data[materialNames.repair_tool].materials = [{
  item: material_data[materialNames.silicone_rubber],
  qty: 1
}, {
  item: material_data[materialNames.cave_sulfur],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.repulsion_cannon].materials = [{
  item: material_data[materialNames.propulsion_cannon],
  qty: 1
}, {
  item: material_data[materialNames.computer_chip],
  qty: 1
}, {
  item: material_data[materialNames.magnetite],
  qty: 2
}];

material_data[materialNames.scanner].materials = [{
  item: material_data[materialNames.battery],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.scanner_room].materials = [{
  item: material_data[materialNames.titanium],
  qty: 5
}, {
  item: material_data[materialNames.copper_ore],
  qty: 2
}, {
  item: material_data[materialNames.gold],
  qty: 1
}, {
  item: material_data[materialNames.table_coral_sample],
  qty: 1
}];

material_data[materialNames.scanner_room_hud_chip].materials = [{
  item: material_data[materialNames.gold],
  qty: 1
}, {
  item: material_data[materialNames.computer_chip],
  qty: 1
}];

material_data[materialNames.scanner_room_range_upgrade].materials = [{
  item: material_data[materialNames.quartz],
  qty: 1
}, {
  item: material_data[materialNames.computer_chip],
  qty: 1
}];

material_data[materialNames.scanner_room_speed_upgrade].materials = [{
  item: material_data[materialNames.quartz],
  qty: 1
}, {
  item: material_data[materialNames.computer_chip],
  qty: 1
}];

material_data[materialNames.seaglide].materials = [{
  item: material_data[materialNames.battery],
  qty: 1
}, {
  item: material_data[materialNames.lubricant],
  qty: 1
}, {
  item: material_data[materialNames.copper_wire],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.seamoth].materials = [{
  item: material_data[materialNames.titanium_ingot],
  qty: 1
}, {
  item: material_data[materialNames.power_cell],
  qty: 1
}, {
  item: material_data[materialNames.glass],
  qty: 2
}, {
  item: material_data[materialNames.lubricant],
  qty: 1
}, {
  item: material_data[materialNames.lead],
  qty: 1
}];

material_data[materialNames.seamoth_depth_module_mk1].materials = [{
  item: material_data[materialNames.titanium_ingot],
  qty: 1
}, {
  item: material_data[materialNames.computer_chip],
  qty: 1
}];

material_data[materialNames.seamoth_depth_module_mk2].materials = [{
  item: material_data[materialNames.seamoth_depth_module_mk1],
  qty: 1
}, {
  item: material_data[materialNames.plasteel_ingot],
  qty: 1
}, {
  item: material_data[materialNames.magnetite],
  qty: 2
}, {
  item: material_data[materialNames.enameled_glass],
  qty: 1
}];

material_data[materialNames.seamoth_depth_module_mk3].materials = [{
  item: material_data[materialNames.seamoth_depth_module_mk2],
  qty: 1
}, {
  item: material_data[materialNames.plasteel_ingot],
  qty: 1
}, {
  item: material_data[materialNames.ruby],
  qty: 3
}];

material_data[materialNames.seamoth_perimeter_defense_system].materials = [{
  item: material_data[materialNames.polyaniline],
  qty: 1
}];

material_data[materialNames.seamoth_solar_charger].materials = [{
  item: material_data[materialNames.enameled_glass],
  qty: 1
}, {
  item: material_data[materialNames.copper_wire],
  qty: 1
}, {
  item: material_data[materialNames.computer_chip],
  qty: 1
}];

material_data[materialNames.seamoth_sonar].materials = [{
  item: material_data[materialNames.polyaniline],
  qty: 1
}, {
  item: material_data[materialNames.magnetite],
  qty: 2
}];

material_data[materialNames.sign].materials = [{
  item: material_data[materialNames.copper_wire],
  qty: 1
}];

material_data[materialNames.silicone_rubber].materials = [{
  item: material_data[materialNames.creepvine_seed_cluster],
  qty: 1
}];

material_data[materialNames.silicone_rubber].resultcount = 2;

material_data[materialNames.single_bed].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}, {
  item: material_data[materialNames.fiber_mesh],
  qty: 1
}];

material_data[materialNames.single_wall_shelf].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.solar_panel].materials = [{
  item: material_data[materialNames.quartz],
  qty: 2
}, {
  item: material_data[materialNames.titanium],
  qty: 2
}, {
  item: material_data[materialNames.copper_ore],
  qty: 1
}];

material_data[materialNames.spotlight].materials = [{
  item: material_data[materialNames.glass],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.standard_o2_tank].materials = [{
  item: material_data[materialNames.titanium],
  qty: 3
}];

material_data[materialNames.stasis_rifle].materials = [{
  item: material_data[materialNames.computer_chip],
  qty: 1
}, {
  item: material_data[materialNames.battery],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}, {
  item: material_data[materialNames.magnetite],
  qty: 1
}];

material_data[materialNames.stillsuit].materials = [{
  item: material_data[materialNames.synthetic_fibers],
  qty: 1
}, {
  item: material_data[materialNames.aerogel],
  qty: 1
}, {
  item: material_data[materialNames.copper_wire],
  qty: 1
}];

material_data[materialNames.storage_module].materials = [{
  item: material_data[materialNames.titanium],
  qty: 3
}, {
  item: material_data[materialNames.lithium],
  qty: 1
}];

material_data[materialNames.survival_knife].materials = [{
  item: material_data[materialNames.silicone_rubber],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.swim_charge_fins].materials = [{
  item: material_data[materialNames.fins],
  qty: 1
}, {
  item: material_data[materialNames.polyaniline],
  qty: 1
}, {
  item: material_data[materialNames.wiring_kit],
  qty: 1
}];

material_data[materialNames.synthetic_fibers].materials = [{
  item: material_data[materialNames.benzene],
  qty: 1
}, {
  item: material_data[materialNames.fiber_mesh],
  qty: 1
}];

material_data[materialNames.t_compartment].materials = [{
  item: material_data[materialNames.titanium],
  qty: 3
}];

material_data[materialNames.thermal_plant].materials = [{
  item: material_data[materialNames.titanium],
  qty: 5
}, {
  item: material_data[materialNames.magnetite],
  qty: 2
}, {
  item: material_data[materialNames.aerogel],
  qty: 1
}];

material_data[materialNames.thermoblade].materials = [{
  item: material_data[materialNames.survival_knife],
  qty: 1
}, {
  item: material_data[materialNames.battery],
  qty: 1
}];

material_data[materialNames.titanium].materials = [{
  item: material_data[materialNames.metal_salvage],
  qty: 1
}];

material_data[materialNames.titanium].resultcount = 4;

material_data[materialNames.titanium_ingot].materials = [{
  item: material_data[materialNames.titanium],
  qty: 10
}];

material_data[materialNames.torpedo_system].materials = [{
  item: material_data[materialNames.magnetite],
  qty: 1
}, {
  item: material_data[materialNames.computer_chip],
  qty: 1
}];

material_data[materialNames.trash_can].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.ultra_glide_fins].materials = [{
  item: material_data[materialNames.fins],
  qty: 1
}, {
  item: material_data[materialNames.silicone_rubber],
  qty: 2
}, {
  item: material_data[materialNames.titanium],
  qty: 1
}, {
  item: material_data[materialNames.lithium],
  qty: 1
}];

material_data[materialNames.ultra_high_capacity_tank].materials = [{
  item: material_data[materialNames.high_capacity_o2_tank],
  qty: 1
}, {
  item: material_data[materialNames.lithium],
  qty: 4
}];

material_data[materialNames.vehicle_upgrade_console].materials = [{
  item: material_data[materialNames.titanium],
  qty: 3
}, {
  item: material_data[materialNames.computer_chip],
  qty: 1
}, {
  item: material_data[materialNames.copper_wire],
  qty: 1
}];

material_data[materialNames.vending_machine].materials = [{
  item: material_data[materialNames.glass],
  qty: 1
}, {
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.vertical_connector].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.vortex_torpedo].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}, {
  item: material_data[materialNames.magnetite],
  qty: 1
}];

material_data[materialNames.vortex_torpedo].resultcount = 2;

material_data[materialNames.wall_locker].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.wall_planter].materials = [{
  item: material_data[materialNames.titanium],
  qty: 1
}];

material_data[materialNames.wall_shelves].materials = [{
  item: material_data[materialNames.titanium],
  qty: 2
}];

material_data[materialNames.water_filtration_machine].materials = [{
  item: material_data[materialNames.titanium],
  qty: 3
}, {
  item: material_data[materialNames.copper_wire],
  qty: 1
}, {
  item: material_data[materialNames.aerogel],
  qty: 1
}];

material_data[materialNames.waterproof_locker].materials = [{
  item: material_data[materialNames.titanium],
  qty: 4
}];

material_data[materialNames.window].materials = [{
  item: material_data[materialNames.glass],
  qty: 1
}];

material_data[materialNames.wiring_kit].materials = [{
  item: material_data[materialNames.silver_ore],
  qty: 2
}];

material_data[materialNames.x_compartment].materials = [{
  item: material_data[materialNames.titanium],
  qty: 3
}];

//Add hints
material_data[materialNames.gold].hint = 'Found in abundance on the island to the north';
material_data[materialNames.lithium].hint = 'Found in abundance on the island to the north';
material_data[materialNames.diamond].hint = 'Found on the island to the north';

$(function() {
  $('.reset-btn').on('click', function() {
    $('#composite_items tbody input').val('');
    $("#basics").empty();
  });
  //initialize input table
  for (var prop in material_data) {
    if (material_data.hasOwnProperty(prop) && material_data[prop].materials) {
      var input = $("<input type='number' class='composite_item' min='0' />"),
        cell_name = $('<td>' + material_data[prop].name + '</td>'),
        cell_input = $("<td></td>"),
        row = $('<tr></tr>');
      row.append(cell_name).append(cell_input);
      cell_input.append(input);
      input.data("item", material_data[prop]);
      var a = $("#composite_items > tbody:last-child").append(row);
    }
  }
  //apply a filter
  $('#filter').keyup(function(event) {
    var filterVal = $('#filter').val().toLowerCase();

    $("#composite_items tbody tr td:first-child").each(function(i, elem) {
      if ($(elem).text().toLowerCase().includes(filterVal)) {
        $(elem).parent().show();
      } else {
        $(elem).parent().hide();
      }
    });
  });

  function findLiByItemName(ul, itemName) {
    var item = ul.data("items")[itemName];
    if (item) {
      return item.element;
    } else {
      return findLiByItemName(ul.find('ul'), itemName);
    }
  }

  //this function searches an unordered list for an item by name. if found it reduces the qty by a given amt.
  function reduceQty(liElement, reductionQty) {
    var itemName = liElement.find('.material-name').text();
    var resultcount = material_data[itemName].resultcount;
    if (material_data[itemName].materials) {
      var childUl = liElement.parent().find('ul');
      for (var i = 0; i < material_data[itemName].materials.length; i++) {
        var childItemName = material_data[itemName].materials[i].item.name;
        var childReductionQty = material_data[itemName].materials[i].qty;
        var childLi = findLiByItemName(childUl, childItemName);
        if (!$(childLi).hasClass("user-checked")) {
          //todo - this if statement isn't entirely accurate. re-enabling doesn't fix the numbers
          var newQty = childReductionQty * reductionQty / resultcount
          newQty = reductionQty > 0 ? Math.ceil(newQty) : Math.floor(newQty);
          console.log("This is the new qty for " + childItemName, newQty);
          reduceQty(childLi, newQty);
        }
      }
    }
    var qtyElem = liElement.find('.quantity');
    var qty = parseInt(qtyElem.text(), 10);
    var newQty = qty - reductionQty;
    liElement.toggleClass('user-checked', newQty === 0);
    qtyElem.text(newQty);
    liElement.find('input').attr('disabled', newQty === 0);
  }

  $(document).on('change', 'input[type=checkbox]', function(event) {
    var checked = $(this).is(':checked');
    //cross out the checked item
    var qty = parseInt($(this).parent().find('.quantity').text());
    //if not checked, then reverse the qty (negative).  Will need to discover the orig qty
    if (!checked) {
      var itemName = $(this).parent().find('.material-name').text();
      var dataItem = $(this).parent().parent().data("items")[itemName];
      qty = dataItem.qty * -1;
    }
    reduceQty($(this).parent(), qty);
    //make sure the top level clicked item is not disabled
    $(this).attr('disabled', false);
  });


  function qtyChanged(event) {
    function multiply(multiplicand, multiplier) {
      for (var prop in multiplicand) {
        if (multiplicand.hasOwnProperty(prop)) {
          multiplicand[prop] = multiplicand[prop] * multiplier;
        }
      }
      return multiplicand;
    }

    function merge(itemA, itemB) {
      for (var prop in itemB) {
        if (itemB.hasOwnProperty(prop)) {
          //find the prop in itemA and add count. if null add with total
          if (!itemA[prop]) {
            itemA[prop] = 0;
          }
          itemA[prop] = itemA[prop] + itemB[prop];
        }
      }
      return itemA;
    }

    function materialChildrenDepth(item) {
      var result = 0;
      if (item.materials) {
        for (var i = 0; i < item.materials.length; i++) {
          var temp_result = 1 + materialChildrenDepth(item.materials[i].item);
          //console.log(item.name, temp_result);
          result = Math.max(result, temp_result);
        }
      }
      //console.log("Child depth of " + item.name + " : " + result);
      return result;
    }

    //materialChildrenDepth(material_data[materialNames.fabricator]);
    var set = [];

    function populateSet(item, quantity) {
      var treeDepth = materialChildrenDepth(item);
      set[treeDepth] = !!set[treeDepth] ? set[treeDepth] : [];
      //console.log("#",item.name, quantity)
      for (var i = 0; i < quantity; i++) {
        set[treeDepth].push(item.name);
        //if (treeDepth == 0){
        //	console.log("pushing " + item.name + ":\t", set[treeDepth].join());
        //}
      }
      if (item.materials) {
        for (var i = 0; i < item.materials.length; i++) {
          if (!item.materials[i].item) {
            throw ("Unknown item needed to create " + item.name);
          }
          var resultcount = item.resultcount || 1;
          populateSet(item.materials[i].item, Math.ceil(item.materials[i].qty * quantity / resultcount));
        }
      }
    }

    function calculateNeeded(item, quantity, depth = 0) {
      //console.log("  ".repeat(depth),depth, item.name, materialChildrenDepth(item));
      var result = {};
      if (item.materials) {
        var arrayLength = item.materials.length;
        for (var i = 0; i < arrayLength; i++) {
          if (!item.materials[i].item) {
            throw ("Unknown item needed to create " + item.name);
          }
          var needed = calculateNeeded(item.materials[i].item, item.materials[i].qty, depth + 1);
          //multiply(needed, item.materials[i].qty);
          result = merge(result, needed);
        }
      } else {
        result[item.name] = 1;
      }
      return multiply(result, quantity);
    }

    var list = $("#basics");
    shoppingList = {};
    try {
      $('input[type=number]:visible').each(function(i, elem) {
        var val = parseInt($(elem).val());
        if (val) {
          var item = $(elem).data("item");
          populateSet(item, val);
          // shoppingList = merge(
          //  shoppingList,
          //  calculateNeeded(item, val)
          //  );
        }
      });

      list.empty();
      //use the new method
      //go through the set backward so that more basic components show up later in the list
      var parent = list;
      //start at length - 2 because the last item in the array (at length - 1) is the desired end product which isn't displayed in the shopping list
      for (var i = set.length - 2; i >= 0; i--) {
        var subset = set[i];
        //group and count the items in the subset
        var summary = subset.reduce(function(accumulator, material) {
          if (!accumulator[material]) {
            accumulator[material] = {
              qty: 0
            };
          }
          accumulator[material].qty += 1;
          return accumulator;
        }, {});

        //summary has this format:
        //{"Titanium":50,"Lithium":5,"Stalker tooth":5,"Quartz":10,"Creepvine Seed Cluster":6,"Gold":2,"Silver Ore":1,"Table Coral Sample":2}

        //todo - alphabetize the object or do so after putting in lists
        var ul = $("<ul></ul>");
        ul.data("items", summary);
        parent.append(ul);
        parent = ul;

        var orderedMaterialNames = Object.keys(summary).sort();
        orderedMaterialNames.forEach(function(prop, i) {
          var element = $("<li><input type='checkbox'><span class='material-name' title='" + (material_data[prop].hint || "") + "'>" + prop + "</span>: <span class='quantity'>" + summary[prop].qty + "</span></li>");
          summary[prop].element = element;
          //element.data('xxx', summary[prop]);
          ul.append(element);
        });
      }
      //sort the list
      //  list.find("li").sort(function(a, b) {
      //  return ($(b).text()) < ($(a).text());
      //  }).appendTo(list);
    } catch (e) {
      list.append("<li>" + e + "</li>");
    }
    // console.log(set);
    // console.log(set[0].length);
  }


  $('input[type=number]').keyup(qtyChanged);
  $('input[type=number]').change(qtyChanged);
});

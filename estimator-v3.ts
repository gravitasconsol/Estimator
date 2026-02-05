/**
 * Construction Estimator Engine V3 - THE SWISS ARMY KNIFE
 * Comprehensive estimator for Philippine contractors
 * Includes: pools, basements, dirty kitchen, metal structures, and more
 */

// ============================================================================
// PHILIPPINE CONSTRUCTION PRICES - 2025 (COMPREHENSIVE)
// ============================================================================

export const PRICES = {
  // STRUCTURAL MATERIALS
  cement_40kg: 265,
  sand_cu_m: 1450,
  gravel_cu_m: 1350,
  chb_4in: 14,
  chb_6in: 22,
  chb_8in: 35,
  rebar_10mm_kg: 52,
  rebar_12mm_kg: 55,
  rebar_16mm_kg: 58,
  rebar_20mm_kg: 62,
  rebar_25mm_kg: 78,
  rebar_32mm_kg: 125,
  tie_wire_kg: 65,
  formwork_ply_sheet: 850,
  formwork_stud_lm: 45,

  // METAL STRUCTURES (NEW)
  i_beam_6in_per_kg: 78,
  i_beam_8in_per_kg: 85,
  i_beam_10in_per_kg: 95,
  i_beam_12in_per_kg: 110,
  c_channel_2x4_per_kg: 65,
  c_channel_3x6_per_kg: 72,
  angle_bar_1_1_2x1_1_2_per_kg: 58,
  angle_bar_2x2_per_kg: 62,
  angle_bar_3x3_per_kg: 68,
  angle_bar_4x4_per_kg: 75,
  flat_bar_per_kg: 55,
  round_bar_per_kg: 52,
  square_tube_2x2_per_kg: 68,
  square_tube_3x3_per_kg: 75,
  metal_decking_per_sqm: 850,
  steel_decking_per_sqm: 1250,
  welding_rod_per_kg: 185,
  cutting_disc_per_pc: 85,
  grinding_disc_per_pc: 75,

  // ROOFING
  roof_longspan_04mm: 410,
  roof_longspan_05mm: 512,
  roof_longspan_06mm: 614,
  roof_longspan_insulated_2in: 1850,
  roof_longspan_insulated_3in: 2250,
  roof_longspan_insulated_4in: 2850,
  roof_gi_corrugated: 268,
  roof_clay_tile: 28,
  roof_concrete_tile: 45,
  roof_tilespan: 550,
  roof_asphalt_shingle: 1250,
  roof_metal_shingle: 850,
  roof_spanish_tile: 1850,
  roof_slate_tile: 2850,
  gutter_metal: 450,
  gutter_pvc: 285,
  downspout: 320,
  ridge_roll: 380,
  flashing: 420,
  roof_insulation_foam: 185,
  roof_insulation_fiberglass: 225,
  roof_waterproofing_per_sqm: 285,

  // FLOORING
  tiles_20x20: 25,
  tiles_30x30: 55,
  tiles_40x40: 95,
  tiles_60x60: 185,
  tiles_60x60_premium: 350,
  granite_tiles: 2850,
  marble_tiles: 3200,
  vinyl_tiles: 145,
  wood_parquet: 850,
  engineered_wood: 1250,
  laminate_flooring: 650,
  epoxy_flooring: 1850,
  polished_concrete: 950,
  stamped_concrete: 1250,
  terrazzo_flooring: 2250,
  tile_adhesive: 485,
  tile_grout: 285,

  // PAINT
  paint_latex_basic: 520,
  paint_latex_standard: 720,
  paint_latex_premium: 1150,
  paint_enamel_standard: 750,
  paint_epoxy: 1200,
  paint_elastomeric: 1450,
  paint_primer: 650,
  paint_wood_stain: 1850,
  paint_varnish: 1250,
  paint_waterproofing: 1850,
  paint_anti_mold: 1650,
  paint_fire_retardant: 2250,

  // CEILING
  ceiling_gypsum: 285,
  ceiling_hardiflex: 245,
  ceiling_pvc: 385,
  ceiling_acoustic: 450,
  ceiling_metal_furring: 145,
  ceiling_grid_tbar: 185,
  ceiling_drop_panel: 650,

  // WALLS & PARTITIONS
  wall_gypsum_board: 385,
  wall_ficem_board: 425,
  wall_pvc_panel: 285,
  wall_glass_partition: 2850,
  wall_aluminum_partition: 1850,
  wall_cinder_block: 35,

  // DOORS
  door_panel_basic: 2850,
  door_panel_standard: 4850,
  door_panel_premium: 12500,
  door_panel_solid_wood: 18500,
  door_panel_mahogany: 28500,
  door_jamb: 1450,
  door_knob_standard: 650,
  door_knob_premium: 2850,
  door_hinges: 85,
  door_closer: 1850,
  door_panic_bar: 4850,
  door_roll_up: 12500,
  door_roll_up_motorized: 28500,
  door_fire_rated: 18500,
  door_glass_frameless: 22500,
  sliding_door_aluminum: 18500,
  sliding_door_upvc: 28500,

  // WINDOWS
  window_sliding_aluminum: 2850,
  window_sliding_upvc: 4850,
  window_casement_aluminum: 3850,
  window_casement_upvc: 5850,
  window_fixed_aluminum: 1850,
  window_jalousie: 1250,
  window_tinted_glass: 3850,
  window_tempered_glass: 5850,
  window_laminated_glass: 8500,
  window_screen: 450,
  window_bay: 18500,

  // KITCHEN
  kitchen_sink_stainless_single: 4850,
  kitchen_sink_stainless_double: 8500,
  kitchen_sink_granite: 12500,
  kitchen_faucet_standard: 2850,
  kitchen_faucet_pullout: 6850,
  kitchen_faucet_sensor: 12500,
  countertop_granite: 3850,
  countertop_quartz: 6250,
  countertop_marble: 8500,
  countertop_laminate: 1850,
  countertop_stainless: 4250,
  kitchen_cabinet_standard: 8500,
  kitchen_cabinet_premium: 18500,
  kitchen_cabinet_modular: 28500,
  range_hood_standard: 6850,
  range_hood_premium: 15850,
  range_hood_island: 28500,
  gas_stove: 12500,
  induction_cooker: 18500,
  built_in_oven: 28500,
  microwave: 8500,
  refrigerator: 18500,
  dishwasher: 22500,

  // DIRTY KITCHEN (NEW)
  dirty_kitchen_sink: 2850,
  dirty_kitchen_counter: 4500,
  dirty_kitchen_roofing: 850,
  dirty_kitchen_concrete: 3500,
  dirty_kitchen_wood: 5500,
  dirty_kitchen_stove_area: 4500,
  dirty_kitchen_lpg_tank: 1850,

  // TOILET & BATH
  water_closet_basic: 3850,
  water_closet_standard: 6850,
  water_closet_premium: 18500,
  water_closet_bidet: 28500,
  water_closet_one_piece: 22500,
  water_closet_wall_hung: 35000,
  lavatory_basic: 1850,
  lavatory_standard: 3850,
  lavatory_premium: 8500,
  lavatory_vessel: 12500,
  lavatory_undermount: 18500,
  faucet_standard: 1850,
  faucet_premium: 4850,
  faucet_sensor: 12500,
  shower_set_basic: 1850,
  shower_set_standard: 3850,
  shower_set_premium: 9500,
  shower_set_rainfall: 18500,
  shower_set_digital: 45000,
  water_heater_standard: 12500,
  water_heater_premium: 28500,
  water_heater_tankless: 18500,
  water_heater_solar: 65000,
  floor_drain: 285,
  exhaust_fan_standard: 1850,
  exhaust_fan_premium: 3850,
  bathroom_mirror_standard: 1850,
  bathroom_mirror_led: 6850,
  bathroom_cabinet: 8500,
  glass_enclosure: 18500,
  jacuzzi: 125000,
  sauna: 185000,

  // PLUMBING
  pvc_pipe_1_2: 125,
  pvc_pipe_3_4: 165,
  pvc_pipe_1: 245,
  pvc_pipe_1_1_2: 385,
  pvc_pipe_2: 485,
  pvc_pipe_3: 850,
  pvc_pipe_4: 1250,
  pipe_fittings: 125,
  gate_valve: 485,
  ball_valve: 385,
  check_valve: 585,
  water_meter: 1850,
  pressure_tank: 12500,
  water_tank_500L: 8500,
  water_tank_1000L: 12500,
  water_tank_2000L: 18500,
  water_tank_5000L: 45000,
  water_pump_1hp: 8500,
  water_pump_2hp: 12500,

  // SEPTIC SYSTEMS
  septic_tank_concrete_3chamber: 28500,
  septic_tank_fiberglass: 45000,
  septic_tank_plastic: 18500,
  septic_tank_biodigester: 65000,
  grease_trap: 12500,
  catch_basin: 8500,
  french_drain_per_lm: 450,

  // ELECTRICAL
  wire_14_2: 28,
  wire_12_2: 38,
  wire_10_2: 52,
  wire_8_2: 78,
  wire_thhn_14: 22,
  wire_thhn_12: 32,
  wire_thhn_10: 48,
  wire_thhn_8: 72,
  wire_thhn_6: 95,
  conduit_pvc_1_2: 45,
  conduit_pvc_3_4: 65,
  conduit_pvc_1: 95,
  conduit_flexible: 85,
  outlet_double: 95,
  outlet_ground_fault: 285,
  outlet_usb: 485,
  switch_single: 55,
  switch_three_way: 125,
  switch_dimmer: 485,
  led_bulb_9w: 125,
  led_bulb_12w: 185,
  led_bulb_15w: 285,
  led_downlight_6w: 285,
  led_downlight_9w: 385,
  led_downlight_12w: 485,
  led_panel_24w: 685,
  led_panel_36w: 850,
  led_strip_per_meter: 185,
  led_floodlight_50w: 1250,
  led_floodlight_100w: 2250,
  led_floodlight_200w: 3850,
  emergency_light: 1850,
  exit_sign: 1250,
  panel_board_4branch: 4500,
  panel_board_8branch: 8500,
  panel_board_12branch: 12500,
  panel_board_24branch: 22500,
  breaker_20A: 285,
  breaker_30A: 385,
  breaker_40A: 485,
  breaker_60A: 685,
  breaker_main_100A: 2850,
  breaker_main_200A: 4850,
  electric_meter: 1850,
  avr_1000va: 2850,
  avr_2000va: 4850,
  avr_5000va: 8500,
  generator_5kva: 125000,
  generator_10kva: 225000,

  // AIRCON & VENTILATION
  aircon_window_1hp: 18500,
  aircon_window_1_5hp: 28500,
  aircon_window_2hp: 38500,
  aircon_split_1hp: 28500,
  aircon_split_1_5hp: 38500,
  aircon_split_2hp: 48500,
  aircon_split_2_5hp: 58500,
  aircon_split_3hp: 75000,
  aircon_cassette_2hp: 65000,
  aircon_cassette_3hp: 85000,
  aircon_cassette_5hp: 125000,
  aircon_floor_standing_5hp: 95000,
  aircon_floor_standing_10hp: 185000,
  aircon_vrf_per_hp: 45000,
  exhaust_fan_wall: 1850,
  exhaust_fan_ceiling: 2850,
  exhaust_fan_industrial: 8500,
  ventilation_fan: 4500,

  // POOL (NEW)
  pool_concrete_per_sqm: 12500,
  pool_fiberglass_per_sqm: 18500,
  pool_tiles_per_sqm: 2850,
  pool_pump: 28500,
  pool_filter: 22500,
  pool_chlorinator: 18500,
  pool_heater: 65000,
  pool_light: 8500,
  pool_ladder: 12500,
  pool_cover: 18500,
  pool_fountain: 45000,
  pool_waterfall: 65000,
  jacuzzi_jets: 8500,

  // BASEMENT/UNDERGROUND (NEW)
  basement_excavation_per_cu_m: 850,
  basement_waterproofing_per_sqm: 1850,
  basement_retaining_wall_per_sqm: 4500,
  basement_sump_pump: 18500,
  basement_dehumidifier: 28500,
  basement_egress_window: 45000,
  basement_stairs: 35000,
  basement_elevator: 450000,

  // MISCELLANEOUS
  nails_kg: 85,
  screws_kg: 125,
  anchors_kg: 185,
  bolts_nuts_kg: 225,
  scaffolding_rental: 85,
  temporary_facilities: 150,
  site_cleanup: 45,
  security_guard_per_day: 650,
  dumpster_rental: 4500,
  portable_toilet_rental: 1850,

  // LANDSCAPING & EXTERIOR
  concrete_paver: 450,
  grass_sod_per_sqm: 185,
  garden_soil_per_bag: 285,
  pebbles_per_sack: 450,
  outdoor_light: 1850,
  landscape_lighting: 2850,
  gate_metal_simple: 18500,
  gate_metal_orante: 45000,
  gate_automatic_motor: 45000,
  intercom_system: 18500,
  fence_hog_wire_per_lm: 450,
  fence_concrete_per_lm: 1250,
  fence_metal_per_lm: 850,
  fence_brick_per_lm: 1850,
  fence_glass_per_lm: 4500,
  perimeter_wall_per_lm: 2250,
  driveway_concrete_per_sqm: 1850,
  driveway_pavers_per_sqm: 2250,
  walkway_concrete_per_sqm: 1250,
  retaining_wall_per_sqm: 3500,
  gutter_guard: 450,
  downspout_screen: 285,
  rain_barrel: 2850,
  garden_fountain: 35000,
  gazebo: 85000,
  pergola: 65000,
  deck_wood_per_sqm: 4500,
  deck_composite_per_sqm: 6500,
};

// ============================================================================
// QUALITY TIER MULTIPLIERS
// ============================================================================

export const QUALITY_MULTIPLIERS = {
  Basic: {
    structural: 1.0,
    finishes: 0.7,
    fixtures: 0.6,
    electrical: 0.7,
    plumbing: 0.7,
    windows: 0.8,
    doors: 0.7,
    metalwork: 0.9,
  },
  Standard: {
    structural: 1.0,
    finishes: 1.0,
    fixtures: 1.0,
    electrical: 1.0,
    plumbing: 1.0,
    windows: 1.0,
    doors: 1.0,
    metalwork: 1.0,
  },
  "Above Standard": {
    structural: 1.1,
    finishes: 1.4,
    fixtures: 1.6,
    electrical: 1.3,
    plumbing: 1.4,
    windows: 1.3,
    doors: 1.4,
    metalwork: 1.2,
  },
  Premium: {
    structural: 1.2,
    finishes: 2.2,
    fixtures: 3.0,
    electrical: 1.8,
    plumbing: 2.2,
    windows: 2.0,
    doors: 2.5,
    metalwork: 1.5,
  },
  Luxury: {
    structural: 1.3,
    finishes: 3.5,
    fixtures: 5.0,
    electrical: 2.5,
    plumbing: 3.5,
    windows: 3.0,
    doors: 4.0,
    metalwork: 2.0,
  },
};

// ============================================================================
// BUILDING TYPES
// ============================================================================

export type BuildingType =
  | "bungalow"
  | "two_story"
  | "three_story"
  | "four_story"
  | "five_story"
  | "townhouse"
  | "duplex"
  | "apartment"
  | "office_small"
  | "office_medium"
  | "office_large"
  | "warehouse"
  | "retail_store"
  | "restaurant"
  | "clinic"
  | "school_room"
  | "fence_concrete"
  | "fence_metal"
  | "gate"
  | "carport"
  | "pool_only"
  | "basement_only"
  | "renovation_minor"
  | "renovation_major";

export type QualityTier = "Basic" | "Standard" | "Above Standard" | "Premium" | "Luxury";
export type SepticType = "concrete_3chamber" | "fiberglass" | "plastic" | "biodigester" | "none";
export type RoofType = "longspan" | "longspan_insulated" | "tile" | "asphalt_shingle" | "metal_shingle" | "spanish_tile" | "slate";
export type UserType = "contractor" | "homeowner" | "architect" | "engineer" | "developer" | "other";

// ============================================================================
// ESTIMATE INPUT INTERFACE
// ============================================================================

export interface EstimateInput {
  // Project Info
  projectName: string;
  buildingType: BuildingType;
  qualityTier: QualityTier;
  userType: UserType;

  // Dimensions - PER FLOOR
  floorArea: number;
  numFloors: number;
  ceilingHeight: number;
  lotArea?: number;

  // Rooms
  numBedrooms: number;
  numBathrooms: number;
  numKitchens: number;
  numLivingRooms: number;
  numDiningRooms: number;
  numOffices: number;
  numStorageRooms: number;

  // Windows & Doors
  numWindows: number;
  windowType: "aluminum" | "upvc" | "jalousie" | "tempered" | "laminated";
  numDoors: number;
  doorType: "basic" | "standard" | "premium" | "solid_wood" | "mahogany";

  // Kitchen Options
  hasDirtyKitchen: boolean;
  dirtyKitchenArea?: number;
  hasBuiltInAppliances: boolean;

  // Pool (NEW)
  hasPool: boolean;
  poolArea?: number;
  poolType?: "concrete" | "fiberglass";
  hasPoolHeater: boolean;
  hasPoolFountain: boolean;
  hasPoolWaterfall: boolean;

  // Basement/Underground (NEW)
  hasBasement: boolean;
  basementArea?: number;
  basementHeight?: number;
  hasBasementWaterproofing: boolean;
  hasBasementElevator: boolean;

  // Systems
  hasGarage: boolean;
  garageArea?: number;
  hasCarport: boolean;
  carportArea?: number;
  hasBalcony: boolean;
  balconyArea?: number;

  // Plumbing
  septicType: SepticType;
  hasWaterHeater: boolean;
  numWaterHeaters: number;
  waterHeaterType: "standard" | "tankless" | "solar";

  // Electrical
  numLights: number;
  hasAircon: boolean;
  numAirconUnits: number;
  airconType: "window" | "split" | "cassette" | "floor" | "vrf";
  hasEmergencyLights: boolean;
  hasCCTV: boolean;
  hasGenerator: boolean;
  generatorSize?: "5kva" | "10kva";

  // Roofing
  roofType: RoofType;
  hasCeilingInsulation: boolean;
  insulationType?: "foam" | "fiberglass";

  // Structural (NEW)
  hasMetalStructure: boolean;
  metalStructureType?: "i_beam" | "c_channel" | "metal_decking";
  hasRetainingWall: boolean;
  retainingWallLength?: number;
  retainingWallHeight?: number;

  // Flooring
  floorType: "tiles" | "vinyl" | "wood" | "epoxy" | "concrete" | "terrazzo";

  // Exterior
  hasFence: boolean;
  fenceLength?: number;
  fenceType?: "concrete" | "metal" | "hog_wire" | "glass" | "brick";
  hasGate: boolean;
  gateType?: "simple" | "ornate" | "automatic";
  hasAutomaticGate: boolean;
  hasIntercom: boolean;

  // Landscaping (NEW)
  hasLandscaping: boolean;
  landscapeArea?: number;
  hasGazebo: boolean;
  hasPergola: boolean;
  hasDeck: boolean;
  deckArea?: number;
  hasGardenFountain: boolean;
  hasOutdoorLighting: boolean;

  // Special
  hasElevator: boolean;
  hasFireExit: boolean;
  hasSprinkler: boolean;
  hasFireAlarm: boolean;

  // Location
  location: "metro_manila" | "provincial_city" | "rural";

  // Disclaimer Acknowledged
  disclaimerAcknowledged: boolean;
}

// ============================================================================
// BUILDING TYPE LABELS
// ============================================================================

export const BUILDING_TYPE_LABELS: Record<BuildingType, string> = {
  bungalow: "Bungalow (Single Story House)",
  two_story: "Two-Story House",
  three_story: "Three-Story House",
  four_story: "Four-Story Building",
  five_story: "Five-Story Building",
  townhouse: "Townhouse",
  duplex: "Duplex House",
  apartment: "Apartment Building",
  office_small: "Small Office (1 Floor)",
  office_medium: "Medium Office (2 Floors)",
  office_large: "Large Office (3+ Floors)",
  warehouse: "Warehouse/Storage",
  retail_store: "Retail Store/Shop",
  restaurant: "Restaurant/Cafe",
  clinic: "Clinic/Medical Office",
  school_room: "Classroom/School Room",
  fence_concrete: "Concrete Fence/Wall",
  fence_metal: "Metal Fence",
  gate: "Gate Only",
  carport: "Carport/Open Garage",
  pool_only: "Swimming Pool Only",
  basement_only: "Basement/Underground Only",
  renovation_minor: "Minor Renovation",
  renovation_major: "Major Renovation",
};

// ============================================================================
// USER TYPE LABELS
// ============================================================================

export const USER_TYPE_LABELS: Record<UserType, string> = {
  contractor: "Contractor / Builder",
  homeowner: "Homeowner / Client",
  architect: "Architect",
  engineer: "Engineer",
  developer: "Property Developer",
  other: "Other",
};

// ============================================================================
// DEFAULT VALUES BY BUILDING TYPE
// ============================================================================

export const BUILDING_TYPE_DEFAULTS: Record<BuildingType, Partial<EstimateInput>> = {
  bungalow: {
    numFloors: 1,
    ceilingHeight: 2.7,
    numWindows: 8,
    numDoors: 4,
    numLights: 20,
    hasGarage: true,
    garageArea: 18,
    septicType: "concrete_3chamber",
    hasDirtyKitchen: true,
    dirtyKitchenArea: 8,
  },
  two_story: {
    numFloors: 2,
    ceilingHeight: 2.7,
    numWindows: 14,
    numDoors: 6,
    numLights: 35,
    hasGarage: true,
    garageArea: 18,
    septicType: "concrete_3chamber",
    hasDirtyKitchen: true,
    dirtyKitchenArea: 8,
  },
  three_story: {
    numFloors: 3,
    ceilingHeight: 2.7,
    numWindows: 20,
    numDoors: 8,
    numLights: 50,
    hasGarage: true,
    garageArea: 18,
    septicType: "concrete_3chamber",
    hasDirtyKitchen: true,
    dirtyKitchenArea: 8,
  },
  four_story: {
    numFloors: 4,
    ceilingHeight: 2.8,
    numWindows: 26,
    numDoors: 10,
    numLights: 65,
    hasGarage: false,
    hasFireExit: true,
    septicType: "concrete_3chamber",
  },
  five_story: {
    numFloors: 5,
    ceilingHeight: 2.8,
    numWindows: 32,
    numDoors: 12,
    numLights: 80,
    hasGarage: false,
    hasFireExit: true,
    hasElevator: true,
    septicType: "concrete_3chamber",
  },
  townhouse: {
    numFloors: 2,
    ceilingHeight: 2.7,
    numWindows: 10,
    numDoors: 4,
    numLights: 25,
    hasGarage: false,
    hasCarport: true,
    carportArea: 12,
    septicType: "concrete_3chamber",
    hasDirtyKitchen: true,
    dirtyKitchenArea: 6,
  },
  duplex: {
    numFloors: 2,
    ceilingHeight: 2.7,
    numWindows: 16,
    numDoors: 8,
    numLights: 45,
    hasGarage: true,
    garageArea: 18,
    septicType: "concrete_3chamber",
    hasDirtyKitchen: true,
    dirtyKitchenArea: 8,
  },
  apartment: {
    numFloors: 3,
    ceilingHeight: 2.6,
    numWindows: 24,
    numDoors: 12,
    numLights: 60,
    hasGarage: false,
    hasFireExit: true,
    septicType: "concrete_3chamber",
  },
  office_small: {
    numFloors: 1,
    ceilingHeight: 2.7,
    numWindows: 6,
    numDoors: 3,
    numLights: 15,
    hasAircon: true,
    numAirconUnits: 3,
    airconType: "split",
    hasEmergencyLights: true,
    hasCCTV: true,
    floorType: "epoxy",
    septicType: "concrete_3chamber",
  },
  office_medium: {
    numFloors: 2,
    ceilingHeight: 2.8,
    numWindows: 12,
    numDoors: 6,
    numLights: 40,
    hasAircon: true,
    numAirconUnits: 8,
    airconType: "split",
    hasEmergencyLights: true,
    hasCCTV: true,
    hasFireExit: true,
    floorType: "epoxy",
    septicType: "concrete_3chamber",
  },
  office_large: {
    numFloors: 3,
    ceilingHeight: 2.8,
    numWindows: 20,
    numDoors: 10,
    numLights: 75,
    hasAircon: true,
    numAirconUnits: 15,
    airconType: "cassette",
    hasEmergencyLights: true,
    hasCCTV: true,
    hasFireExit: true,
    hasElevator: true,
    floorType: "epoxy",
    septicType: "concrete_3chamber",
  },
  warehouse: {
    numFloors: 1,
    ceilingHeight: 5.0,
    numWindows: 4,
    numDoors: 2,
    numLights: 20,
    hasAircon: false,
    hasEmergencyLights: true,
    hasCCTV: true,
    floorType: "concrete",
    roofType: "longspan",
    hasMetalStructure: true,
    metalStructureType: "i_beam",
    septicType: "concrete_3chamber",
  },
  retail_store: {
    numFloors: 1,
    ceilingHeight: 3.0,
    numWindows: 8,
    numDoors: 2,
    numLights: 25,
    hasAircon: true,
    numAirconUnits: 4,
    airconType: "split",
    hasEmergencyLights: true,
    hasCCTV: true,
    floorType: "tiles",
    septicType: "concrete_3chamber",
  },
  restaurant: {
    numFloors: 1,
    ceilingHeight: 3.0,
    numWindows: 6,
    numDoors: 3,
    numLights: 30,
    hasAircon: true,
    numAirconUnits: 5,
    airconType: "split",
    hasEmergencyLights: true,
    hasCCTV: true,
    hasDirtyKitchen: true,
    dirtyKitchenArea: 15,
    floorType: "tiles",
    septicType: "concrete_3chamber",
  },
  clinic: {
    numFloors: 1,
    ceilingHeight: 2.8,
    numWindows: 6,
    numDoors: 4,
    numLights: 20,
    hasAircon: true,
    numAirconUnits: 3,
    airconType: "split",
    hasEmergencyLights: true,
    hasCCTV: true,
    floorType: "vinyl",
    septicType: "concrete_3chamber",
  },
  school_room: {
    numFloors: 1,
    ceilingHeight: 3.0,
    numWindows: 8,
    numDoors: 2,
    numLights: 12,
    hasAircon: false,
    hasEmergencyLights: true,
    floorType: "tiles",
    septicType: "concrete_3chamber",
  },
  fence_concrete: {
    numFloors: 1,
    ceilingHeight: 2.4,
    numWindows: 0,
    numDoors: 1,
    numLights: 0,
    hasFence: true,
    fenceType: "concrete",
    septicType: "none",
  },
  fence_metal: {
    numFloors: 1,
    ceilingHeight: 2.4,
    numWindows: 0,
    numDoors: 1,
    numLights: 0,
    hasFence: true,
    fenceType: "metal",
    septicType: "none",
  },
  gate: {
    numFloors: 1,
    ceilingHeight: 2.4,
    numWindows: 0,
    numDoors: 0,
    numLights: 2,
    hasGate: true,
    septicType: "none",
  },
  carport: {
    numFloors: 1,
    ceilingHeight: 2.7,
    numWindows: 0,
    numDoors: 0,
    numLights: 4,
    hasCarport: true,
    septicType: "none",
  },
  pool_only: {
    numFloors: 1,
    ceilingHeight: 0,
    numWindows: 0,
    numDoors: 0,
    numLights: 4,
    hasPool: true,
    poolType: "concrete",
    septicType: "none",
  },
  basement_only: {
    numFloors: 1,
    ceilingHeight: 2.6,
    numWindows: 0,
    numDoors: 1,
    numLights: 10,
    hasBasement: true,
    hasBasementWaterproofing: true,
    septicType: "none",
  },
  renovation_minor: {
    numFloors: 1,
    ceilingHeight: 2.7,
    numWindows: 2,
    numDoors: 1,
    numLights: 5,
    septicType: "none",
  },
  renovation_major: {
    numFloors: 1,
    ceilingHeight: 2.7,
    numWindows: 4,
    numDoors: 2,
    numLights: 10,
    septicType: "none",
  },
};

// ============================================================================
// DISCLAIMER TEXT
// ============================================================================

export const ESTIMATE_DISCLAIMER = `
IMPORTANT DISCLAIMER:

This estimate is provided for MATERIAL QUANTITY AND PRICE REFERENCE ONLY.

This is NOT a contract price or final quotation. The actual construction cost may vary based on:
- Labor costs (not included in this estimate)
- Site conditions and accessibility
- Design complexity and specifications
- Market price fluctuations
- Contractor overhead and profit margin
- Permits, taxes, and legal fees
- Unforeseen site conditions

We recommend consulting with a licensed contractor for a complete project quotation that includes:
- Labor and manpower costs
- Contractor's overhead and profit
- Project management fees
- Contingency allowance
- Complete scope of work

This tool is designed to help you understand material requirements and approximate material costs for budgeting purposes only.
`;

// ============================================================================
// ESTIMATE RESULT INTERFACE
// ============================================================================

export interface EstimateResult {
  id: string;
  projectName: string;
  buildingType: string;
  qualityTier: QualityTier;
  userType: UserType;
  floorArea: number;
  numFloors: number;
  totalArea: number;

  // Cost Breakdown
  structural: CostCategory;
  architectural: CostCategory;
  electrical: CostCategory;
  plumbing: CostCategory;
  mechanical: CostCategory;
  exterior: CostCategory;
  miscellaneous: CostCategory;
  specialFeatures?: CostCategory;

  // Totals
  totalCost: number;
  costPerSqm: number;

  // Material Summary
  materials: MaterialSummary;

  // Metadata
  date: string;
  location: string;
  disclaimer: string;
  userId: string;
}

export interface CostCategory {
  name: string;
  cost: number;
  items: CostItem[];
}

export interface CostItem {
  name: string;
  quantity: number;
  unit: string;
  unitCost: number;
  totalCost: number;
}

export interface MaterialSummary {
  cementBags: number;
  sandCuM: number;
  gravelCuM: number;
  rebarKg: number;
  chbPcs: number;
  metalKg: number;
  roofingSqm: number;
  tilesSqm: number;
  paintLiters: number;
  wireMeters: number;
  pipesMeters: number;
}

// ============================================================================
// SIMPLIFIED ESTIMATOR ENGINE (Full implementation would be in backend)
// ============================================================================

export function generateEstimateId(): string {
  return `EST-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}

export function calculateEstimate(input: EstimateInput, userId: string): EstimateResult {
  const mult = QUALITY_MULTIPLIERS[input.qualityTier] || QUALITY_MULTIPLIERS.Standard;
  const totalFloorArea = input.floorArea * input.numFloors;
  
  // Calculate base costs (simplified for frontend demo)
  const baseCostPerSqm = {
    Basic: 15000,
    Standard: 22000,
    "Above Standard": 30000,
    Premium: 45000,
    Luxury: 70000,
  }[input.qualityTier] || 22000;

  let totalCost = totalFloorArea * baseCostPerSqm;

  // Add pool cost
  if (input.hasPool && input.poolArea) {
    const poolCostPerSqm = input.poolType === "fiberglass" ? 18500 : 12500;
    totalCost += input.poolArea * poolCostPerSqm;
    if (input.hasPoolHeater) totalCost += 65000;
    if (input.hasPoolFountain) totalCost += 45000;
    if (input.hasPoolWaterfall) totalCost += 65000;
  }

  // Add basement cost
  if (input.hasBasement && input.basementArea) {
    const basementCostPerSqm = 15000;
    totalCost += input.basementArea * basementCostPerSqm;
    if (input.hasBasementWaterproofing) totalCost += input.basementArea * 1850;
    if (input.hasBasementElevator) totalCost += 450000;
  }

  // Add dirty kitchen cost
  if (input.hasDirtyKitchen && input.dirtyKitchenArea) {
    totalCost += input.dirtyKitchenArea * 8500;
  }

  // Add metal structure cost
  if (input.hasMetalStructure) {
    const metalCost = totalFloorArea * 2500 * mult.metalwork;
    totalCost += metalCost;
  }

  // Add landscaping cost
  if (input.hasLandscaping && input.landscapeArea) {
    totalCost += input.landscapeArea * 1500;
  }
  if (input.hasGazebo) totalCost += 85000;
  if (input.hasPergola) totalCost += 65000;
  if (input.hasDeck && input.deckArea) totalCost += input.deckArea * 5500;
  if (input.hasGardenFountain) totalCost += 35000;

  // Add special features
  if (input.hasElevator) totalCost += 1500000;
  if (input.hasSprinkler) totalCost += totalFloorArea * 350;
  if (input.hasFireAlarm) totalCost += totalFloorArea * 150;
  if (input.hasGenerator) totalCost += input.generatorSize === "10kva" ? 225000 : 125000;

  // Add exterior features
  if (input.hasGarage && input.garageArea) totalCost += input.garageArea * 8500;
  if (input.hasCarport && input.carportArea) totalCost += input.carportArea * 4500;
  if (input.hasBalcony && input.balconyArea) totalCost += input.balconyArea * 6500;
  if (input.hasFence && input.fenceLength) {
    const fenceCostPerMeter = {
      concrete: 1250,
      metal: 850,
      hog_wire: 450,
      glass: 4500,
      brick: 1850,
    }[input.fenceType || "concrete"] || 1250;
    totalCost += input.fenceLength * fenceCostPerMeter;
  }
  if (input.hasGate) {
    const gateCost = input.gateType === "ornate" ? 45000 : input.gateType === "automatic" ? 63500 : 18500;
    totalCost += gateCost;
  }

  // Location multiplier
  const locationMultiplier = {
    metro_manila: 1.0,
    provincial_city: 0.9,
    rural: 0.85,
  }[input.location] || 1.0;
  totalCost *= locationMultiplier;

  // Generate categories (simplified)
  const structural: CostCategory = {
    name: "Structural Works",
    cost: Math.round(totalCost * 0.35),
    items: [
      { name: "Concrete & Reinforcement", quantity: Math.round(totalFloorArea * 0.15), unit: "cu.m", unitCost: 8500, totalCost: Math.round(totalFloorArea * 0.15 * 8500) },
      { name: "CHB Walls", quantity: Math.round(totalFloorArea * 15), unit: "pcs", unitCost: 22, totalCost: Math.round(totalFloorArea * 15 * 22) },
    ],
  };

  const architectural: CostCategory = {
    name: "Architectural Works",
    cost: Math.round(totalCost * 0.25),
    items: [
      { name: "Roofing", quantity: Math.round(totalFloorArea * 1.3), unit: "sqm", unitCost: 512, totalCost: Math.round(totalFloorArea * 1.3 * 512) },
      { name: "Flooring", quantity: totalFloorArea, unit: "sqm", unitCost: 185, totalCost: Math.round(totalFloorArea * 185) },
    ],
  };

  const electrical: CostCategory = {
    name: "Electrical Works",
    cost: Math.round(totalCost * 0.12),
    items: [
      { name: "Wiring & Fixtures", quantity: input.numLights, unit: "points", unitCost: 2500, totalCost: Math.round(input.numLights * 2500) },
    ],
  };

  const plumbing: CostCategory = {
    name: "Plumbing Works",
    cost: Math.round(totalCost * 0.10),
    items: [
      { name: "Fixtures & Piping", quantity: input.numBathrooms + input.numKitchens, unit: "sets", unitCost: 15000, totalCost: Math.round((input.numBathrooms + input.numKitchens) * 15000) },
    ],
  };

  const mechanical: CostCategory = {
    name: "Mechanical Works",
    cost: Math.round(totalCost * 0.08),
    items: [],
  };

  const exterior: CostCategory = {
    name: "Exterior Works",
    cost: Math.round(totalCost * 0.05),
    items: [],
  };

  const miscellaneous: CostCategory = {
    name: "Miscellaneous",
    cost: Math.round(totalCost * 0.05),
    items: [
      { name: "Contingency (5%)", quantity: 1, unit: "lump sum", unitCost: Math.round(totalCost * 0.05), totalCost: Math.round(totalCost * 0.05) },
    ],
  };

  // Recalculate total from categories
  const calculatedTotal = structural.cost + architectural.cost + electrical.cost + plumbing.cost + mechanical.cost + exterior.cost + miscellaneous.cost;

  return {
    id: generateEstimateId(),
    projectName: input.projectName,
    buildingType: BUILDING_TYPE_LABELS[input.buildingType],
    qualityTier: input.qualityTier,
    userType: input.userType,
    floorArea: input.floorArea,
    numFloors: input.numFloors,
    totalArea: totalFloorArea,
    structural,
    architectural,
    electrical,
    plumbing,
    mechanical,
    exterior,
    miscellaneous,
    totalCost: Math.round(calculatedTotal),
    costPerSqm: Math.round(calculatedTotal / totalFloorArea),
    materials: {
      cementBags: Math.round(totalFloorArea * 8),
      sandCuM: Math.round(totalFloorArea * 0.5 * 10) / 10,
      gravelCuM: Math.round(totalFloorArea * 0.4 * 10) / 10,
      rebarKg: Math.round(totalFloorArea * 12),
      metalKg: input.hasMetalStructure ? Math.round(totalFloorArea * 25) : 0,
      chbPcs: Math.round(totalFloorArea * 15),
      roofingSqm: Math.round(totalFloorArea * 1.3),
      tilesSqm: totalFloorArea,
      paintLiters: Math.round(totalFloorArea * 0.3),
      wireMeters: Math.round(totalFloorArea * 4),
      pipesMeters: Math.round(totalFloorArea * 0.8),
    },
    date: new Date().toISOString(),
    location: input.location,
    disclaimer: ESTIMATE_DISCLAIMER,
    userId,
  };
}

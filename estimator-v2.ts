/**
 * Construction Estimator Engine V2 - COMPREHENSIVE
 * All building types + detailed options for Philippine contractors
 */

// ============================================================================
// PHILIPPINE CONSTRUCTION PRICES - 2025 (EXPANDED)
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
  tie_wire_kg: 65,
  formwork_ply_sheet: 850,
  formwork_stud_lm: 45,

  // ROOFING
  roof_longspan_04mm: 410,
  roof_longspan_05mm: 512,
  roof_longspan_06mm: 614,
  roof_gi_corrugated: 268,
  roof_clay_tile: 28,
  roof_concrete_tile: 45,
  roof_tilespan: 550,
  roof_asphalt_shingle: 1250,
  roof_metal_shingle: 850,
  gutter_metal: 450,
  gutter_pvc: 285,
  downspout: 320,
  ridge_roll: 380,
  flashing: 420,
  roof_insulation: 185,

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

  // CEILING
  ceiling_gypsum: 285,
  ceiling_hardiflex: 245,
  ceiling_pvc: 385,
  ceiling_acoustic: 450,
  ceiling_metal_furring: 145,
  ceiling_grid_tbar: 185,

  // WALLS & PARTITIONS
  wall_gypsum_board: 385,
  wall_ficem_board: 425,
  wall_pvc_panel: 285,
  wall_glass_partition: 2850,
  wall_aluminum_partition: 1850,

  // DOORS
  door_panel_basic: 2850,
  door_panel_standard: 4850,
  door_panel_premium: 12500,
  door_panel_solid_wood: 18500,
  door_jamb: 1450,
  door_knob_standard: 650,
  door_knob_premium: 2850,
  door_hinges: 85,
  door_closer: 1850,
  door_panic_bar: 4850,
  door_roll_up: 12500,
  door_fire_rated: 18500,

  // WINDOWS
  window_sliding_aluminum: 2850,
  window_sliding_upvc: 4850,
  window_casement_aluminum: 3850,
  window_casement_upvc: 5850,
  window_fixed_aluminum: 1850,
  window_jalousie: 1250,
  window_tinted_glass: 3850,
  window_tempered_glass: 5850,
  window_screen: 450,

  // KITCHEN
  kitchen_sink_stainless: 4850,
  kitchen_sink_granite: 12500,
  kitchen_faucet_standard: 2850,
  kitchen_faucet_pullout: 6850,
  kitchen_faucet_sensor: 12500,
  countertop_granite: 3850,
  countertop_quartz: 6250,
  countertop_marble: 8500,
  countertop_laminate: 1850,
  kitchen_cabinet_standard: 8500,
  kitchen_cabinet_premium: 18500,
  kitchen_cabinet_modular: 28500,
  range_hood_standard: 6850,
  range_hood_premium: 15850,
  range_hood_island: 28500,
  gas_stove: 12500,
  induction_cooker: 18500,

  // TOILET & BATH
  water_closet_basic: 3850,
  water_closet_standard: 6850,
  water_closet_premium: 18500,
  water_closet_bidet: 28500,
  lavatory_basic: 1850,
  lavatory_standard: 3850,
  lavatory_premium: 8500,
  lavatory_vessel: 12500,
  faucet_standard: 1850,
  faucet_premium: 4850,
  faucet_sensor: 12500,
  shower_set_basic: 1850,
  shower_set_standard: 3850,
  shower_set_premium: 9500,
  shower_set_rainfall: 18500,
  water_heater_standard: 12500,
  water_heater_premium: 28500,
  water_heater_tankless: 18500,
  floor_drain: 285,
  exhaust_fan_standard: 1850,
  exhaust_fan_premium: 3850,
  bathroom_mirror_standard: 1850,
  bathroom_mirror_led: 6850,
  bathroom_cabinet: 8500,
  glass_enclosure: 18500,

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

  // SEPTIC SYSTEMS
  septic_tank_concrete_3chamber: 28500,
  septic_tank_fiberglass: 45000,
  septic_tank_plastic: 18500,
  septic_tank_biodigester: 65000,
  grease_trap: 12500,
  catch_basin: 8500,

  // ELECTRICAL
  wire_14_2: 28,
  wire_12_2: 38,
  wire_10_2: 52,
  wire_8_2: 78,
  wire_thhn_14: 22,
  wire_thhn_12: 32,
  wire_thhn_10: 48,
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
  led_downlight_6w: 285,
  led_downlight_9w: 385,
  led_downlight_12w: 485,
  led_panel_24w: 685,
  led_strip_per_meter: 185,
  led_floodlight_50w: 1250,
  led_floodlight_100w: 2250,
  emergency_light: 1850,
  exit_sign: 1250,
  panel_board_4branch: 4500,
  panel_board_8branch: 8500,
  panel_board_12branch: 12500,
  breaker_20A: 285,
  breaker_30A: 385,
  breaker_40A: 485,
  breaker_60A: 685,
  breaker_main_100A: 2850,
  breaker_main_200A: 4850,
  electric_meter: 1850,
  avr_1000va: 2850,
  avr_2000va: 4850,

  // AIRCON & VENTILATION
  aircon_window_1hp: 18500,
  aircon_window_1_5hp: 28500,
  aircon_split_1hp: 28500,
  aircon_split_1_5hp: 38500,
  aircon_split_2hp: 48500,
  aircon_cassette_2hp: 65000,
  aircon_cassette_3hp: 85000,
  exhaust_fan_wall: 1850,
  exhaust_fan_ceiling: 2850,
  exhaust_fan_industrial: 8500,

  // MISCELLANEOUS
  nails_kg: 85,
  screws_kg: 125,
  anchors_kg: 185,
  welding_rod_kg: 185,
  angle_bar_2x2: 485,
  channel_bar: 685,
  flat_bar: 385,
  scaffolding_rental: 85,
  temporary_facilities: 150,
  site_cleanup: 45,
  security_guard_per_day: 650,

  // LANDSCAPING & EXTERIOR
  concrete_paver: 450,
  grass_sod_per_sqm: 185,
  garden_soil_per_bag: 285,
  pebbles_per_sack: 450,
  outdoor_light: 1850,
  gate_metal_simple: 18500,
  gate_metal_orante: 45000,
  fence_hog_wire_per_lm: 450,
  fence_concrete_per_lm: 1250,
  fence_metal_per_lm: 850,
  fence_brick_per_lm: 1850,
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
  },
  Standard: {
    structural: 1.0,
    finishes: 1.0,
    fixtures: 1.0,
    electrical: 1.0,
    plumbing: 1.0,
    windows: 1.0,
    doors: 1.0,
  },
  "Above Standard": {
    structural: 1.1,
    finishes: 1.4,
    fixtures: 1.6,
    electrical: 1.3,
    plumbing: 1.4,
    windows: 1.3,
    doors: 1.4,
  },
  Premium: {
    structural: 1.2,
    finishes: 2.2,
    fixtures: 3.0,
    electrical: 1.8,
    plumbing: 2.2,
    windows: 2.0,
    doors: 2.5,
  },
  Luxury: {
    structural: 1.3,
    finishes: 3.5,
    fixtures: 5.0,
    electrical: 2.5,
    plumbing: 3.5,
    windows: 3.0,
    doors: 4.0,
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
  | "renovation_minor"
  | "renovation_major";

export type QualityTier = "Basic" | "Standard" | "Above Standard" | "Premium" | "Luxury";

export type SepticType = "concrete_3chamber" | "fiberglass" | "plastic" | "biodigester" | "none";

export type RoofType = "longspan" | "tile" | "asphalt_shingle" | "metal_shingle" | "concrete";

// ============================================================================
// ESTIMATE INPUT INTERFACE
// ============================================================================

export interface EstimateInput {
  // Basic Info
  projectName: string;
  buildingType: BuildingType;
  qualityTier: QualityTier;

  // Dimensions
  floorArea: number;
  lotArea?: number;
  numFloors: number;
  ceilingHeight?: number;

  // Rooms
  numBedrooms: number;
  numBathrooms: number;
  numKitchens: number;
  numLivingRooms: number;
  numDiningRooms: number;
  numOffices?: number;
  numStorageRooms?: number;

  // Windows & Doors
  numWindows: number;
  windowType: "aluminum" | "upvc" | "jalousie";
  numDoors: number;
  doorType: "basic" | "standard" | "premium" | "solid_wood";

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
  hasGreaseTrap?: boolean;

  // Electrical
  numLights: number;
  hasAircon: boolean;
  numAirconUnits: number;
  airconType: "window" | "split" | "cassette";
  hasEmergencyLights: boolean;
  hasCCTV: boolean;

  // Roofing
  roofType: RoofType;
  hasCeilingInsulation: boolean;

  // Flooring
  floorType: "tiles" | "vinyl" | "wood" | "epoxy" | "concrete";

  // Exterior
  hasFence: boolean;
  fenceLength?: number;
  fenceType?: "concrete" | "metal" | "hog_wire";
  hasGate: boolean;
  gateType?: "simple" | "ornate";

  // Special
  hasElevator: boolean;
  hasFireExit: boolean;
  hasSprinkler: boolean;

  // Location (for labor cost adjustment)
  location: "metro_manila" | "provincial_city" | "rural";
}

// ============================================================================
// ESTIMATE RESULT INTERFACE
// ============================================================================

export interface EstimateResult {
  projectName: string;
  buildingType: string;
  qualityTier: QualityTier;
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

  // Totals
  totalCost: number;
  costPerSqm: number;

  // Material Summary
  materials: MaterialSummary;

  // Metadata
  date: string;
  location: string;
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
  roofingSqm: number;
  tilesSqm: number;
  paintLiters: number;
  wireMeters: number;
  pipesMeters: number;
}

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
    hasGreaseTrap: true,
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
  renovation_minor: "Minor Renovation",
  renovation_major: "Major Renovation",
};

// ============================================================================
// ESTIMATOR ENGINE
// ============================================================================

export class ConstructionEstimatorV2 {
  private mult: Record<string, number> = QUALITY_MULTIPLIERS.Standard;

  calculate(input: EstimateInput): EstimateResult {
    this.mult = QUALITY_MULTIPLIERS[input.qualityTier] || QUALITY_MULTIPLIERS.Standard;
    const totalArea = input.floorArea * input.numFloors;

    // Calculate each category
    const structural = this.calculateStructural(input, totalArea);
    const architectural = this.calculateArchitectural(input, totalArea);
    const electrical = this.calculateElectrical(input, totalArea);
    const plumbing = this.calculatePlumbing(input, totalArea);
    const mechanical = this.calculateMechanical(input, totalArea);
    const exterior = this.calculateExterior(input);
    const miscellaneous = this.calculateMiscellaneous(input, totalArea);

    // Calculate totals
    const totalCost =
      structural.cost +
      architectural.cost +
      electrical.cost +
      plumbing.cost +
      mechanical.cost +
      exterior.cost +
      miscellaneous.cost;

    // Material summary
    const materials = this.generateMaterialSummary(structural, architectural, electrical, plumbing);

    return {
      projectName: input.projectName,
      buildingType: BUILDING_TYPE_LABELS[input.buildingType],
      qualityTier: input.qualityTier,
      floorArea: input.floorArea,
      numFloors: input.numFloors,
      totalArea,
      structural,
      architectural,
      electrical,
      plumbing,
      mechanical,
      exterior,
      miscellaneous,
      totalCost: Math.round(totalCost),
      costPerSqm: Math.round(totalCost / totalArea),
      materials,
      date: new Date().toISOString(),
      location: input.location,
    };
  }

  private calculateStructural(input: EstimateInput, totalArea: number): CostCategory {
    const items: CostItem[] = [];

    // Foundation
    const foundationVol = totalArea * 0.08 * 1.1;
    const foundationCement = foundationVol * 7.5;
    const foundationSand = foundationVol * 0.42;
    const foundationGravel = foundationVol * 0.84;
    const foundationCost =
      foundationCement * PRICES.cement_40kg +
      foundationSand * PRICES.sand_cu_m +
      foundationGravel * PRICES.gravel_cu_m;

    items.push({
      name: "Foundation Concrete",
      quantity: Math.round(foundationVol * 100) / 100,
      unit: "cu.m",
      unitCost: 0,
      totalCost: Math.round(foundationCost),
    });

    // Floor Slab
    const slabVol = totalArea * 0.12 * 1.1;
    const slabCement = slabVol * 7.5;
    const slabSand = slabVol * 0.42;
    const slabGravel = slabVol * 0.84;
    const slabCost =
      slabCement * PRICES.cement_40kg +
      slabSand * PRICES.sand_cu_m +
      slabGravel * PRICES.gravel_cu_m;

    items.push({
      name: "Floor Slab Concrete",
      quantity: Math.round(slabVol * 100) / 100,
      unit: "cu.m",
      unitCost: 0,
      totalCost: Math.round(slabCost),
    });

    // Columns & Beams
    const columnVol = totalArea * 0.05 * 1.1 * input.numFloors;
    const columnCost =
      columnVol * 7.5 * PRICES.cement_40kg +
      columnVol * 0.42 * PRICES.sand_cu_m +
      columnVol * 0.84 * PRICES.gravel_cu_m;

    items.push({
      name: "Column & Beam Concrete",
      quantity: Math.round(columnVol * 100) / 100,
      unit: "cu.m",
      unitCost: 0,
      totalCost: Math.round(columnCost),
    });

    // Rebar
    const rebarKg = totalArea * 12 * this.mult.structural * input.numFloors;
    const rebarCost = rebarKg * PRICES.rebar_12mm_kg;

    items.push({
      name: "Reinforcing Steel (12mm)",
      quantity: Math.round(rebarKg),
      unit: "kg",
      unitCost: PRICES.rebar_12mm_kg,
      totalCost: Math.round(rebarCost),
    });

    // CHB Walls
    const wallArea = totalArea * 2.5;
    const chbCount = wallArea * 12.5 * 1.1;
    const chbCost = chbCount * PRICES.chb_6in;

    // Mortar for CHB
    const mortarCement = wallArea * 0.3 * 1.1;
    const mortarSand = wallArea * 0.02 * 1.1;
    const mortarCost =
      mortarCement * PRICES.cement_40kg + mortarSand * PRICES.sand_cu_m;

    items.push({
      name: "Concrete Hollow Blocks (6in)",
      quantity: Math.round(chbCount),
      unit: "pcs",
      unitCost: PRICES.chb_6in,
      totalCost: Math.round(chbCost + mortarCost),
    });

    // Formwork
    const formworkArea = totalArea * 0.6;
    const formworkCost = formworkArea * PRICES.formwork_ply_sheet;

    items.push({
      name: "Formwork Materials",
      quantity: Math.round(formworkArea),
      unit: "sqm",
      unitCost: PRICES.formwork_ply_sheet,
      totalCost: Math.round(formworkCost),
    });

    const totalCost = items.reduce((sum, item) => sum + item.totalCost, 0);

    return {
      name: "Structural Works",
      cost: totalCost,
      items,
    };
  }

  private calculateArchitectural(input: EstimateInput, totalArea: number): CostCategory {
    const items: CostItem[] = [];

    // Roofing
    const roofArea = totalArea * 1.3;
    let roofUnitPrice = PRICES.roof_longspan_05mm;
    if (input.roofType === "tile") roofUnitPrice = PRICES.roof_concrete_tile * 12;
    else if (input.roofType === "asphalt_shingle") roofUnitPrice = PRICES.roof_asphalt_shingle;
    else if (input.roofType === "metal_shingle") roofUnitPrice = PRICES.roof_metal_shingle;

    const roofCost = roofArea * roofUnitPrice * this.mult.finishes;

    items.push({
      name: "Roofing Materials",
      quantity: Math.round(roofArea * 100) / 100,
      unit: "sqm",
      unitCost: Math.round(roofUnitPrice),
      totalCost: Math.round(roofCost),
    });

    // Gutters & Downspouts
    const gutterCost = totalArea * 0.15 * PRICES.gutter_metal;
    const downspoutCost = totalArea * 0.08 * PRICES.downspout;

    items.push({
      name: "Gutters & Downspouts",
      quantity: Math.round(totalArea * 0.23),
      unit: "lm",
      unitCost: Math.round((PRICES.gutter_metal + PRICES.downspout) / 2),
      totalCost: Math.round(gutterCost + downspoutCost),
    });

    // Ceiling
    const ceilingArea = totalArea * 0.9;
    const ceilingCost = ceilingArea * PRICES.ceiling_gypsum * this.mult.finishes;

    items.push({
      name: "Ceiling (Gypsum Board)",
      quantity: Math.round(ceilingArea * 100) / 100,
      unit: "sqm",
      unitCost: PRICES.ceiling_gypsum,
      totalCost: Math.round(ceilingCost),
    });

    // Flooring
    let floorUnitPrice = PRICES.tiles_40x40;
    if (input.floorType === "vinyl") floorUnitPrice = PRICES.vinyl_tiles;
    else if (input.floorType === "wood") floorUnitPrice = PRICES.wood_parquet;
    else if (input.floorType === "epoxy") floorUnitPrice = PRICES.epoxy_flooring;
    else if (input.floorType === "concrete") floorUnitPrice = 0;

    const floorCost = totalArea * floorUnitPrice * this.mult.finishes * 1.15; // Include adhesive

    items.push({
      name: "Flooring Materials",
      quantity: Math.round(totalArea * 100) / 100,
      unit: "sqm",
      unitCost: Math.round(floorUnitPrice),
      totalCost: Math.round(floorCost),
    });

    // Painting
    const paintArea = totalArea * 3.5;
    let paintUnitPrice = PRICES.paint_latex_standard;
    if (input.qualityTier === "Basic") paintUnitPrice = PRICES.paint_latex_basic;
    else if (input.qualityTier === "Premium" || input.qualityTier === "Luxury")
      paintUnitPrice = PRICES.paint_latex_premium;

    const paintLiters = paintArea / 12;
    const paintCost = paintLiters * paintUnitPrice * this.mult.finishes;

    items.push({
      name: "Paint & Primer",
      quantity: Math.round(paintLiters),
      unit: "liters",
      unitCost: Math.round(paintUnitPrice),
      totalCost: Math.round(paintCost),
    });

    // Windows
    let windowUnitPrice = PRICES.window_sliding_aluminum;
    if (input.windowType === "upvc") windowUnitPrice = PRICES.window_sliding_upvc;
    else if (input.windowType === "jalousie") windowUnitPrice = PRICES.window_jalousie;

    const windowCost = input.numWindows * windowUnitPrice * this.mult.windows;

    items.push({
      name: "Windows",
      quantity: input.numWindows,
      unit: "pcs",
      unitCost: Math.round(windowUnitPrice),
      totalCost: Math.round(windowCost),
    });

    // Doors
    let doorUnitPrice = PRICES.door_panel_standard;
    if (input.doorType === "basic") doorUnitPrice = PRICES.door_panel_basic;
    else if (input.doorType === "premium") doorUnitPrice = PRICES.door_panel_premium;
    else if (input.doorType === "solid_wood") doorUnitPrice = PRICES.door_panel_solid_wood;

    const doorCost = input.numDoors * (doorUnitPrice + PRICES.door_jamb + PRICES.door_knob_standard) * this.mult.doors;

    items.push({
      name: "Doors & Hardware",
      quantity: input.numDoors,
      unit: "pcs",
      unitCost: Math.round(doorUnitPrice + PRICES.door_jamb + PRICES.door_knob_standard),
      totalCost: Math.round(doorCost),
    });

    const totalCost = items.reduce((sum, item) => sum + item.totalCost, 0);

    return {
      name: "Architectural Works",
      cost: totalCost,
      items,
    };
  }

  private calculateElectrical(input: EstimateInput, totalArea: number): CostCategory {
    const items: CostItem[] = [];

    // Wiring
    const wire14Length = totalArea * 4;
    const wire12Length = totalArea * 2;
    const wireCost =
      wire14Length * PRICES.wire_14_2 + wire12Length * PRICES.wire_12_2;

    items.push({
      name: "Electrical Wires",
      quantity: Math.round(wire14Length + wire12Length),
      unit: "meters",
      unitCost: Math.round((PRICES.wire_14_2 + PRICES.wire_12_2) / 2),
      totalCost: Math.round(wireCost),
    });

    // Conduit
    const conduitLength = totalArea * 3;
    const conduitCost = conduitLength * PRICES.conduit_pvc_1_2;

    items.push({
      name: "PVC Conduit",
      quantity: Math.round(conduitLength),
      unit: "meters",
      unitCost: PRICES.conduit_pvc_1_2,
      totalCost: Math.round(conduitCost),
    });

    // Outlets & Switches
    const outletCount = Math.ceil(totalArea / 15);
    const switchCount = Math.ceil(totalArea / 20);
    const outletCost = outletCount * PRICES.outlet_double * this.mult.electrical;
    const switchCost = switchCount * PRICES.switch_single * this.mult.electrical;

    items.push({
      name: "Outlets & Switches",
      quantity: outletCount + switchCount,
      unit: "pcs",
      unitCost: Math.round((PRICES.outlet_double + PRICES.switch_single) / 2),
      totalCost: Math.round(outletCost + switchCost),
    });

    // Lighting
    const lightCost = input.numLights * PRICES.led_downlight_9w * this.mult.electrical;

    items.push({
      name: "LED Lighting",
      quantity: input.numLights,
      unit: "pcs",
      unitCost: PRICES.led_downlight_9w,
      totalCost: Math.round(lightCost),
    });

    // Panel Board
    const branchCount = Math.ceil(outletCount / 4) + 4;
    let panelPrice = PRICES.panel_board_4branch;
    if (branchCount > 8) panelPrice = PRICES.panel_board_8branch;
    if (branchCount > 12) panelPrice = PRICES.panel_board_12branch;

    const panelCost = panelPrice + branchCount * PRICES.breaker_20A + PRICES.breaker_main_100A;

    items.push({
      name: "Panel Board & Breakers",
      quantity: 1,
      unit: "set",
      unitCost: Math.round(panelCost),
      totalCost: Math.round(panelCost),
    });

    // Emergency Lights
    if (input.hasEmergencyLights) {
      const emergencyCount = Math.ceil(totalArea / 100);
      const emergencyCost = emergencyCount * PRICES.emergency_light;

      items.push({
        name: "Emergency Lights",
        quantity: emergencyCount,
        unit: "pcs",
        unitCost: PRICES.emergency_light,
        totalCost: Math.round(emergencyCost),
      });
    }

    // CCTV
    if (input.hasCCTV) {
      const cctvCount = Math.ceil(totalArea / 150);
      const cctvCost = cctvCount * 3500; // Average CCTV camera price

      items.push({
        name: "CCTV System",
        quantity: cctvCount,
        unit: "pcs",
        unitCost: 3500,
        totalCost: Math.round(cctvCost),
      });
    }

    const totalCost = items.reduce((sum, item) => sum + item.totalCost, 0);

    return {
      name: "Electrical Works",
      cost: totalCost,
      items,
    };
  }

  private calculatePlumbing(input: EstimateInput, totalArea: number): CostCategory {
    const items: CostItem[] = [];

    // Water Supply Pipes
    const pipe12Length = totalArea * 0.8;
    const pipe34Length = totalArea * 0.5;
    const pipeCost =
      pipe12Length * PRICES.pvc_pipe_1_2 + pipe34Length * PRICES.pvc_pipe_3_4;

    items.push({
      name: "Water Supply Pipes",
      quantity: Math.round(pipe12Length + pipe34Length),
      unit: "meters",
      unitCost: Math.round((PRICES.pvc_pipe_1_2 + PRICES.pvc_pipe_3_4) / 2),
      totalCost: Math.round(pipeCost),
    });

    // Fittings
    const fittingCount = Math.ceil(totalArea / 20);
    const fittingCost = fittingCount * PRICES.pipe_fittings;

    items.push({
      name: "Pipe Fittings",
      quantity: fittingCount,
      unit: "pcs",
      unitCost: PRICES.pipe_fittings,
      totalCost: Math.round(fittingCost),
    });

    // Fixtures (based on bathrooms)
    const wcCount = input.numBathrooms;
    let wcPrice = PRICES.water_closet_standard;
    if (input.qualityTier === "Basic") wcPrice = PRICES.water_closet_basic;
    if (input.qualityTier === "Premium" || input.qualityTier === "Luxury")
      wcPrice = PRICES.water_closet_premium;

    const wcCost = wcCount * wcPrice * this.mult.plumbing;

    items.push({
      name: "Water Closets",
      quantity: wcCount,
      unit: "pcs",
      unitCost: Math.round(wcPrice),
      totalCost: Math.round(wcCost),
    });

    // Lavatories
    const lavCount = input.numBathrooms;
    let lavPrice = PRICES.lavatory_standard;
    if (input.qualityTier === "Basic") lavPrice = PRICES.lavatory_basic;
    if (input.qualityTier === "Premium" || input.qualityTier === "Luxury")
      lavPrice = PRICES.lavatory_premium;

    const lavCost = lavCount * lavPrice * this.mult.plumbing;

    items.push({
      name: "Lavatories",
      quantity: lavCount,
      unit: "pcs",
      unitCost: Math.round(lavPrice),
      totalCost: Math.round(lavCost),
    });

    // Showers
    const showerCount = input.numBathrooms;
    let showerPrice = PRICES.shower_set_standard;
    if (input.qualityTier === "Basic") showerPrice = PRICES.shower_set_basic;
    if (input.qualityTier === "Premium" || input.qualityTier === "Luxury")
      showerPrice = PRICES.shower_set_premium;

    const showerCost = showerCount * showerPrice * this.mult.plumbing;

    items.push({
      name: "Shower Sets",
      quantity: showerCount,
      unit: "pcs",
      unitCost: Math.round(showerPrice),
      totalCost: Math.round(showerCost),
    });

    // Faucets
    const faucetCount = input.numBathrooms + input.numKitchens;
    let faucetPrice = PRICES.faucet_standard;
    if (input.qualityTier === "Premium" || input.qualityTier === "Luxury")
      faucetPrice = PRICES.faucet_premium;

    const faucetCost = faucetCount * faucetPrice * this.mult.plumbing;

    items.push({
      name: "Faucets",
      quantity: faucetCount,
      unit: "pcs",
      unitCost: Math.round(faucetPrice),
      totalCost: Math.round(faucetCost),
    });

    // Water Heaters
    if (input.hasWaterHeater) {
      let heaterPrice = PRICES.water_heater_standard;
      if (input.qualityTier === "Premium" || input.qualityTier === "Luxury")
        heaterPrice = PRICES.water_heater_premium;

      const heaterCost = input.numWaterHeaters * heaterPrice;

      items.push({
        name: "Water Heaters",
        quantity: input.numWaterHeaters,
        unit: "pcs",
        unitCost: Math.round(heaterPrice),
        totalCost: Math.round(heaterCost),
      });
    }

    // Septic System
    if (input.septicType !== "none") {
      let septicPrice = PRICES.septic_tank_concrete_3chamber;
      if (input.septicType === "fiberglass") septicPrice = PRICES.septic_tank_fiberglass;
      if (input.septicType === "plastic") septicPrice = PRICES.septic_tank_plastic;
      if (input.septicType === "biodigester") septicPrice = PRICES.septic_tank_biodigester;

      items.push({
        name: "Septic Tank System",
        quantity: 1,
        unit: "set",
        unitCost: Math.round(septicPrice),
        totalCost: Math.round(septicPrice),
      });
    }

    // Water Tank
    const tankPrice = PRICES.water_tank_1000L;

    items.push({
      name: "Water Storage Tank",
      quantity: 1,
      unit: "pcs",
      unitCost: tankPrice,
      totalCost: tankPrice,
    });

    const totalCost = items.reduce((sum, item) => sum + item.totalCost, 0);

    return {
      name: "Plumbing Works",
      cost: totalCost,
      items,
    };
  }

  private calculateMechanical(input: EstimateInput, totalArea: number): CostCategory {
    const items: CostItem[] = [];

    // Air Conditioning
    if (input.hasAircon && input.numAirconUnits > 0) {
      let acUnitPrice = PRICES.aircon_split_1hp;
      if (input.airconType === "window") acUnitPrice = PRICES.aircon_window_1hp;
      if (input.airconType === "cassette") acUnitPrice = PRICES.aircon_cassette_2hp;

      const acCost = input.numAirconUnits * acUnitPrice;

      items.push({
        name: "Air Conditioning Units",
        quantity: input.numAirconUnits,
        unit: "pcs",
        unitCost: Math.round(acUnitPrice),
        totalCost: Math.round(acCost),
      });

      // Installation
      const installCost = input.numAirconUnits * 3500;

      items.push({
        name: "AC Installation",
        quantity: input.numAirconUnits,
        unit: "pcs",
        unitCost: 3500,
        totalCost: Math.round(installCost),
      });
    }

    // Exhaust Fans
    const exhaustCount = input.numBathrooms + input.numKitchens;
    const exhaustCost = exhaustCount * PRICES.exhaust_fan_standard;

    items.push({
      name: "Exhaust Fans",
      quantity: exhaustCount,
      unit: "pcs",
      unitCost: PRICES.exhaust_fan_standard,
      totalCost: Math.round(exhaustCost),
    });

    // Elevator
    if (input.hasElevator) {
      items.push({
        name: "Passenger Elevator (Basic)",
        quantity: 1,
        unit: "unit",
        unitCost: 1500000,
        totalCost: 1500000,
      });
    }

    // Fire Sprinkler
    if (input.hasSprinkler) {
      const sprinklerCount = Math.ceil(totalArea / 12);
      const sprinklerCost = sprinklerCount * 4500;

      items.push({
        name: "Fire Sprinkler System",
        quantity: sprinklerCount,
        unit: "heads",
        unitCost: 4500,
        totalCost: Math.round(sprinklerCost),
      });
    }

    const totalCost = items.reduce((sum, item) => sum + item.totalCost, 0);

    return {
      name: "Mechanical Works",
      cost: totalCost,
      items,
    };
  }

  private calculateExterior(input: EstimateInput): CostCategory {
    const items: CostItem[] = [];

    // Garage
    if (input.hasGarage && input.garageArea) {
      const garageCost = input.garageArea * 8500; // Basic garage construction cost per sqm

      items.push({
        name: "Garage Construction",
        quantity: input.garageArea,
        unit: "sqm",
        unitCost: 8500,
        totalCost: Math.round(garageCost),
      });
    }

    // Carport
    if (input.hasCarport && input.carportArea) {
      const carportCost = input.carportArea * 4500;

      items.push({
        name: "Carport Construction",
        quantity: input.carportArea,
        unit: "sqm",
        unitCost: 4500,
        totalCost: Math.round(carportCost),
      });
    }

    // Balcony
    if (input.hasBalcony && input.balconyArea) {
      const balconyCost = input.balconyArea * 6500;

      items.push({
        name: "Balcony Construction",
        quantity: input.balconyArea,
        unit: "sqm",
        unitCost: 6500,
        totalCost: Math.round(balconyCost),
      });
    }

    // Fence
    if (input.hasFence && input.fenceLength) {
      let fenceUnitPrice = PRICES.fence_concrete_per_lm;
      if (input.fenceType === "metal") fenceUnitPrice = PRICES.fence_metal_per_lm;
      if (input.fenceType === "hog_wire") fenceUnitPrice = PRICES.fence_hog_wire_per_lm;

      const fenceCost = input.fenceLength * fenceUnitPrice;

      items.push({
        name: "Perimeter Fence",
        quantity: input.fenceLength,
        unit: "lm",
        unitCost: Math.round(fenceUnitPrice),
        totalCost: Math.round(fenceCost),
      });
    }

    // Gate
    if (input.hasGate) {
      let gatePrice = PRICES.gate_metal_simple;
      if (input.gateType === "ornate") gatePrice = PRICES.gate_metal_orante;

      items.push({
        name: "Main Gate",
        quantity: 1,
        unit: "pcs",
        unitCost: gatePrice,
        totalCost: gatePrice,
      });
    }

    const totalCost = items.reduce((sum, item) => sum + item.totalCost, 0);

    return {
      name: "Exterior Works",
      cost: totalCost,
      items,
    };
  }

  private calculateMiscellaneous(_input: EstimateInput, totalArea: number): CostCategory {
    const items: CostItem[] = [];

    // Scaffolding
    const scaffoldingCost = totalArea * PRICES.scaffolding_rental;

    items.push({
      name: "Scaffolding Rental",
      quantity: totalArea,
      unit: "sqm",
      unitCost: PRICES.scaffolding_rental,
      totalCost: Math.round(scaffoldingCost),
    });

    // Temporary Facilities
    const tempCost = totalArea * PRICES.temporary_facilities;

    items.push({
      name: "Temporary Facilities",
      quantity: totalArea,
      unit: "sqm",
      unitCost: PRICES.temporary_facilities,
      totalCost: Math.round(tempCost),
    });

    // Site Cleanup
    const cleanupCost = totalArea * PRICES.site_cleanup;

    items.push({
      name: "Site Cleanup",
      quantity: totalArea,
      unit: "sqm",
      unitCost: PRICES.site_cleanup,
      totalCost: Math.round(cleanupCost),
    });

    // Building Permit & Legal (estimate)
    const permitCost = totalArea * 150;

    items.push({
      name: "Permits & Legal Fees (Est.)",
      quantity: 1,
      unit: "lump sum",
      unitCost: Math.round(permitCost),
      totalCost: Math.round(permitCost),
    });

    // Contingency (5%)
    const subtotal = items.reduce((sum, item) => sum + item.totalCost, 0);
    const contingency = subtotal * 0.05;

    items.push({
      name: "Contingency (5%)",
      quantity: 1,
      unit: "lump sum",
      unitCost: Math.round(contingency),
      totalCost: Math.round(contingency),
    });

    const totalCost = items.reduce((sum, item) => sum + item.totalCost, 0);

    return {
      name: "Miscellaneous",
      cost: totalCost,
      items,
    };
  }

  private generateMaterialSummary(
    structural: CostCategory,
    architectural: CostCategory,
    electrical: CostCategory,
    plumbing: CostCategory
  ): MaterialSummary {
    // Extract quantities from items (simplified)
    return {
      cementBags: Math.round(structural.items.find((i) => i.name.includes("Concrete"))?.quantity || 0) * 8,
      sandCuM: Math.round(structural.items.find((i) => i.name.includes("Concrete"))?.quantity || 0) * 0.5,
      gravelCuM: Math.round(structural.items.find((i) => i.name.includes("Concrete"))?.quantity || 0),
      rebarKg: Math.round(structural.items.find((i) => i.name.includes("Rebar"))?.quantity || 0),
      chbPcs: Math.round(structural.items.find((i) => i.name.includes("CHB"))?.quantity || 0),
      roofingSqm: Math.round(architectural.items.find((i) => i.name.includes("Roofing"))?.quantity || 0),
      tilesSqm: Math.round(architectural.items.find((i) => i.name.includes("Flooring"))?.quantity || 0),
      paintLiters: Math.round(architectural.items.find((i) => i.name.includes("Paint"))?.quantity || 0),
      wireMeters: Math.round(electrical.items.find((i) => i.name.includes("Wires"))?.quantity || 0),
      pipesMeters: Math.round(plumbing.items.find((i) => i.name.includes("Pipes"))?.quantity || 0),
    };
  }
}

// Singleton instance
export const estimatorV2 = new ConstructionEstimatorV2();

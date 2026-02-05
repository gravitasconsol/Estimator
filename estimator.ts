/**
 * Construction Estimator Engine - TypeScript Port
 * Based on Philippine construction prices 2025
 */

// ============================================================================
// PHILIPPINE CONSTRUCTION PRICES - 2025
// ============================================================================

export const PRICES: Record<string, number> = {
  // STRUCTURAL MATERIALS
  cement_40kg: 265,
  sand_cu_m: 1450,
  gravel_cu_m: 1350,
  chb_4in: 14,
  chb_6in: 22,
  rebar_10mm_kg: 52,
  rebar_12mm_kg: 55,
  rebar_16mm_kg: 58,
  rebar_20mm_kg: 62,
  tie_wire_kg: 65,

  // ROOFING
  roof_longspan_04mm: 410,
  roof_longspan_05mm: 512,
  roof_longspan_06mm: 614,
  roof_gi_corrugated: 268,
  roof_clay_tile: 28,
  roof_concrete_tile: 45,
  roof_tilespan: 550,
  gutter_metal: 450,
  downspout: 320,
  ridge_roll: 380,
  flashing: 420,

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

  // CEILING
  ceiling_gypsum: 285,
  ceiling_hardiflex: 245,
  ceiling_pvc: 385,
  ceiling_metal_furring: 145,

  // DOORS & WINDOWS
  door_panel_basic: 2850,
  door_panel_standard: 4850,
  door_panel_premium: 12500,
  door_jamb: 1450,
  door_knob_standard: 650,
  door_hinges: 85,
  window_sliding_standard: 2850,
  window_sliding_premium: 4850,

  // KITCHEN
  kitchen_sink_standard: 4850,
  kitchen_sink_premium: 12500,
  kitchen_faucet_standard: 2850,
  kitchen_faucet_premium: 6850,
  countertop_granite: 3850,
  countertop_quartz: 6250,
  kitchen_cabinet_standard: 8500,
  kitchen_cabinet_premium: 18500,
  range_hood_standard: 6850,
  range_hood_premium: 15850,

  // TOILET & BATH
  water_closet_basic: 3850,
  water_closet_standard: 6850,
  water_closet_premium: 18500,
  lavatory_basic: 1850,
  lavatory_standard: 3850,
  lavatory_premium: 8500,
  faucet_standard: 1850,
  faucet_premium: 4850,
  shower_set_basic: 1850,
  shower_set_standard: 3850,
  shower_set_premium: 9500,
  water_heater_standard: 12500,
  water_heater_premium: 28500,
  floor_drain: 285,
  exhaust_fan_standard: 1850,
  exhaust_fan_premium: 3850,
  bathroom_mirror_standard: 1850,

  // PLUMBING
  pvc_pipe_1_2: 125,
  pvc_pipe_3_4: 165,
  pvc_pipe_1: 245,
  pvc_pipe_2: 485,
  pipe_fittings: 125,
  gate_valve: 485,
  water_meter: 1850,
  water_tank_1000L: 12500,
  septic_tank: 28500,

  // ELECTRICAL
  wire_14_2: 28,
  wire_12_2: 38,
  conduit_pvc: 45,
  outlet_double: 95,
  switch_single: 55,
  led_downlight_standard: 385,
  led_downlight_premium: 850,
  panel_board_standard: 8500,
  breaker_20A: 285,
  breaker_main: 2850,
  electric_meter: 1850,

  // MISCELLANEOUS
  nails_kg: 85,
  screws_kg: 125,
  scaffolding_rental: 85,
  temporary_facilities: 150,
  site_cleanup: 45,
};

// ============================================================================
// QUALITY TIER MULTIPLIERS
// ============================================================================

export const QUALITY_MULTIPLIERS: Record<string, Record<string, number>> = {
  Basic: {
    structural: 1.0,
    finishes: 0.7,
    fixtures: 0.6,
    electrical: 0.7,
    plumbing: 0.7,
  },
  Standard: {
    structural: 1.0,
    finishes: 1.0,
    fixtures: 1.0,
    electrical: 1.0,
    plumbing: 1.0,
  },
  "Above Standard": {
    structural: 1.1,
    finishes: 1.4,
    fixtures: 1.6,
    electrical: 1.3,
    plumbing: 1.4,
  },
  Premium: {
    structural: 1.2,
    finishes: 2.2,
    fixtures: 3.0,
    electrical: 1.8,
    plumbing: 2.2,
  },
};

// ============================================================================
// CONSTANTS
// ============================================================================

export const CONSTANTS: Record<string, number> = {
  cement_per_cu_m: 7.5,
  sand_per_cu_m: 0.42,
  gravel_per_cu_m: 0.84,
  waste_factor: 1.1,
  chb_per_sqm: 12.5,
  chb_waste: 1.1,
  mortar_cement_per_sqm: 0.3,
  mortar_sand_per_sqm: 0.02,
  plaster_cement_per_sqm: 0.3,
  rebar_12mm_kg_m: 0.888,
  tile_waste: 1.15,
  tile_adhesive_per_sqm: 5,
  tile_grout_per_sqm: 0.2,
  paint_coverage: 12,
  primer_coverage: 15,
};

// ============================================================================
// TYPES
// ============================================================================

export type QualityTier = "Basic" | "Standard" | "Above Standard" | "Premium";

export interface HouseEstimateInput {
  floorArea: number;
  qualityTier: QualityTier;
  numFloors: number;
  numBedrooms: number;
  numBathrooms: number;
  hasKitchen: boolean;
  hasGarage: boolean;
}

export interface StructuralResult {
  concreteVol: number;
  cementBags: number;
  sandCuM: number;
  gravelCuM: number;
  rebarKg: number;
  tieWireKg: number;
  chbPcs: number;
  cost: number;
}

export interface ArchitecturalResult {
  roofingSqm: number;
  ceilingSqm: number;
  flooringSqm: number;
  paintSqm: number;
  doorsPcs: number;
  windowsPcs: number;
  cost: number;
}

export interface ElectricalResult {
  wire14_2M: number;
  wire12_2M: number;
  conduitPvcM: number;
  outletsPcs: number;
  switchesPcs: number;
  ledDownlightsPcs: number;
  panelBoardPcs: number;
  cost: number;
}

export interface PlumbingResult {
  pvcPipe12M: number;
  pvcPipe34M: number;
  pvcPipe1M: number;
  pipeFittingsPcs: number;
  waterClosetPcs: number;
  lavatoryPcs: number;
  showerSetPcs: number;
  waterHeaterPcs: number;
  cost: number;
}

export interface MiscellaneousResult {
  scaffoldingCost: number;
  temporaryFacilitiesCost: number;
  siteCleanupCost: number;
  cost: number;
}

export interface HouseEstimateResult {
  projectType: string;
  qualityTier: QualityTier;
  floorArea: number;
  numFloors: number;
  totalArea: number;
  numBedrooms: number;
  numBathrooms: number;
  hasKitchen: boolean;
  hasGarage: boolean;
  structural: StructuralResult;
  architectural: ArchitecturalResult;
  electrical: ElectricalResult;
  plumbing: PlumbingResult;
  miscellaneous: MiscellaneousResult;
  totalCost: number;
  costPerSqm: number;
  date: string;
}

// ============================================================================
// ESTIMATOR ENGINE
// ============================================================================

export class ConstructionEstimator {
  private calcConcreteCost(volume: number): [number, number, number, number] {
    const cement = volume * CONSTANTS["cement_per_cu_m"];
    const sand = volume * CONSTANTS["sand_per_cu_m"];
    const gravel = volume * CONSTANTS["gravel_per_cu_m"];
    const cost =
      cement * PRICES["cement_40kg"] +
      sand * PRICES["sand_cu_m"] +
      gravel * PRICES["gravel_cu_m"];
    return [cement, sand, gravel, cost];
  }

  private calculateStructural(area: number, mult: Record<string, number>): StructuralResult {
    // Foundation
    const foundationVol = area * 0.08 * CONSTANTS["waste_factor"];
    const [cementFnd, sandFnd, gravelFnd, costFnd] = this.calcConcreteCost(foundationVol);

    // Floor slab
    const slabVol = area * 0.12 * CONSTANTS["waste_factor"];
    const [cementSlab, sandSlab, gravelSlab, costSlab] = this.calcConcreteCost(slabVol);

    // Columns and beams
    const columnVol = area * 0.05 * CONSTANTS["waste_factor"];
    const [cementCol, sandCol, gravelCol, costCol] = this.calcConcreteCost(columnVol);

    // Rebar
    const rebarKg = area * 12 * mult["structural"];
    const rebarCost = rebarKg * PRICES["rebar_12mm_kg"];

    // Tie wire
    const tieWire = area * 0.3;
    const tieCost = tieWire * PRICES["tie_wire_kg"];

    // CHB walls
    const wallArea = area * 2.5;
    const chbCount = wallArea * CONSTANTS["chb_per_sqm"] * CONSTANTS["chb_waste"];
    const chbCost = chbCount * PRICES["chb_6in"];

    // Mortar
    const mortarCement = wallArea * CONSTANTS["mortar_cement_per_sqm"] * CONSTANTS["waste_factor"];
    const mortarSand = wallArea * CONSTANTS["mortar_sand_per_sqm"] * CONSTANTS["waste_factor"];
    const mortarCost =
      mortarCement * PRICES["cement_40kg"] + mortarSand * PRICES["sand_cu_m"];

    const totalCement = cementFnd + cementSlab + cementCol + mortarCement;
    const totalSand = sandFnd + sandSlab + sandCol + mortarSand;
    const totalGravel = gravelFnd + gravelSlab + gravelCol;
    const totalCost = costFnd + costSlab + costCol + rebarCost + tieCost + chbCost + mortarCost;

    return {
      concreteVol: Math.round((foundationVol + slabVol + columnVol) * 100) / 100,
      cementBags: Math.round(totalCement),
      sandCuM: Math.round(totalSand * 100) / 100,
      gravelCuM: Math.round(totalGravel * 100) / 100,
      rebarKg: Math.round(rebarKg),
      tieWireKg: Math.round(tieWire * 10) / 10,
      chbPcs: Math.round(chbCount),
      cost: Math.round(totalCost * 100) / 100,
    };
  }

  private calculateArchitectural(
    area: number,
    bedrooms: number,
    bathrooms: number,
    hasKitchen: boolean,
    _hasGarage: boolean,
    mult: Record<string, number>
  ): ArchitecturalResult {
    // Roofing
    const roofingArea = area * 1.3;
    const roofingCost = roofingArea * PRICES["roof_longspan_05mm"] * mult["finishes"];

    // Gutters and downspouts
    const gutterCost = area * 0.15 * PRICES["gutter_metal"];
    const downspoutCost = area * 0.08 * PRICES["downspout"];

    // Ceiling
    const ceilingArea = area * 0.9;
    const ceilingCost = ceilingArea * PRICES["ceiling_gypsum"] * mult["finishes"];

    // Flooring
    const flooringArea = area;
    let tilePrice = PRICES["tiles_40x40"];
    if (mult["finishes"] >= 2.0) tilePrice = PRICES["tiles_60x60_premium"];
    else if (mult["finishes"] >= 1.4) tilePrice = PRICES["tiles_60x60"];
    const flooringCost = flooringArea * tilePrice * CONSTANTS["tile_waste"];

    // Tile adhesive and grout
    const adhesiveCost = flooringArea * CONSTANTS["tile_adhesive_per_sqm"] * PRICES["tile_adhesive"];
    const groutCost = flooringArea * CONSTANTS["tile_grout_per_sqm"] * PRICES["tile_grout"];

    // Paint
    const paintArea = area * 3.5;
    let paintPrice = PRICES["paint_latex_standard"];
    if (mult["finishes"] >= 2.0) paintPrice = PRICES["paint_latex_premium"];
    else if (mult["finishes"] <= 0.8) paintPrice = PRICES["paint_latex_basic"];
    const paintCost = (paintArea / CONSTANTS["paint_coverage"]) * paintPrice;
    const primerCost = (paintArea / CONSTANTS["primer_coverage"]) * PRICES["paint_primer"];

    // Doors
    const doorsCount = bedrooms + bathrooms + (hasKitchen ? 1 : 0) + 1;
    let doorPrice = PRICES["door_panel_standard"];
    if (mult["finishes"] >= 2.0) doorPrice = PRICES["door_panel_premium"];
    else if (mult["finishes"] <= 0.8) doorPrice = PRICES["door_panel_basic"];
    const doorsCost = doorsCount * (doorPrice + PRICES["door_jamb"] + PRICES["door_knob_standard"] + PRICES["door_hinges"] * 3);

    // Windows
    const windowsCount = bedrooms + 1;
    let windowPrice = PRICES["window_sliding_standard"];
    if (mult["finishes"] >= 1.6) windowPrice = PRICES["window_sliding_premium"];
    const windowsCost = windowsCount * windowPrice;

    const totalCost = roofingCost + gutterCost + downspoutCost + ceilingCost + flooringCost + adhesiveCost + groutCost + paintCost + primerCost + doorsCost + windowsCost;

    return {
      roofingSqm: Math.round(roofingArea * 100) / 100,
      ceilingSqm: Math.round(ceilingArea * 100) / 100,
      flooringSqm: Math.round(flooringArea * 100) / 100,
      paintSqm: Math.round(paintArea * 100) / 100,
      doorsPcs: doorsCount,
      windowsPcs: windowsCount,
      cost: Math.round(totalCost * 100) / 100,
    };
  }

  private calculateElectrical(
    area: number,
    bedrooms: number,
    bathrooms: number,
    hasKitchen: boolean,
    hasGarage: boolean,
    mult: Record<string, number>
  ): ElectricalResult {
    // Wire lengths
    const wire14_2M = area * 4;
    const wire12_2M = area * 2;
    const conduitPvcM = area * 3;

    // Outlets and switches
    const outletsCount = bedrooms * 3 + bathrooms * 2 + (hasKitchen ? 4 : 0) + (hasGarage ? 2 : 0) + 4;
    const switchesCount = bedrooms * 2 + bathrooms + (hasKitchen ? 2 : 0) + (hasGarage ? 1 : 0) + 3;

    // Lighting
    const ledDownlightsCount = Math.round(area / 8);

    // Panel and breakers
    const panelBoardCount = 1;
    const breakerCount = Math.round(outletsCount / 3) + 2;

    // Costs
    const wire14Cost = wire14_2M * PRICES["wire_14_2"];
    const wire12Cost = wire12_2M * PRICES["wire_12_2"];
    const conduitCost = conduitPvcM * PRICES["conduit_pvc"];
    const outletsCost = outletsCount * PRICES["outlet_double"];
    const switchesCost = switchesCount * PRICES["switch_single"];
    let ledPrice = PRICES["led_downlight_standard"];
    if (mult["electrical"] >= 1.8) ledPrice = PRICES["led_downlight_premium"];
    const ledCost = ledDownlightsCount * ledPrice;
    const panelCost = PRICES["panel_board_standard"] + breakerCount * PRICES["breaker_20A"] + PRICES["breaker_main"];

    const totalCost = wire14Cost + wire12Cost + conduitCost + outletsCost + switchesCost + ledCost + panelCost;

    return {
      wire14_2M: Math.round(wire14_2M),
      wire12_2M: Math.round(wire12_2M),
      conduitPvcM: Math.round(conduitPvcM),
      outletsPcs: outletsCount,
      switchesPcs: switchesCount,
      ledDownlightsPcs: ledDownlightsCount,
      panelBoardPcs: panelBoardCount,
      cost: Math.round(totalCost * 100) / 100,
    };
  }

  private calculatePlumbing(
    bathrooms: number,
    hasKitchen: boolean,
    mult: Record<string, number>
  ): PlumbingResult {
    // Pipe lengths
    const pvcPipe12M = bathrooms * 8 + (hasKitchen ? 5 : 0);
    const pvcPipe34M = bathrooms * 6 + (hasKitchen ? 4 : 0);
    const pvcPipe1M = bathrooms * 3;
    const fittingsCount = bathrooms * 8 + (hasKitchen ? 4 : 0);

    // Fixtures
    const wcCount = bathrooms;
    const lavatoryCount = bathrooms;
    const showerCount = bathrooms;
    const waterHeaterCount = bathrooms >= 2 ? 1 : 0;

    // Costs
    const pipe12Cost = pvcPipe12M * PRICES["pvc_pipe_1_2"];
    const pipe34Cost = pvcPipe34M * PRICES["pvc_pipe_3_4"];
    const pipe1Cost = pvcPipe1M * PRICES["pvc_pipe_1"];
    const fittingsCost = fittingsCount * PRICES["pipe_fittings"];

    let wcPrice = PRICES["water_closet_standard"];
    let lavatoryPrice = PRICES["lavatory_standard"];
    let showerPrice = PRICES["shower_set_standard"];
    let faucetPrice = PRICES["faucet_standard"];

    if (mult["plumbing"] >= 2.0) {
      wcPrice = PRICES["water_closet_premium"];
      lavatoryPrice = PRICES["lavatory_premium"];
      showerPrice = PRICES["shower_set_premium"];
      faucetPrice = PRICES["faucet_premium"];
    } else if (mult["plumbing"] >= 1.4) {
      wcPrice = PRICES["water_closet_standard"];
      lavatoryPrice = PRICES["lavatory_standard"];
      showerPrice = PRICES["shower_set_standard"];
      faucetPrice = PRICES["faucet_standard"];
    } else {
      wcPrice = PRICES["water_closet_basic"];
      lavatoryPrice = PRICES["lavatory_basic"];
      showerPrice = PRICES["shower_set_basic"];
    }

    const wcCost = wcCount * wcPrice;
    const lavatoryCost = lavatoryCount * lavatoryPrice;
    const showerCost = showerCount * showerPrice;
    const faucetCost = (bathrooms + (hasKitchen ? 1 : 0)) * faucetPrice;
    const waterHeaterCost = waterHeaterCount * (mult["plumbing"] >= 2.0 ? PRICES["water_heater_premium"] : PRICES["water_heater_standard"]);
    const floorDrainCost = bathrooms * PRICES["floor_drain"];
    const exhaustFanCost = bathrooms * (mult["plumbing"] >= 2.0 ? PRICES["exhaust_fan_premium"] : PRICES["exhaust_fan_standard"]);

    const totalCost = pipe12Cost + pipe34Cost + pipe1Cost + fittingsCost + wcCost + lavatoryCost + showerCost + faucetCost + waterHeaterCost + floorDrainCost + exhaustFanCost;

    return {
      pvcPipe12M: Math.round(pvcPipe12M),
      pvcPipe34M: Math.round(pvcPipe34M),
      pvcPipe1M: Math.round(pvcPipe1M),
      pipeFittingsPcs: fittingsCount,
      waterClosetPcs: wcCount,
      lavatoryPcs: lavatoryCount,
      showerSetPcs: showerCount,
      waterHeaterPcs: waterHeaterCount,
      cost: Math.round(totalCost * 100) / 100,
    };
  }

  private calculateMiscellaneous(area: number): MiscellaneousResult {
    const scaffoldingCost = area * PRICES["scaffolding_rental"];
    const tempFacilitiesCost = area * PRICES["temporary_facilities"];
    const siteCleanupCost = area * PRICES["site_cleanup"];

    const totalCost = scaffoldingCost + tempFacilitiesCost + siteCleanupCost;

    return {
      scaffoldingCost: Math.round(scaffoldingCost * 100) / 100,
      temporaryFacilitiesCost: Math.round(tempFacilitiesCost * 100) / 100,
      siteCleanupCost: Math.round(siteCleanupCost * 100) / 100,
      cost: Math.round(totalCost * 100) / 100,
    };
  }

  public calculateHouse(input: HouseEstimateInput): HouseEstimateResult {
    const totalArea = input.floorArea * input.numFloors;
    const mult = QUALITY_MULTIPLIERS[input.qualityTier] || QUALITY_MULTIPLIERS["Standard"];

    // STRUCTURAL WORKS
    const structural = this.calculateStructural(totalArea, mult);

    // ARCHITECTURAL WORKS
    const architectural = this.calculateArchitectural(
      totalArea,
      input.numBedrooms,
      input.numBathrooms,
      input.hasKitchen,
      input.hasGarage,
      mult
    );

    // ELECTRICAL WORKS
    const electrical = this.calculateElectrical(
      totalArea,
      input.numBedrooms,
      input.numBathrooms,
      input.hasKitchen,
      input.hasGarage,
      mult
    );

    // PLUMBING WORKS
    const plumbing = this.calculatePlumbing(input.numBathrooms, input.hasKitchen, mult);

    // MISCELLANEOUS
    const miscellaneous = this.calculateMiscellaneous(totalArea);

    // TOTALS
    const totalCost = structural.cost + architectural.cost + electrical.cost + plumbing.cost + miscellaneous.cost;

    return {
      projectType: "Residential House",
      qualityTier: input.qualityTier,
      floorArea: input.floorArea,
      numFloors: input.numFloors,
      totalArea: totalArea,
      numBedrooms: input.numBedrooms,
      numBathrooms: input.numBathrooms,
      hasKitchen: input.hasKitchen,
      hasGarage: input.hasGarage,
      structural,
      architectural,
      electrical,
      plumbing,
      miscellaneous,
      totalCost: Math.round(totalCost * 100) / 100,
      costPerSqm: totalArea > 0 ? Math.round((totalCost / totalArea) * 100) / 100 : 0,
      date: new Date().toISOString(),
    };
  }
}

// Singleton instance
export const estimator = new ConstructionEstimator();

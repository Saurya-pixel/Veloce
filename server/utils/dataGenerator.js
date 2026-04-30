import { getBasePrice } from './pricingData.js';

// Deterministic seeded random number generator
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Generate a seed from make, model, year
function generateSeed(make, model, year) {
  const str = `${make}${model}${year}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

// ─── Vehicle Category System ─────────────────────────────────────────────────
// Different vehicle categories depreciate at very different rates.
// A Lamborghini Huracan barely loses value, while a Nissan Sentra drops fast.

const EXOTIC_BRANDS = ['ferrari', 'lamborghini', 'mclaren', 'bugatti', 'pagani', 'koenigsegg'];
const EXOTIC_MODELS = [
  'porsche|911 gt3', 'porsche|911 gt3 rs', 'porsche|911 turbo', 'porsche|911 turbo s',
  'porsche|718 cayman gt4', 'porsche|718 spyder rs',
  'mercedes-benz|amg gt', 'mercedes-benz|amg gt 63',
  'bmw|m3', 'bmw|m4', 'bmw|m5', 'bmw|m8', 'bmw|xm',
  'audi|r8', 'audi|rs e-tron gt',
  'chevrolet|corvette z06',
  'dodge|challenger hellcat', 'dodge|durango hellcat',
  'ford|mustang dark horse',
  'cadillac|ct4-v blackwing', 'cadillac|ct5-v blackwing', 'cadillac|celestiq',
  'acura|nsx',
];

const LUXURY_BRANDS = ['porsche', 'genesis', 'lexus', 'lincoln', 'cadillac', 'land rover'];
const PREMIUM_BRANDS = ['bmw', 'mercedes-benz', 'audi', 'volvo', 'acura', 'infiniti', 'tesla'];
const TRUCK_MODELS = [
  'f-150', 'silverado', 'sierra', 'tundra', 'tacoma', 'frontier', 'colorado',
  'canyon', 'ridgeline', 'gladiator', 'ranger', 'maverick', 'titan',
  '1500', '2500', '3500', 'ram',
  'wrangler', 'bronco', '4runner', 'defender',
];

function getVehicleCategory(make, model) {
  const brandLower = make.toLowerCase().trim();
  const modelLower = model.toLowerCase().trim();
  const key = `${brandLower}|${modelLower}`;

  // Check exotic models first (specific trims that hold extreme value)
  if (EXOTIC_BRANDS.includes(brandLower)) return 'exotic';
  if (EXOTIC_MODELS.some(em => key.startsWith(em) || key === em)) return 'exotic';

  // Check if it's a truck/off-road (these hold value very well)
  if (TRUCK_MODELS.some(t => modelLower.includes(t))) return 'truck';

  // Check luxury brands
  if (LUXURY_BRANDS.includes(brandLower)) return 'luxury';

  // Check premium brands
  if (PREMIUM_BRANDS.includes(brandLower)) return 'premium';

  return 'mainstream';
}

// ─── Category-Specific Depreciation Curves ───────────────────────────────────
// Values represent what percentage of original MSRP a vehicle retains at each age.
// Based on real-world market data from auction houses and dealer listings.

const DEPRECIATION_CURVES = {
  // Exotics: Supercars barely depreciate. A 10-year Huracan still fetches 85-95% of MSRP.
  exotic: {
    0: 1.10,  // 2026: new car premium / markup over MSRP
    1: 1.02,  // 2025: holds or slightly above MSRP
    2: 0.97,  // 2024: ~3% off
    3: 0.94,  // 2023: ~6% off
    4: 0.91,  // 2022: ~9% off
    5: 0.89,  // 2021: ~11% off
    6: 0.87,  // 2020: ~13% off
    7: 0.86,  // 2019: ~14% off
    8: 0.85,  // 2018: ~15% off
    9: 0.85,  // 2017: ~15% off (floor — exotics plateau)
    10: 0.85, // 2016: ~15% off
    floor: 0.80,
    annualDecay: 0.005, // 0.5% per year after 10
  },

  // Trucks/Off-road: Hold value extremely well due to demand.
  truck: {
    0: 1.05,
    1: 0.94,
    2: 0.88,
    3: 0.83,
    4: 0.78,
    5: 0.74,
    6: 0.70,
    7: 0.66,
    8: 0.63,
    9: 0.60,
    10: 0.57,
    floor: 0.30,
    annualDecay: 0.025,
  },

  // Luxury: Premium brands with good retention (Porsche, Lexus, etc.)
  luxury: {
    0: 1.05,
    1: 0.92,
    2: 0.85,
    3: 0.79,
    4: 0.74,
    5: 0.69,
    6: 0.65,
    7: 0.61,
    8: 0.57,
    9: 0.54,
    10: 0.51,
    floor: 0.25,
    annualDecay: 0.025,
  },

  // Premium: BMW, Mercedes, Audi — faster depreciation than true luxury
  premium: {
    0: 1.03,
    1: 0.88,
    2: 0.80,
    3: 0.73,
    4: 0.67,
    5: 0.62,
    6: 0.57,
    7: 0.53,
    8: 0.49,
    9: 0.46,
    10: 0.43,
    floor: 0.20,
    annualDecay: 0.025,
  },

  // Mainstream: Standard mass-market vehicles
  mainstream: {
    0: 1.02,
    1: 0.87,
    2: 0.78,
    3: 0.70,
    4: 0.63,
    5: 0.57,
    6: 0.52,
    7: 0.47,
    8: 0.43,
    9: 0.39,
    10: 0.36,
    floor: 0.15,
    annualDecay: 0.03,
  },
};

// Brand-level fine-tuning within each category
const BRAND_RETENTION = {
  'toyota': 1.10,
  'honda': 1.07,
  'subaru': 1.06,
  'jeep': 1.05,
  'ford': 1.00,
  'chevrolet': 0.97,
  'ram': 1.02,
  'gmc': 0.99,
  'tesla': 0.93,
  'porsche': 1.08,
  'land rover': 0.92,
  'bmw': 0.97,
  'mercedes-benz': 0.98,
  'audi': 0.96,
  'lexus': 1.08,
  'acura': 1.04,
  'genesis': 0.95,
  'infiniti': 0.93,
  'volvo': 0.94,
  'lincoln': 0.93,
  'cadillac': 0.95,
  'buick': 0.93,
  'kia': 1.03,
  'hyundai': 1.02,
  'mazda': 1.05,
  'nissan': 0.95,
  'volkswagen': 0.95,
  'mitsubishi': 0.90,
  'dodge': 0.95,
  'chrysler': 0.92,
  'ferrari': 1.05,
  'lamborghini': 1.05,
  'mclaren': 0.98,
};

// EV models that depreciate faster than their category average
const EV_MODELS = [
  'model 3', 'model y', 'model s', 'model x', 'cybertruck',
  'ioniq 5', 'ioniq 6', 'ev6', 'ev9', 'id.4', 'mustang mach-e',
  'f-150 lightning', 'blazer ev', 'equinox ev', 'bolt ev',
  'ariya', 'leaf', 'lyriq', 'hummer ev', 'r1t', 'r1s',
  'prologue', 'solterra', 'bz4x', 'mx-30', 'taycan',
  'e-tron', 'e-tron gt', 'rs e-tron gt', 'q4 e-tron',
  'eqs', 'eqe', 'i4', 'ix', 'i7',
];

// ─── Core Depreciation Calculator ────────────────────────────────────────────

export function getDepreciationBreakdown(make, model, year) {
  const currentYear = 2026;
  const age = currentYear - year;
  const brandLower = make.toLowerCase().trim();
  const modelLower = model.toLowerCase().trim();

  // Determine vehicle category
  const category = getVehicleCategory(make, model);
  const curve = DEPRECIATION_CURVES[category];

  // Get base multiplier from category-specific curve
  let baseMultiplier;
  if (age <= 10) {
    baseMultiplier = curve[age] !== undefined ? curve[age] : curve[10];
  } else {
    // Beyond 10 years: decay slowly from the 10-year value
    baseMultiplier = Math.max(curve.floor, curve[10] - (age - 10) * curve.annualDecay);
  }

  // Year depreciation percentage
  const yearDepreciationPct = Math.round((1 - baseMultiplier) * 100);

  // Brand retention fine-tuning
  const brandRetention = BRAND_RETENTION[brandLower] || 1.0;
  const brandAdjustmentPct = Math.round((brandRetention - 1) * 100);

  let finalMultiplier = baseMultiplier * brandRetention;

  // EV adjustment — EVs depreciate about 8% faster than ICE counterparts
  let evAdjustmentPct = 0;
  if (EV_MODELS.some(ev => modelLower.includes(ev))) {
    finalMultiplier *= 0.92;
    evAdjustmentPct = -8;
  }

  // Clamp: no vehicle should appreciate more than 15% or depreciate below category floor
  finalMultiplier = Math.min(finalMultiplier, 1.15);
  finalMultiplier = Math.max(finalMultiplier, curve.floor * 0.9);

  return {
    category,
    baseMultiplier,
    brandRetention,
    evAdjustment: 0.92,
    finalMultiplier,
    yearDepreciationPct,
    brandAdjustmentPct,
    evAdjustmentPct,
    isEV: evAdjustmentPct !== 0,
  };
}

// Get depreciation multiplier for year
export function getYearMultiplier(year, make = '', model = '') {
  const breakdown = getDepreciationBreakdown(make, model, year);
  return breakdown.finalMultiplier;
}

// Get pricing multipliers based on year
function getYearPricingMultipliers(year) {
  const currentYear = 2026;
  const age = currentYear - year;

  if (age <= 0) {
    return { invoice: 0.94, avgPaid: 0.97, markup: 4 };
  } else if (age <= 2) {
    return { invoice: 0.93, avgPaid: 0.96, markup: 3 };
  } else if (age <= 4) {
    return { invoice: 0.91, avgPaid: 0.94, markup: 2 };
  } else {
    return { invoice: 0.88, avgPaid: 0.92, markup: 1 };
  }
}

export function generatePricingData(make, model, year, basePrice, confidence) {
  const seed = generateSeed(make, model, year);

  // Use provided MSRP with correct category-based depreciation
  const yearMultiplier = getYearMultiplier(year, make, model);
  const msrp = Math.round(basePrice * yearMultiplier);

  const yearPricingMults = getYearPricingMultipliers(year);

  const randomInvoiceVariation = 1 + (seededRandom(seed + 1) - 0.5) * 0.02;
  const randomPaidVariation = 1 + (seededRandom(seed + 2) - 0.5) * 0.02;

  const invoicePrice = Math.round(msrp * yearPricingMults.invoice * randomInvoiceVariation);
  const averagePaidPrice = Math.round(msrp * yearPricingMults.avgPaid * randomPaidVariation);

  const markupVariation = yearPricingMults.markup - 1 + seededRandom(seed + 3) * 2;
  const dealerMarkup = Math.round((markupVariation) * 100) / 100;

  let incentiveBase = 500;
  const yearAge = year < 2024 ? (2026 - year) * 300 : 0;
  const incentives = Math.round(incentiveBase + yearAge + seededRandom(seed + 4) * 3000);

  return {
    msrp,
    invoicePrice,
    averagePaidPrice,
    dealerMarkup,
    incentives,
    confidence
  };
}

// ─── Trend Data Generator (Now uses depreciated prices) ──────────────────────

export function generateTrendData(make, model, year) {
  const seed = generateSeed(make, model, year);
  const currentYear = 2026;
  const age = currentYear - year;

  // Get the DEPRECIATED base price for this vehicle, not the original MSRP
  const { msrp: originalMsrp } = getBasePrice(make, model);
  const yearMultiplier = getYearMultiplier(year, make, model);
  const depreciatedPrice = Math.round(originalMsrp * yearMultiplier);

  const trends = [];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  for (let i = 0; i < 13; i++) {
    // Month-over-month price variation (±2% random walk around the depreciated price)
    const randomWalk = 1 + (seededRandom(seed + i * 100) - 0.5) * 0.04;

    // Slight seasonal variation — used cars tend to be cheaper in winter
    let seasonalFactor = 1.0;
    if (age > 0) {
      seasonalFactor = 1 + Math.sin(((i + 3) / 12) * Math.PI * 2) * 0.015;
    }

    // Gradual depreciation over the 13-month window for used cars
    const monthlyDepreciation = age > 0 ? 1 - (i * 0.002) : 1.0; // ~0.2% per month

    const avgPrice = Math.round(depreciatedPrice * randomWalk * seasonalFactor * monthlyDepreciation);

    // Incentives scale with age
    const baseIncentive = Math.max(500, 1500 + age * 400);
    const incentive = Math.round(baseIncentive + seededRandom(seed + i * 100 + 50) * 2000);

    const monthIndex = i % 12;
    trends.push({
      month: months[monthIndex],
      avgPrice,
      incentive
    });
  }

  return trends;
}

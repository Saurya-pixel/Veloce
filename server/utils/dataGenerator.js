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

// Brand-specific depreciation retention factors
const BRAND_RETENTION = {
  'toyota': 1.08,
  'honda': 1.06,
  'subaru': 1.05,
  'jeep': 1.03,
  'ford': 1.00,
  'chevrolet': 0.98,
  'ram': 1.00,
  'gmc': 0.98,
  'tesla': 0.95,
  'porsche': 1.12,
  'land rover': 0.88,
  'bmw': 0.92,
  'mercedes-benz': 0.93,
  'audi': 0.91,
  'lexus': 1.10,
  'acura': 1.04,
  'genesis': 0.96,
  'infiniti': 0.90,
  'volvo': 0.89,
  'lincoln': 0.90,
  'cadillac': 0.92,
  'buick': 0.93,
  'kia': 1.02,
  'hyundai': 1.01,
  'mazda': 1.04,
  'nissan': 0.94,
  'volkswagen': 0.93,
  'mitsubishi': 0.88,
  'dodge': 0.92,
  'chrysler': 0.90,
  'ferrari': 1.25,
  'lamborghini': 1.20,
};

// EV models that depreciate faster
const EV_MODELS = [
  'model 3', 'model y', 'model s', 'model x', 'cybertruck',
  'ioniq 5', 'ioniq 6', 'ev6', 'ev9', 'id.4', 'mustang mach-e',
  'f-150 lightning', 'blazer ev', 'equinox ev', 'bolt ev',
  'ariya', 'leaf', 'lyriq', 'hummer ev', 'r1t', 'r1s',
  'prologue', 'solterra', 'bz4x', 'mx-30', 'taycan',
  'e-tron', 'e-tron gt', 'rs e-tron gt', 'q4 e-tron',
  'eqs', 'eqe', 'i4', 'ix', 'i7',
];

// High-end cars that don't depreciate normally or appreciate
const NO_DEPRECIATION_MODELS = [
  'porsche|911', 'porsche|911 gt3', 'porsche|911 turbo s',
  'ferrari|sf90', 'ferrari|296 gtb', 'ferrari|purosangue',
  'lamborghini|revuelto', 'lamborghini|huracan sto',
];

// Calculate total depreciation multiplier including all factors
export function getDepreciationBreakdown(make, model, year) {
  const currentYear = 2026;
  const age = currentYear - year;

  // Base depreciation curve
  const depreciationCurve = {
    0: 1.05,  // 2026: new car premium
    1: 0.90,  // 2025: ~10% off new
    2: 0.82,  // 2024: ~18% off
    3: 0.75,  // 2023: ~25% off
    4: 0.68,  // 2022: ~32% off
    5: 0.62,  // 2021: ~38% off
    6: 0.57,  // 2020: ~43% off
    7: 0.52,  // 2019: ~48% off
    8: 0.47,  // 2018: ~53% off
    9: 0.43,  // 2017: ~57% off
    10: 0.39, // 2016: ~61% off
  };

  let baseMultiplier = depreciationCurve[age];
  if (baseMultiplier === undefined) {
    // For cars older than 10 years
    baseMultiplier = Math.max(0.20, 0.39 - (age - 10) * 0.025);
  }

  // Year depreciation percentage
  const yearDepreciationPct = Math.round((1 - baseMultiplier) * 100);

  // Brand retention factor
  const brandLower = make.toLowerCase().trim();
  const brandRetention = BRAND_RETENTION[brandLower] || 1.0;
  const brandAdjustmentPct = Math.round((brandRetention - 1) * 100);

  let finalMultiplier = baseMultiplier * brandRetention;

  // EV adjustment
  let evAdjustmentPct = 0;
  const modelLower = model.toLowerCase();
  if (EV_MODELS.some(ev => modelLower.includes(ev))) {
    finalMultiplier *= 0.93;
    evAdjustmentPct = -7;
  }

  // High-end car exception - no negative depreciation
  const key = `${brandLower}|${modelLower}`;
  if (NO_DEPRECIATION_MODELS.includes(key)) {
    finalMultiplier = Math.max(finalMultiplier, 1.0);
  }

  return {
    baseMultiplier,
    brandRetention,
    evAdjustment: 0.93,
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
    // New cars
    return { invoice: 0.94, avgPaid: 0.97, markup: 4 };
  } else if (age <= 2) {
    // 1-2 year old
    return { invoice: 0.89, avgPaid: 0.93, markup: 3 };
  } else if (age <= 4) {
    // 3-4 year old
    return { invoice: 0.85, avgPaid: 0.88, markup: 2 };
  } else {
    // 5+ year old
    return { invoice: 0.80, avgPaid: 0.84, markup: 1 };
  }
}

export function generatePricingData(make, model, year, basePrice, confidence) {
  const seed = generateSeed(make, model, year);

  // Use provided MSRP (from lookup table) with correct depreciation
  const yearMultiplier = getYearMultiplier(year, make, model);
  const msrp = Math.round(basePrice * yearMultiplier);

  // Get year-based pricing multipliers
  const yearPricingMults = getYearPricingMultipliers(year);

  // Add slight random variation to invoice/paid prices
  const randomInvoiceVariation = 1 + (seededRandom(seed + 1) - 0.5) * 0.02; // ±1%
  const randomPaidVariation = 1 + (seededRandom(seed + 2) - 0.5) * 0.02; // ±1%

  const invoicePrice = Math.round(msrp * yearPricingMults.invoice * randomInvoiceVariation);
  const averagePaidPrice = Math.round(msrp * yearPricingMults.avgPaid * randomPaidVariation);

  // Dealer markup with some randomness
  const markupVariation = yearPricingMults.markup - 1 + seededRandom(seed + 3) * 2;
  const dealerMarkup = Math.round((markupVariation) * 100) / 100;

  // Incentives: higher for older models, lower for new models
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

export function generateTrendData(make, model, year) {
  const seed = generateSeed(make, model, year);

  // Get base MSRP for this vehicle
  const { msrp: basePrice } = getBasePrice(make, model);

  const trends = [];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  for (let i = 0; i < 13; i++) {
    // Gentle price variation seeded deterministically (±1.5% random walk)
    const randomWalk = 1 + (seededRandom(seed + i * 100) - 0.5) * 0.03; // ±1.5%

    // Slight seasonal variation (very subtle for used cars, none for new)
    let seasonalFactor = 1.0;
    if (year < 2024) {
      // Older cars have minimal seasonal variation
      seasonalFactor = 1 + Math.sin((i / 12) * Math.PI * 2) * 0.02;
    }

    const avgPrice = Math.round(basePrice * randomWalk * seasonalFactor);

    // Incentives: older cars get more incentives
    const yearAge = 2026 - year;
    const baseIncentive = Math.max(500, 1500 + yearAge * 300);
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

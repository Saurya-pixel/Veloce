// Model introduction years lookup table
// Format: "make|model" (lowercase) -> first year sold in US
export const MODEL_START_YEARS = {
  // AUDI
  "audi|a3": 2006,
  "audi|a4": 1997,
  "audi|a5": 2008,
  "audi|a6": 1995,
  "audi|a7": 2012,
  "audi|a8": 1997,
  "audi|q3": 2015,
  "audi|q4 e-tron": 2022,
  "audi|q5": 2009,
  "audi|q7": 2007,
  "audi|q8": 2019,
  "audi|e-tron": 2019,
  "audi|e-tron gt": 2022,
  "audi|rs e-tron gt": 2022,
  "audi|rs3": 2022,
  "audi|rs5": 2018,
  "audi|rs6": 2021,
  "audi|rs7": 2021,
  "audi|s3": 2015,
  "audi|s4": 2000,
  "audi|s5": 2008,
  "audi|tt": 2000,
  "audi|r8": 2008,

  // BMW
  "bmw|2 series": 2014,
  "bmw|3 series": 1977,
  "bmw|4 series": 2014,
  "bmw|5 series": 1975,
  "bmw|7 series": 1978,
  "bmw|8 series": 2019,
  "bmw|x1": 2013,
  "bmw|x2": 2018,
  "bmw|x3": 2004,
  "bmw|x4": 2015,
  "bmw|x5": 2000,
  "bmw|x6": 2008,
  "bmw|x7": 2019,
  "bmw|m2": 2016,
  "bmw|m3": 1988,
  "bmw|m4": 2015,
  "bmw|m5": 1988,
  "bmw|m8": 2020,
  "bmw|ix": 2022,
  "bmw|i4": 2022,
  "bmw|i7": 2023,
  "bmw|z4": 2003,

  // MERCEDES-BENZ
  "mercedes-benz|a-class": 2019,
  "mercedes-benz|c-class": 1994,
  "mercedes-benz|e-class": 1994,
  "mercedes-benz|s-class": 1993,
  "mercedes-benz|cla": 2014,
  "mercedes-benz|cls": 2006,
  "mercedes-benz|gla": 2015,
  "mercedes-benz|glb": 2020,
  "mercedes-benz|glc": 2016,
  "mercedes-benz|gle": 2016,
  "mercedes-benz|gls": 2017,
  "mercedes-benz|g-class": 2002,
  "mercedes-benz|eqs": 2022,
  "mercedes-benz|eqe": 2023,
  "mercedes-benz|amg gt": 2016,
  "mercedes-benz|sl": 2022,

  // PORSCHE
  "porsche|911": 1965,
  "porsche|718 cayman": 2017,
  "porsche|718 boxster": 2017,
  "porsche|cayenne": 2003,
  "porsche|macan": 2015,
  "porsche|panamera": 2010,
  "porsche|taycan": 2020,
  "porsche|taycan cross turismo": 2022,
  "porsche|918 spyder": 2013,
  "porsche|carrera gt": 2004,

  // TESLA
  "tesla|model s": 2013,
  "tesla|model 3": 2018,
  "tesla|model x": 2016,
  "tesla|model y": 2020,
  "tesla|cybertruck": 2024,

  // TOYOTA
  "toyota|camry": 1983,
  "toyota|corolla": 1968,
  "toyota|rav4": 1996,
  "toyota|highlander": 2001,
  "toyota|4runner": 1984,
  "toyota|tacoma": 1995,
  "toyota|tundra": 2000,
  "toyota|sienna": 1998,
  "toyota|prius": 2001,
  "toyota|supra": 2020,
  "toyota|bz4x": 2023,
  "toyota|crown": 2023,
  "toyota|venza": 2021,
  "toyota|sequoia": 2001,

  // HONDA
  "honda|civic": 1973,
  "honda|accord": 1976,
  "honda|cr-v": 1997,
  "honda|pilot": 2003,
  "honda|odyssey": 1995,
  "honda|ridgeline": 2006,
  "honda|passport": 2019,
  "honda|hr-v": 2016,
  "honda|prologue": 2024,

  // FORD
  "ford|mustang": 1965,
  "ford|f-150": 1948,
  "ford|explorer": 1991,
  "ford|escape": 2001,
  "ford|edge": 2007,
  "ford|expedition": 1997,
  "ford|bronco": 2021,
  "ford|bronco sport": 2021,
  "ford|maverick": 2022,
  "ford|mustang mach-e": 2021,
  "ford|f-150 lightning": 2022,

  // CHEVROLET
  "chevrolet|silverado": 1999,
  "chevrolet|equinox": 2005,
  "chevrolet|tahoe": 1995,
  "chevrolet|suburban": 1935,
  "chevrolet|traverse": 2009,
  "chevrolet|malibu": 1964,
  "chevrolet|camaro": 1967,
  "chevrolet|corvette": 1953,
  "chevrolet|blazer": 2019,
  "chevrolet|trailblazer": 2021,
  "chevrolet|bolt ev": 2017,
  "chevrolet|blazer ev": 2024,
  "chevrolet|equinox ev": 2024,
  "chevrolet|colorado": 2004,

  // GENESIS
  "genesis|g70": 2019,
  "genesis|g80": 2017,
  "genesis|g90": 2017,
  "genesis|gv70": 2022,
  "genesis|gv80": 2021,
  "genesis|gv60": 2023,
  "genesis|electrified g80": 2023,

  // KIA
  "kia|telluride": 2020,
  "kia|sorento": 2003,
  "kia|sportage": 1995,
  "kia|stinger": 2018,
  "kia|ev6": 2022,
  "kia|ev9": 2024,
  "kia|carnival": 2022,
  "kia|k5": 2021,

  // HYUNDAI
  "hyundai|tucson": 2005,
  "hyundai|santa fe": 2001,
  "hyundai|palisade": 2020,
  "hyundai|ioniq 5": 2022,
  "hyundai|ioniq 6": 2023,
  "hyundai|elantra": 1991,
  "hyundai|sonata": 1989,
  "hyundai|kona": 2018,
  "hyundai|venue": 2020,

  // JEEP
  "jeep|wrangler": 1987,
  "jeep|grand cherokee": 1993,
  "jeep|cherokee": 1974,
  "jeep|compass": 2007,
  "jeep|gladiator": 2020,
  "jeep|grand wagoneer": 2022,
  "jeep|wagoneer": 2022,
  "jeep|avenger": 2023,

  // LAND ROVER
  "land rover|range rover": 1987,
  "land rover|range rover sport": 2006,
  "land rover|range rover velar": 2018,
  "land rover|range rover evoque": 2012,
  "land rover|defender": 2021,
  "land rover|discovery": 1994,

  // FERRARI
  "ferrari|roma": 2021,
  "ferrari|sf90": 2021,
  "ferrari|f8 tributo": 2020,
  "ferrari|296 gtb": 2023,
  "ferrari|purosangue": 2024,
  "ferrari|portofino": 2018,
  "ferrari|laferrari": 2013,
  "ferrari|enzo": 2002,
  "ferrari|f50": 1995,
  "ferrari|f40": 1987,
  "ferrari|testarossa": 1984,
  "ferrari|250 gto": 1962,

  // LAMBORGHINI
  "lamborghini|huracan": 2015,
  "lamborghini|urus": 2019,
  "lamborghini|revuelto": 2024,

  // SUBARU
  "subaru|outback": 1995,
  "subaru|forester": 1998,
  "subaru|crosstrek": 2013,
  "subaru|wrx": 2015,
  "subaru|brz": 2013,
  "subaru|solterra": 2023,
  "subaru|ascent": 2019,

  // MAZDA
  "mazda|cx-5": 2013,
  "mazda|cx-9": 2007,
  "mazda|cx-90": 2024,
  "mazda|cx-50": 2023,
  "mazda|mazda3": 2004,
  "mazda|mx-5 miata": 1990,
  "mazda|mx-30": 2022,

  // NISSAN
  "nissan|altima": 1993,
  "nissan|rogue": 2008,
  "nissan|pathfinder": 1987,
  "nissan|murano": 2003,
  "nissan|armada": 2004,
  "nissan|frontier": 1998,
  "nissan|titan": 2004,
  "nissan|z": 2023,
  "nissan|ariya": 2023,
  "nissan|leaf": 2011,

  // LEXUS
  "lexus|es": 1990,
  "lexus|is": 2001,
  "lexus|gs": 1993,
  "lexus|ls": 1990,
  "lexus|nx": 2015,
  "lexus|rx": 1998,
  "lexus|gx": 2003,
  "lexus|lx": 1996,
  "lexus|ux": 2019,
  "lexus|rz": 2023,
  "lexus|lc": 2018,
  "lexus|rc": 2015,

  // CADILLAC
  "cadillac|ct4": 2020,
  "cadillac|ct5": 2020,
  "cadillac|xt4": 2019,
  "cadillac|xt5": 2017,
  "cadillac|xt6": 2020,
  "cadillac|escalade": 1999,
  "cadillac|lyriq": 2023,
  "cadillac|celestiq": 2025,

  // VOLVO
  "volvo|s60": 2001,
  "volvo|s90": 2017,
  "volvo|v60": 2011,
  "volvo|xc40": 2019,
  "volvo|xc60": 2010,
  "volvo|xc90": 2003,
  "volvo|c40": 2022,
  "volvo|ex90": 2025,

  // VOLKSWAGEN
  "volkswagen|jetta": 1980,
  "volkswagen|passat": 1990,
  "volkswagen|tiguan": 2009,
  "volkswagen|atlas": 2018,
  "volkswagen|atlas cross sport": 2020,
  "volkswagen|taos": 2022,
  "volkswagen|id.4": 2021,
  "volkswagen|golf": 1975,
  "volkswagen|golf gti": 1983,
  "volkswagen|arteon": 2019,

  // ACURA
  "acura|tlx": 2021,
  "acura|integra": 2023,
  "acura|rdx": 2007,
  "acura|mdx": 2001,
  "acura|nsx": 2017,

  // INFINITI
  "infiniti|q50": 2014,
  "infiniti|q60": 2017,
  "infiniti|qx50": 2019,
  "infiniti|qx55": 2022,
  "infiniti|qx60": 2013,
  "infiniti|qx80": 2014,

  // RAM
  "ram|1500": 2009,
  "ram|2500": 2010,
  "ram|3500": 2010,
  "ram|promaster": 2014,
  "ram|1500 trx": 2021,

  // GMC
  "gmc|sierra": 1999,
  "gmc|yukon": 1992,
  "gmc|terrain": 2010,
  "gmc|acadia": 2007,
  "gmc|canyon": 2004,
  "gmc|hummer ev": 2022,

  // LINCOLN
  "lincoln|corsair": 2020,
  "lincoln|nautilus": 2019,
  "lincoln|aviator": 2020,
  "lincoln|navigator": 1998,

  // BUICK
  "buick|encore": 2013,
  "buick|encore gx": 2020,
  "buick|envision": 2016,
  "buick|enclave": 2008,

  // DODGE
  "dodge|charger": 1966,
  "dodge|challenger": 1970,
  "dodge|durango": 1998,
  "dodge|hornet": 2023,

  // CHRYSLER
  "chrysler|pacifica": 2017,
  "chrysler|300": 2005,

  // MITSUBISHI
  "mitsubishi|outlander": 2003,
  "mitsubishi|eclipse cross": 2018,
  "mitsubishi|outlander sport": 2011,
  "mitsubishi|mirage": 2014,

  // BUGATTI
  "bugatti|chiron": 2016,
  "bugatti|veyron": 2005,

  // MCLAREN
  "mclaren|p1": 2013,
  "mclaren|f1": 1992,
  "mclaren|senna": 2018,
  "mclaren|720s": 2017,
  "mclaren|750s": 2023,

  // KOENIGSEGG
  "koenigsegg|jesko": 2021,
  "koenigsegg|agera": 2010,

  // PAGANI
  "pagani|huayra": 2012,
  "pagani|zonda": 1999,
};

// Normalize model name for lookup
export function normalizeModelName(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[®™]/g, '');
}

// Find best matching start year for a model
export function getModelStartYear(make, model) {
  const normalized = `${normalizeModelName(make)}|${normalizeModelName(model)}`;

  // Try exact match first
  if (MODEL_START_YEARS[normalized]) {
    return MODEL_START_YEARS[normalized];
  }

  // Try fuzzy matching - check if any key contains significant parts
  const modelNorm = normalizeModelName(model);
  const makeNorm = normalizeModelName(make);
  const modelParts = modelNorm.split(' ').filter(p => p.length > 0);
  let bestMatch = null;
  let bestMatchCount = 0;

  for (const key in MODEL_START_YEARS) {
    const [keyMake, keyModel] = key.split('|');
    if (keyMake === makeNorm) {
      const keyModelNorm = normalizeModelName(keyModel);
      let matchCount = 0;

      // Count matching parts
      for (const part of modelParts) {
        if (keyModelNorm.includes(part) && part.length > 1) {
          matchCount++;
        }
      }

      // Special case: check if numbers match (e.g., "3" in "model 3" matches "model3")
      if (matchCount === 0) {
        const modelNumbers = modelNorm.match(/\d+/g);
        const keyNumbers = keyModelNorm.match(/\d+/g);
        if (modelNumbers && keyNumbers && modelNumbers.length > 0 && keyNumbers.length > 0) {
          if (modelNumbers.join('') === keyNumbers.join('')) {
            matchCount = modelParts.length; // Full score for number match
          }
        }
      }

      if (matchCount > bestMatchCount) {
        bestMatchCount = matchCount;
        bestMatch = MODEL_START_YEARS[key];
      }
    }
  }

  if (bestMatch !== null) {
    return bestMatch;
  }

  // Default fallback
  return 2015;
}

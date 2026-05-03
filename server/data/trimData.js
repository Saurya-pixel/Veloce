const ALL_TRIM_DATA = {
  // ─── ACURA ────────────────────────────────────────────────────────────────
  "acura|integra": [
    { trim: "Base", msrp: 32000, from: 2022, to: 2026 },
    { trim: "A-Spec", msrp: 36000, from: 2022, to: 2026 },
    { trim: "Touring", msrp: 40000, from: 2022, to: 2026 },
  ],
  "acura|tlx": [
    { trim: "Base", msrp: 42000, from: 2021, to: 2026 },
    { trim: "Technology", msrp: 48000, from: 2021, to: 2026 },
    { trim: "A-Spec", msrp: 52000, from: 2021, to: 2026 },
    { trim: "Type S", msrp: 58000, from: 2021, to: 2026 },
  ],
  "acura|rdx": [
    { trim: "Base", msrp: 46000, from: 2019, to: 2026 },
    { trim: "Technology", msrp: 50000, from: 2019, to: 2026 },
    { trim: "Type S", msrp: 58000, from: 2019, to: 2026 },
  ],
  "acura|mdx": [
    { trim: "Base", msrp: 52000, from: 2022, to: 2026 },
    { trim: "Technology", msrp: 58000, from: 2022, to: 2026 },
    { trim: "Type S", msrp: 68000, from: 2022, to: 2026 },
  ],
  "acura|nsx": [
    { trim: "Base", msrp: 169000, from: 2016, to: 2022 },
    { trim: "Sport Touring", msrp: 189000, from: 2016, to: 2022 },
    { trim: "Type R", msrp: 220000, from: 2020, to: 2022 },
  ],

  // ─── AUDI ──────────────────────────────────────────────────────────────────
  "audi|a3": [
    { trim: "Standard", msrp: 35000, from: 2022, to: 2026 },
    { trim: "Premium", msrp: 38000, from: 2022, to: 2026 },
    { trim: "Premium Plus", msrp: 42000, from: 2022, to: 2026 },
  ],
  "audi|a4": [
    { trim: "40 TFSI Premium", msrp: 42000, from: 2017, to: 2026 },
    { trim: "45 TFSI Premium Plus", msrp: 48000, from: 2017, to: 2026 },
    { trim: "45 TFSI Prestige", msrp: 54000, from: 2017, to: 2026 },
  ],
  "audi|a5": [
    { trim: "40 TFSI", msrp: 46000, from: 2017, to: 2026 },
    { trim: "45 TFSI", msrp: 52000, from: 2017, to: 2026 },
    { trim: "S5", msrp: 70000, from: 2017, to: 2026 },
  ],
  "audi|a6": [
    { trim: "40 TFSI Premium", msrp: 58000, from: 2019, to: 2026 },
    { trim: "45 TFSI Premium Plus", msrp: 64000, from: 2019, to: 2026 },
    { trim: "55 TFSI e", msrp: 72000, from: 2020, to: 2026 },
  ],
  "audi|a7": [
    { trim: "55 TFSI Premium", msrp: 72000, from: 2019, to: 2026 },
    { trim: "55 TFSI Premium Plus", msrp: 78000, from: 2019, to: 2026 },
    { trim: "60 TFSI e", msrp: 84000, from: 2022, to: 2026 },
  ],
  "audi|a8": [
    { trim: "55 TFSI", msrp: 92000, from: 2018, to: 2026 },
    { trim: "60 TFSI", msrp: 104000, from: 2018, to: 2026 },
    { trim: "L 60 TFSI", msrp: 110000, from: 2021, to: 2026 },
  ],
  "audi|q3": [
    { trim: "40 TFSI", msrp: 38000, from: 2019, to: 2026 },
    { trim: "45 TFSI Premium Plus", msrp: 42000, from: 2019, to: 2026 },
    { trim: "S Line", msrp: 48000, from: 2019, to: 2026 },
  ],
  "audi|q4 e-tron": [
    { trim: "Standard", msrp: 48000, from: 2022, to: 2026 },
    { trim: "Premium", msrp: 54000, from: 2022, to: 2026 },
    { trim: "Premium Plus", msrp: 62000, from: 2022, to: 2026 },
  ],
  "audi|q5": [
    { trim: "45 TFSI Premium", msrp: 48000, from: 2018, to: 2026 },
    { trim: "45 TFSI Premium Plus", msrp: 54000, from: 2018, to: 2026 },
    { trim: "SQ5", msrp: 62000, from: 2018, to: 2026 },
  ],
  "audi|q7": [
    { trim: "45 TFSI Premium", msrp: 62000, from: 2017, to: 2026 },
    { trim: "55 TFSI Premium Plus", msrp: 72000, from: 2017, to: 2026 },
    { trim: "SQ7", msrp: 88000, from: 2020, to: 2026 },
  ],
  "audi|q8": [
    { trim: "55 TFSI Premium", msrp: 72000, from: 2019, to: 2026 },
    { trim: "55 TFSI Premium Plus", msrp: 80000, from: 2019, to: 2026 },
    { trim: "SQ8", msrp: 98000, from: 2020, to: 2026 },
  ],
  "audi|e-tron": [
    { trim: "Standard", msrp: 74000, from: 2019, to: 2023 },
    { trim: "Premium", msrp: 82000, from: 2019, to: 2023 },
    { trim: "Prestige", msrp: 92000, from: 2019, to: 2023 },
  ],
  "audi|e-tron gt": [
    { trim: "Premium Plus", msrp: 108000, from: 2022, to: 2026 },
    { trim: "Prestige", msrp: 118000, from: 2022, to: 2026 },
  ],
  "audi|rs e-tron gt": [
    { trim: "RS", msrp: 148000, from: 2022, to: 2026 },
    { trim: "RS Performance", msrp: 170000, from: 2024, to: 2026 },
  ],
  "audi|rs3": [
    { trim: "Base", msrp: 62000, from: 2018, to: 2026 },
    { trim: "Premium", msrp: 68000, from: 2018, to: 2026 },
    { trim: "Carbon", msrp: 75000, from: 2021, to: 2026 },
  ],
  "audi|rs5": [
    { trim: "Coupe", msrp: 82000, from: 2018, to: 2026 },
    { trim: "Sportback", msrp: 84000, from: 2018, to: 2026 },
    { trim: "Competition", msrp: 95000, from: 2021, to: 2026 },
  ],
  "audi|rs6": [
    { trim: "Avant Premium Plus", msrp: 120000, from: 2021, to: 2026 },
    { trim: "Avant Prestige", msrp: 132000, from: 2021, to: 2026 },
    { trim: "Performance", msrp: 142000, from: 2024, to: 2026 },
  ],
  "audi|rs7": [
    { trim: "Premium Plus", msrp: 122000, from: 2021, to: 2026 },
    { trim: "Prestige", msrp: 135000, from: 2021, to: 2026 },
  ],
  "audi|s3": [
    { trim: "Base", msrp: 48000, from: 2021, to: 2026 },
    { trim: "Premium", msrp: 54000, from: 2021, to: 2026 },
  ],
  "audi|s4": [
    { trim: "Premium", msrp: 55000, from: 2018, to: 2026 },
    { trim: "Premium Plus", msrp: 62000, from: 2018, to: 2026 },
  ],
  "audi|s5": [
    { trim: "Premium", msrp: 58000, from: 2018, to: 2026 },
    { trim: "Premium Plus", msrp: 68000, from: 2018, to: 2026 },
  ],
  "audi|tt": [
    { trim: "45 TFSI", msrp: 52000, from: 2015, to: 2026 },
    { trim: "RS", msrp: 68000, from: 2017, to: 2026 },
  ],
  "audi|r8": [
    { trim: "V10 Performance", msrp: 165000, from: 2020, to: 2024 },
    { trim: "V10 GT", msrp: 218000, from: 2023, to: 2024 },
  ],

  // ─── BMW ───────────────────────────────────────────────────────────────────
  "bmw|2 series": [
    { trim: "230i", msrp: 38000, from: 2022, to: 2026 },
    { trim: "M240i", msrp: 48000, from: 2022, to: 2026 },
  ],
  "bmw|3 series": [
    { trim: "330i Sedan", msrp: 44500, from: 2019, to: 2026 },
    { trim: "330i xDrive Sedan", msrp: 46500, from: 2019, to: 2026 },
    { trim: "330e (PHEV)", msrp: 45600, from: 2021, to: 2026 },
    { trim: "330e xDrive (PHEV)", msrp: 47600, from: 2021, to: 2026 },
    { trim: "M340i Sedan", msrp: 57600, from: 2020, to: 2026 },
    { trim: "M340i xDrive Sedan", msrp: 59600, from: 2020, to: 2026 },
    { trim: "M3 Sedan", msrp: 76000, from: 1988, to: 2026 },
    { trim: "M3 Competition", msrp: 80200, from: 2021, to: 2026 },
    { trim: "M3 Competition xDrive", msrp: 84300, from: 2021, to: 2026 },
    { trim: "M3 CS", msrp: 118700, from: 2024, to: 2026 },
  ],
  "bmw|4 series": [
    { trim: "430i", msrp: 48000, from: 2021, to: 2026 },
    { trim: "440i", msrp: 58000, from: 2021, to: 2026 },
    { trim: "M440i", msrp: 68000, from: 2021, to: 2026 },
  ],
  "bmw|5 series": [
    { trim: "530i", msrp: 57000, from: 2017, to: 2026 },
    { trim: "540i", msrp: 65000, from: 2017, to: 2026 },
    { trim: "M550i", msrp: 82000, from: 2018, to: 2026 },
  ],
  "bmw|7 series": [
    { trim: "740i", msrp: 98000, from: 2016, to: 2026 },
    { trim: "750i", msrp: 115000, from: 2016, to: 2026 },
    { trim: "M760i", msrp: 162000, from: 2024, to: 2026 },
  ],
  "bmw|8 series": [
    { trim: "M850i", msrp: 102000, from: 2019, to: 2026 },
    { trim: "M8", msrp: 135000, from: 2020, to: 2026 },
  ],
  "bmw|x1": [
    { trim: "xDrive28i", msrp: 40000, from: 2016, to: 2026 },
    { trim: "xDrive28i Premium", msrp: 44000, from: 2016, to: 2026 },
    { trim: "M40i", msrp: 52000, from: 2020, to: 2026 },
  ],
  "bmw|x2": [
    { trim: "xDrive28i", msrp: 42000, from: 2018, to: 2026 },
    { trim: "M40i", msrp: 54000, from: 2018, to: 2026 },
  ],
  "bmw|x3": [
    { trim: "xDrive30i", msrp: 48000, from: 2018, to: 2026 },
    { trim: "xDrive40i", msrp: 58000, from: 2018, to: 2026 },
    { trim: "M40i", msrp: 64000, from: 2021, to: 2026 },
  ],
  "bmw|x4": [
    { trim: "xDrive30i", msrp: 53000, from: 2019, to: 2026 },
    { trim: "xDrive40i", msrp: 62000, from: 2019, to: 2026 },
    { trim: "M40i", msrp: 70000, from: 2021, to: 2026 },
  ],
  "bmw|x5": [
    { trim: "xDrive40i", msrp: 70000, from: 2019, to: 2026 },
    { trim: "xDrive50e", msrp: 82000, from: 2023, to: 2026 },
    { trim: "M60i", msrp: 94000, from: 2023, to: 2026 },
  ],
  "bmw|x6": [
    { trim: "xDrive40i", msrp: 72000, from: 2020, to: 2026 },
    { trim: "M50i", msrp: 88000, from: 2020, to: 2026 },
  ],
  "bmw|x7": [
    { trim: "xDrive40i", msrp: 82000, from: 2019, to: 2026 },
    { trim: "xDrive50", msrp: 95000, from: 2019, to: 2026 },
    { trim: "M60i", msrp: 108000, from: 2021, to: 2026 },
  ],
  "bmw|m2": [
    { trim: "Base", msrp: 65000, from: 2016, to: 2026 },
    { trim: "Competition", msrp: 78000, from: 2019, to: 2026 },
  ],
  "bmw|m3": [
    { trim: "Sedan", msrp: 78000, from: 1988, to: 2026 },
    { trim: "Competition", msrp: 84000, from: 2021, to: 2026 },
    { trim: "CS", msrp: 118000, from: 2024, to: 2026 },
  ],
  "bmw|m4": [
    { trim: "Coupe", msrp: 80000, from: 2014, to: 2026 },
    { trim: "Competition", msrp: 88000, from: 2021, to: 2026 },
  ],
  "bmw|m5": [
    { trim: "Sedan", msrp: 116000, from: 1988, to: 2026 },
    { trim: "Competition", msrp: 124000, from: 2019, to: 2026 },
  ],
  "bmw|m8": [
    { trim: "Coupe", msrp: 135000, from: 2020, to: 2026 },
    { trim: "Gran Coupe", msrp: 138000, from: 2020, to: 2026 },
  ],
  "bmw|ix": [
    { trim: "xDrive50", msrp: 90000, from: 2022, to: 2026 },
    { trim: "M60", msrp: 110000, from: 2023, to: 2026 },
  ],
  "bmw|i4": [
    { trim: "eDrive40", msrp: 58000, from: 2022, to: 2026 },
    { trim: "M60", msrp: 68000, from: 2023, to: 2026 },
  ],
  "bmw|i7": [
    { trim: "xDrive60", msrp: 108000, from: 2023, to: 2026 },
    { trim: "M70", msrp: 162000, from: 2024, to: 2026 },
  ],
  "bmw|z4": [
    { trim: "sDrive30i", msrp: 52000, from: 2019, to: 2026 },
    { trim: "M40i", msrp: 62000, from: 2019, to: 2026 },
  ],
  "bmw|xm": [
    { trim: "Base", msrp: 161000, from: 2023, to: 2026 },
    { trim: "M60i", msrp: 188000, from: 2023, to: 2026 },
  ],

  // ─── BUICK ─────────────────────────────────────────────────────────────────
  "buick|encore": [
    { trim: "Preferred", msrp: 24000, from: 2013, to: 2026 },
    { trim: "Essence", msrp: 28000, from: 2013, to: 2026 },
    { trim: "Premium", msrp: 32000, from: 2013, to: 2026 },
  ],
  "buick|encore gx": [
    { trim: "Preferred", msrp: 28000, from: 2020, to: 2026 },
    { trim: "Select", msrp: 32000, from: 2020, to: 2026 },
  ],
  "buick|envision": [
    { trim: "Preferred", msrp: 34000, from: 2021, to: 2026 },
    { trim: "Essence", msrp: 38000, from: 2021, to: 2026 },
    { trim: "Avenir", msrp: 46000, from: 2021, to: 2026 },
  ],
  "buick|enclave": [
    { trim: "Preferred", msrp: 44000, from: 2018, to: 2026 },
    { trim: "Essence", msrp: 50000, from: 2018, to: 2026 },
    { trim: "Avenir", msrp: 64000, from: 2018, to: 2026 },
  ],

  // ─── CADILLAC ──────────────────────────────────────────────────────────────
  "cadillac|ct4": [
    { trim: "Luxury", msrp: 38000, from: 2020, to: 2026 },
    { trim: "Sport", msrp: 46000, from: 2020, to: 2026 },
    { trim: "V Blackwing", msrp: 92000, from: 2021, to: 2026 },
  ],
  "cadillac|ct5": [
    { trim: "Luxury", msrp: 42000, from: 2020, to: 2026 },
    { trim: "Premium Luxury", msrp: 50000, from: 2020, to: 2026 },
    { trim: "V Blackwing", msrp: 98000, from: 2022, to: 2026 },
  ],
  "cadillac|xt4": [
    { trim: "Luxury", msrp: 38000, from: 2019, to: 2026 },
    { trim: "Premium Luxury", msrp: 44000, from: 2019, to: 2026 },
    { trim: "Sport", msrp: 48000, from: 2020, to: 2026 },
  ],
  "cadillac|xt5": [
    { trim: "Luxury", msrp: 44000, from: 2017, to: 2026 },
    { trim: "Premium Luxury", msrp: 52000, from: 2017, to: 2026 },
    { trim: "Sport", msrp: 54000, from: 2020, to: 2026 },
  ],
  "cadillac|xt6": [
    { trim: "Luxury", msrp: 52000, from: 2020, to: 2026 },
    { trim: "Premium Luxury", msrp: 58000, from: 2020, to: 2026 },
    { trim: "Sport", msrp: 64000, from: 2021, to: 2026 },
  ],
  "cadillac|escalade": [
    { trim: "Luxury", msrp: 82000, from: 2021, to: 2026 },
    { trim: "Premium Luxury", msrp: 94000, from: 2021, to: 2026 },
    { trim: "Sport", msrp: 96000, from: 2021, to: 2026 },
  ],
  "cadillac|lyriq": [
    { trim: "Luxury", msrp: 58000, from: 2023, to: 2026 },
    { trim: "Premium Luxury", msrp: 66000, from: 2024, to: 2026 },
  ],
  "cadillac|celestiq": [
    { trim: "Premium Luxury", msrp: 340000, from: 2024, to: 2026 },
  ],

  // ─── CHEVROLET ────────────────────────────────────────────────────────────
  "chevrolet|malibu": [
    { trim: "LS", msrp: 24000, from: 2016, to: 2026 },
    { trim: "LT", msrp: 28000, from: 2016, to: 2026 },
    { trim: "Premier", msrp: 32000, from: 2016, to: 2026 },
  ],
  "chevrolet|camaro": [
    { trim: "1LT", msrp: 32000, from: 2016, to: 2024 },
    { trim: "2LT", msrp: 38000, from: 2016, to: 2024 },
    { trim: "SS", msrp: 44000, from: 2016, to: 2024 },
  ],
  "chevrolet|corvette": [
    { trim: "1LT", msrp: 68000, from: 2020, to: 2026 },
    { trim: "2LT", msrp: 76000, from: 2020, to: 2026 },
    { trim: "Z06", msrp: 112000, from: 2023, to: 2026 },
  ],
  "chevrolet|silverado": [
    { trim: "WT", msrp: 36000, from: 2014, to: 2026 },
    { trim: "LT", msrp: 46000, from: 2014, to: 2026 },
    { trim: "High Country", msrp: 64000, from: 2014, to: 2026 },
  ],
  "chevrolet|equinox": [
    { trim: "LS", msrp: 28000, from: 2018, to: 2026 },
    { trim: "LT", msrp: 32000, from: 2018, to: 2026 },
    { trim: "Premier", msrp: 38000, from: 2018, to: 2026 },
  ],
  "chevrolet|tahoe": [
    { trim: "LS", msrp: 58000, from: 2015, to: 2026 },
    { trim: "LT", msrp: 62000, from: 2015, to: 2026 },
    { trim: "High Country", msrp: 72000, from: 2015, to: 2026 },
  ],
  "chevrolet|suburban": [
    { trim: "LS", msrp: 62000, from: 2015, to: 2026 },
    { trim: "LT", msrp: 68000, from: 2015, to: 2026 },
    { trim: "High Country", msrp: 78000, from: 2015, to: 2026 },
  ],
  "chevrolet|traverse": [
    { trim: "LS", msrp: 42000, from: 2018, to: 2026 },
    { trim: "LT", msrp: 48000, from: 2018, to: 2026 },
    { trim: "High Country", msrp: 58000, from: 2018, to: 2026 },
  ],
  "chevrolet|blazer": [
    { trim: "LS", msrp: 38000, from: 2019, to: 2026 },
    { trim: "LT", msrp: 44000, from: 2019, to: 2026 },
    { trim: "Premier", msrp: 52000, from: 2019, to: 2026 },
  ],
  "chevrolet|trailblazer": [
    { trim: "LS", msrp: 26000, from: 2021, to: 2026 },
    { trim: "LT", msrp: 30000, from: 2021, to: 2026 },
    { trim: "Premier", msrp: 36000, from: 2021, to: 2026 },
  ],
  "chevrolet|bolt ev": [
    { trim: "LT", msrp: 28000, from: 2017, to: 2025 },
    { trim: "Premier", msrp: 32000, from: 2017, to: 2025 },
  ],
  "chevrolet|blazer ev": [
    { trim: "LT", msrp: 48000, from: 2023, to: 2026 },
    { trim: "RS", msrp: 56000, from: 2023, to: 2026 },
  ],
  "chevrolet|equinox ev": [
    { trim: "LT", msrp: 36000, from: 2024, to: 2026 },
    { trim: "RS", msrp: 42000, from: 2024, to: 2026 },
  ],
  "chevrolet|colorado": [
    { trim: "WT", msrp: 32000, from: 2015, to: 2026 },
    { trim: "LT", msrp: 38000, from: 2015, to: 2026 },
    { trim: "Z71", msrp: 48000, from: 2015, to: 2026 },
  ],

  // ─── CHRYSLER ──────────────────────────────────────────────────────────────
  "chrysler|pacifica": [
    { trim: "Touring", msrp: 38000, from: 2017, to: 2026 },
    { trim: "Limited", msrp: 48000, from: 2017, to: 2026 },
    { trim: "Pinnacle", msrp: 56000, from: 2021, to: 2026 },
  ],
  "chrysler|300": [
    { trim: "Touring", msrp: 32000, from: 2015, to: 2026 },
    { trim: "Limited", msrp: 40000, from: 2015, to: 2026 },
    { trim: "C", msrp: 50000, from: 2015, to: 2026 },
  ],

  // ─── DODGE ─────────────────────────────────────────────────────────────────
  "dodge|charger": [
    { trim: "SXT", msrp: 34000, from: 2015, to: 2023 },
    { trim: "R/T", msrp: 42000, from: 2015, to: 2023 },
    { trim: "SRT Hellcat", msrp: 72000, from: 2015, to: 2023 },
  ],
  "dodge|challenger": [
    { trim: "SXT", msrp: 32000, from: 2015, to: 2023 },
    { trim: "R/T", msrp: 40000, from: 2015, to: 2023 },
    { trim: "SRT Hellcat", msrp: 72000, from: 2015, to: 2023 },
  ],
  "dodge|durango": [
    { trim: "SXT", msrp: 42000, from: 2018, to: 2026 },
    { trim: "R/T", msrp: 52000, from: 2018, to: 2026 },
    { trim: "SRT", msrp: 68000, from: 2018, to: 2026 },
  ],
  "dodge|hornet": [
    { trim: "SE", msrp: 30000, from: 2023, to: 2026 },
    { trim: "GT", msrp: 36000, from: 2023, to: 2026 },
    { trim: "R/T", msrp: 44000, from: 2023, to: 2026 },
  ],

  // ─── FERRARI ───────────────────────────────────────────────────────────────
  "ferrari|roma": [
    { trim: "Coupe", msrp: 222000, from: 2021, to: 2024 },
    { trim: "Spider", msrp: 242000, from: 2023, to: 2026 },
  ],
  "ferrari|sf90 stradale": [
    { trim: "Base", msrp: 507000, from: 2021, to: 2026 },
    { trim: "Assetto Fiorano", msrp: 620000, from: 2021, to: 2026 },
  ],
  "ferrari|f8 tributo": [
    { trim: "Base", msrp: 280000, from: 2019, to: 2023 },
    { trim: "Pista", msrp: 358000, from: 2021, to: 2023 },
  ],
  "ferrari|296 gtb": [
    { trim: "Base", msrp: 322000, from: 2023, to: 2026 },
    { trim: "Assetto Fiorano", msrp: 380000, from: 2023, to: 2026 },
  ],
  "ferrari|purosangue": [
    { trim: "Base", msrp: 398000, from: 2024, to: 2026 },
  ],
  "ferrari|portofino m": [
    { trim: "Base", msrp: 235000, from: 2021, to: 2024 },
  ],
  "ferrari|812 superfast": [
    { trim: "Base", msrp: 335000, from: 2017, to: 2024 },
    { trim: "Competizione", msrp: 478000, from: 2021, to: 2024 },
  ],
  "ferrari|laferrari": [
    { trim: "Coupe", msrp: 1416362, from: 2013, to: 2016 },
    { trim: "Aperta", msrp: 2200000, from: 2016, to: 2018 },
  ],
  "ferrari|enzo": [
    { trim: "Base", msrp: 659330, from: 2002, to: 2004 },
  ],
  "ferrari|f50": [
    { trim: "Base", msrp: 475000, from: 1995, to: 1997 },
  ],
  "ferrari|f40": [
    { trim: "Base", msrp: 400000, from: 1987, to: 1992 },
  ],

  // ─── FORD ──────────────────────────────────────────────────────────────────
  "ford|mustang": [
    { trim: "EcoBoost", msrp: 32000, from: 2015, to: 2026 },
    { trim: "GT", msrp: 42000, from: 2015, to: 2026 },
    { trim: "Dark Horse", msrp: 62000, from: 2024, to: 2026 },
  ],
  "ford|f-150": [
    { trim: "XL", msrp: 36770, from: 2009, to: 2026 },
    { trim: "STX", msrp: 43895, from: 2021, to: 2026 },
    { trim: "XLT", msrp: 47620, from: 2009, to: 2026 },
    { trim: "Lariat", msrp: 65195, from: 2009, to: 2026 },
    { trim: "King Ranch", msrp: 73730, from: 2009, to: 2026 },
    { trim: "Platinum", msrp: 73730, from: 2009, to: 2026 },
    { trim: "Tremor", msrp: 64150, from: 2021, to: 2026 },
    { trim: "Raptor", msrp: 78330, from: 2010, to: 2026 },
    { trim: "Raptor R", msrp: 110255, from: 2023, to: 2026 },
  ],
  "ford|explorer": [
    { trim: "Base", msrp: 38000, from: 2020, to: 2026 },
    { trim: "XLT", msrp: 42000, from: 2020, to: 2026 },
    { trim: "Limited", msrp: 52000, from: 2020, to: 2026 },
  ],
  "ford|escape": [
    { trim: "S", msrp: 30000, from: 2020, to: 2026 },
    { trim: "SE", msrp: 34000, from: 2020, to: 2026 },
    { trim: "Titanium", msrp: 40000, from: 2020, to: 2026 },
  ],
  "ford|edge": [
    { trim: "S", msrp: 38000, from: 2015, to: 2023 },
    { trim: "SE", msrp: 44000, from: 2015, to: 2023 },
    { trim: "Titanium", msrp: 52000, from: 2015, to: 2023 },
  ],
  "ford|expedition": [
    { trim: "Base", msrp: 58000, from: 2018, to: 2026 },
    { trim: "Limited", msrp: 68000, from: 2018, to: 2026 },
    { trim: "Platinum", msrp: 78000, from: 2018, to: 2026 },
  ],
  "ford|bronco": [
    { trim: "Outer Banks", msrp: 38000, from: 2021, to: 2026 },
    { trim: "Black Diamond", msrp: 44000, from: 2021, to: 2026 },
    { trim: "Wildtrak", msrp: 52000, from: 2021, to: 2026 },
  ],
  "ford|bronco sport": [
    { trim: "Sport", msrp: 32000, from: 2021, to: 2026 },
    { trim: "Outer Banks", msrp: 36000, from: 2021, to: 2026 },
    { trim: "Badlands", msrp: 42000, from: 2021, to: 2026 },
  ],
  "ford|maverick": [
    { trim: "XL", msrp: 24000, from: 2022, to: 2026 },
    { trim: "XLT", msrp: 28000, from: 2022, to: 2026 },
    { trim: "Lariat", msrp: 34000, from: 2022, to: 2026 },
  ],
  "ford|mustang mach-e": [
    { trim: "Select RWD", msrp: 44000, from: 2021, to: 2026 },
    { trim: "Premium AWD", msrp: 54000, from: 2021, to: 2026 },
    { trim: "GT AWD", msrp: 62000, from: 2021, to: 2026 },
  ],
  "ford|f-150 lightning": [
    { trim: "Pro", msrp: 62000, from: 2022, to: 2026 },
    { trim: "Lariat", msrp: 72000, from: 2022, to: 2026 },
    { trim: "Platinum", msrp: 86000, from: 2022, to: 2026 },
  ],

  // ─── GENESIS ───────────────────────────────────────────────────────────────
  "genesis|g70": [
    { trim: "Standard", msrp: 42000, from: 2021, to: 2026 },
    { trim: "Advanced", msrp: 46000, from: 2021, to: 2026 },
    { trim: "Prestige", msrp: 52000, from: 2021, to: 2026 },
  ],
  "genesis|g80": [
    { trim: "Standard", msrp: 52000, from: 2021, to: 2026 },
    { trim: "Advanced", msrp: 58000, from: 2021, to: 2026 },
    { trim: "Prestige", msrp: 68000, from: 2021, to: 2026 },
  ],
  "genesis|g90": [
    { trim: "Standard", msrp: 92000, from: 2023, to: 2026 },
    { trim: "Advanced", msrp: 102000, from: 2023, to: 2026 },
    { trim: "Prestige", msrp: 118000, from: 2023, to: 2026 },
  ],
  "genesis|gv70": [
    { trim: "Standard", msrp: 46000, from: 2021, to: 2026 },
    { trim: "Advanced", msrp: 52000, from: 2021, to: 2026 },
    { trim: "Prestige", msrp: 60000, from: 2021, to: 2026 },
  ],
  "genesis|gv80": [
    { trim: "Standard", msrp: 62000, from: 2021, to: 2026 },
    { trim: "Advanced", msrp: 68000, from: 2021, to: 2026 },
    { trim: "Prestige", msrp: 80000, from: 2021, to: 2026 },
  ],
  "genesis|gv60": [
    { trim: "Standard", msrp: 48000, from: 2023, to: 2026 },
    { trim: "Advanced", msrp: 54000, from: 2023, to: 2026 },
  ],

  // ─── GMC ───────────────────────────────────────────────────────────────────
  "gmc|sierra": [
    { trim: "SLE", msrp: 44000, from: 2019, to: 2026 },
    { trim: "AT4", msrp: 58000, from: 2019, to: 2026 },
    { trim: "Denali", msrp: 62000, from: 2019, to: 2026 },
  ],
  "gmc|yukon": [
    { trim: "SLE", msrp: 58000, from: 2021, to: 2026 },
    { trim: "AT4", msrp: 70000, from: 2021, to: 2026 },
    { trim: "Denali", msrp: 78000, from: 2021, to: 2026 },
  ],
  "gmc|terrain": [
    { trim: "SLE", msrp: 34000, from: 2018, to: 2026 },
    { trim: "SLT", msrp: 40000, from: 2018, to: 2026 },
    { trim: "Denali", msrp: 48000, from: 2018, to: 2026 },
  ],
  "gmc|acadia": [
    { trim: "SLE", msrp: 40000, from: 2017, to: 2026 },
    { trim: "SLT", msrp: 48000, from: 2017, to: 2026 },
    { trim: "Denali", msrp: 58000, from: 2017, to: 2026 },
  ],
  "gmc|canyon": [
    { trim: "SLE", msrp: 34000, from: 2015, to: 2026 },
    { trim: "SLT", msrp: 40000, from: 2015, to: 2026 },
    { trim: "Denali", msrp: 48000, from: 2015, to: 2026 },
  ],
  "gmc|hummer ev": [
    { trim: "EV3X", msrp: 82000, from: 2024, to: 2026 },
    { trim: "EV2X", msrp: 100000, from: 2024, to: 2026 },
  ],

  // ─── HONDA ─────────────────────────────────────────────────────────────────
  "honda|civic": [
    { trim: "LX Sedan", msrp: 23950, from: 2016, to: 2026 },
    { trim: "Sport Sedan", msrp: 25550, from: 2016, to: 2026 },
    { trim: "EX Sedan", msrp: 26950, from: 2016, to: 2026 },
    { trim: "Touring Sedan", msrp: 30550, from: 2016, to: 2026 },
    { trim: "Si", msrp: 29100, from: 2016, to: 2026 },
    { trim: "Type R", msrp: 44795, from: 2017, to: 2026 },
  ],
  "honda|accord": [
    { trim: "LX", msrp: 30000, from: 2018, to: 2026 },
    { trim: "EX", msrp: 34000, from: 2018, to: 2026 },
    { trim: "Touring", msrp: 40000, from: 2018, to: 2026 },
  ],
  "honda|cr-v": [
    { trim: "LX", msrp: 32000, from: 2017, to: 2026 },
    { trim: "EX", msrp: 36000, from: 2017, to: 2026 },
    { trim: "Touring", msrp: 42000, from: 2017, to: 2026 },
  ],
  "honda|pilot": [
    { trim: "Sport", msrp: 40000, from: 2019, to: 2026 },
    { trim: "EX-L", msrp: 44000, from: 2019, to: 2026 },
    { trim: "Touring", msrp: 52000, from: 2019, to: 2026 },
  ],
  "honda|odyssey": [
    { trim: "LX", msrp: 38000, from: 2018, to: 2026 },
    { trim: "EX", msrp: 44000, from: 2018, to: 2026 },
    { trim: "Touring", msrp: 52000, from: 2018, to: 2026 },
  ],
  "honda|ridgeline": [
    { trim: "Sport", msrp: 42000, from: 2017, to: 2026 },
    { trim: "RTL", msrp: 48000, from: 2017, to: 2026 },
    { trim: "Black Edition", msrp: 56000, from: 2020, to: 2026 },
  ],
  "honda|passport": [
    { trim: "Sport", msrp: 44000, from: 2019, to: 2026 },
    { trim: "EX", msrp: 48000, from: 2019, to: 2026 },
    { trim: "Touring", msrp: 56000, from: 2019, to: 2026 },
  ],
  "honda|hr-v": [
    { trim: "LX", msrp: 24000, from: 2016, to: 2026 },
    { trim: "EX", msrp: 28000, from: 2016, to: 2026 },
    { trim: "Touring", msrp: 32000, from: 2016, to: 2026 },
  ],
  "honda|prologue": [
    { trim: "Standard", msrp: 52000, from: 2024, to: 2026 },
    { trim: "Premium", msrp: 58000, from: 2024, to: 2026 },
  ],

  // ─── HYUNDAI ───────────────────────────────────────────────────────────────
  "hyundai|tucson": [
    { trim: "SE", msrp: 28000, from: 2022, to: 2026 },
    { trim: "SEL", msrp: 32000, from: 2022, to: 2026 },
    { trim: "Limited", msrp: 40000, from: 2022, to: 2026 },
  ],
  "hyundai|santa fe": [
    { trim: "SE", msrp: 32000, from: 2021, to: 2026 },
    { trim: "SEL", msrp: 36000, from: 2021, to: 2026 },
    { trim: "Limited", msrp: 42000, from: 2021, to: 2026 },
  ],
  "hyundai|palisade": [
    { trim: "SE", msrp: 40000, from: 2020, to: 2026 },
    { trim: "SEL", msrp: 44000, from: 2020, to: 2026 },
    { trim: "Limited", msrp: 52000, from: 2020, to: 2026 },
  ],
  "hyundai|ioniq 5": [
    { trim: "SE Standard", msrp: 44000, from: 2021, to: 2026 },
    { trim: "SEL Premium", msrp: 50000, from: 2021, to: 2026 },
    { trim: "Limited", msrp: 56000, from: 2021, to: 2026 },
  ],
  "hyundai|ioniq 6": [
    { trim: "SE Standard", msrp: 42000, from: 2023, to: 2026 },
    { trim: "SEL Premium", msrp: 48000, from: 2023, to: 2026 },
  ],
  "hyundai|elantra": [
    { trim: "SE", msrp: 22000, from: 2021, to: 2026 },
    { trim: "SEL", msrp: 24000, from: 2021, to: 2026 },
    { trim: "Limited", msrp: 28000, from: 2021, to: 2026 },
  ],
  "hyundai|sonata": [
    { trim: "SE", msrp: 28000, from: 2020, to: 2026 },
    { trim: "SEL", msrp: 32000, from: 2020, to: 2026 },
    { trim: "Limited", msrp: 38000, from: 2020, to: 2026 },
  ],
  "hyundai|kona": [
    { trim: "SE", msrp: 24000, from: 2018, to: 2026 },
    { trim: "SEL", msrp: 28000, from: 2018, to: 2026 },
    { trim: "Limited", msrp: 32000, from: 2018, to: 2026 },
  ],
  "hyundai|venue": [
    { trim: "SE", msrp: 20000, from: 2020, to: 2026 },
    { trim: "SEL", msrp: 22000, from: 2020, to: 2026 },
    { trim: "Limited", msrp: 26000, from: 2020, to: 2026 },
  ],

  // ─── INFINITI ──────────────────────────────────────────────────────────────
  "infiniti|q50": [
    { trim: "Essential", msrp: 42000, from: 2014, to: 2026 },
    { trim: "Pure", msrp: 46000, from: 2014, to: 2026 },
    { trim: "Sensory", msrp: 54000, from: 2014, to: 2026 },
  ],
  "infiniti|q60": [
    { trim: "Pure", msrp: 48000, from: 2017, to: 2026 },
    { trim: "Essential", msrp: 52000, from: 2017, to: 2026 },
    { trim: "Sensory", msrp: 62000, from: 2017, to: 2026 },
  ],
  "infiniti|qx50": [
    { trim: "Pure", msrp: 42000, from: 2019, to: 2026 },
    { trim: "Essential", msrp: 46000, from: 2019, to: 2026 },
    { trim: "Sensory", msrp: 54000, from: 2019, to: 2026 },
  ],
  "infiniti|qx55": [
    { trim: "Pure", msrp: 48000, from: 2022, to: 2026 },
    { trim: "Essential", msrp: 52000, from: 2022, to: 2026 },
    { trim: "Sensory", msrp: 62000, from: 2022, to: 2026 },
  ],
  "infiniti|qx60": [
    { trim: "Pure", msrp: 48000, from: 2022, to: 2026 },
    { trim: "Essential", msrp: 54000, from: 2022, to: 2026 },
    { trim: "Autograph", msrp: 68000, from: 2022, to: 2026 },
  ],
  "infiniti|qx80": [
    { trim: "Luxe", msrp: 72000, from: 2018, to: 2026 },
    { trim: "Essential", msrp: 80000, from: 2022, to: 2026 },
    { trim: "Autograph", msrp: 98000, from: 2022, to: 2026 },
  ],

  // ─── JEEP ──────────────────────────────────────────────────────────────────
  "jeep|wrangler": [
    { trim: "Sport", msrp: 32000, from: 2018, to: 2026 },
    { trim: "Sahara", msrp: 44000, from: 2018, to: 2026 },
    { trim: "Rubicon", msrp: 48000, from: 2018, to: 2026 },
  ],
  "jeep|grand cherokee": [
    { trim: "Laredo", msrp: 40000, from: 2021, to: 2026 },
    { trim: "Limited", msrp: 48000, from: 2021, to: 2026 },
    { trim: "Summit", msrp: 66000, from: 2021, to: 2026 },
  ],
  "jeep|grand cherokee l": [
    { trim: "Laredo", msrp: 46000, from: 2021, to: 2026 },
    { trim: "Limited", msrp: 52000, from: 2021, to: 2026 },
    { trim: "Summit", msrp: 72000, from: 2021, to: 2026 },
  ],
  "jeep|cherokee": [
    { trim: "Sport", msrp: 30000, from: 2014, to: 2026 },
    { trim: "Limited", msrp: 36000, from: 2014, to: 2026 },
    { trim: "Trailhawk", msrp: 42000, from: 2014, to: 2026 },
  ],
  "jeep|compass": [
    { trim: "Sport", msrp: 26000, from: 2017, to: 2026 },
    { trim: "Limited", msrp: 30000, from: 2017, to: 2026 },
    { trim: "Trailhawk", msrp: 34000, from: 2017, to: 2026 },
  ],
  "jeep|gladiator": [
    { trim: "Sport", msrp: 42000, from: 2020, to: 2026 },
    { trim: "Overland", msrp: 52000, from: 2020, to: 2026 },
    { trim: "Rubicon", msrp: 60000, from: 2020, to: 2026 },
  ],
  "jeep|grand wagoneer": [
    { trim: "Series III", msrp: 92000, from: 2022, to: 2026 },
    { trim: "Series IV", msrp: 108000, from: 2022, to: 2026 },
  ],
  "jeep|wagoneer": [
    { trim: "Series III", msrp: 62000, from: 2022, to: 2026 },
    { trim: "Series IV", msrp: 74000, from: 2022, to: 2026 },
  ],

  // ─── KIA ───────────────────────────────────────────────────────────────────
  "kia|k5": [
    { trim: "FX", msrp: 26000, from: 2021, to: 2026 },
    { trim: "EX", msrp: 30000, from: 2021, to: 2026 },
    { trim: "SX", msrp: 36000, from: 2021, to: 2026 },
  ],
  "kia|stinger": [
    { trim: "SE", msrp: 38000, from: 2018, to: 2026 },
    { trim: "GT", msrp: 48000, from: 2018, to: 2026 },
    { trim: "GT2", msrp: 58000, from: 2018, to: 2026 },
  ],
  "kia|sportage": [
    { trim: "LX FWD", msrp: 28000, from: 2017, to: 2026 },
    { trim: "EX AWD", msrp: 32000, from: 2017, to: 2026 },
    { trim: "SX Turbo", msrp: 38000, from: 2017, to: 2026 },
  ],
  "kia|sorento": [
    { trim: "LX", msrp: 32000, from: 2021, to: 2026 },
    { trim: "EX", msrp: 40000, from: 2021, to: 2026 },
    { trim: "SX", msrp: 48000, from: 2021, to: 2026 },
  ],
  "kia|telluride": [
    { trim: "LX", msrp: 38000, from: 2020, to: 2026 },
    { trim: "EX", msrp: 46000, from: 2020, to: 2026 },
    { trim: "SX", msrp: 56000, from: 2020, to: 2026 },
  ],
  "kia|carnival": [
    { trim: "LX", msrp: 36000, from: 2022, to: 2026 },
    { trim: "EX", msrp: 42000, from: 2022, to: 2026 },
    { trim: "SX", msrp: 50000, from: 2022, to: 2026 },
  ],
  "kia|ev6": [
    { trim: "Light Standard RWD", msrp: 44000, from: 2022, to: 2026 },
    { trim: "Light Long RWD", msrp: 48000, from: 2022, to: 2026 },
    { trim: "GT AWD", msrp: 58000, from: 2022, to: 2026 },
  ],
  "kia|ev9": [
    { trim: "Light RWD", msrp: 58000, from: 2023, to: 2026 },
    { trim: "Light Long RWD", msrp: 64000, from: 2023, to: 2026 },
    { trim: "GT AWD", msrp: 76000, from: 2023, to: 2026 },
  ],

  // ─── LAMBORGHINI ───────────────────────────────────────────────────────────
  "lamborghini|huracan": [
    { trim: "EVO RWD", msrp: 218000, from: 2021, to: 2024 },
    { trim: "EVO AWD", msrp: 248000, from: 2020, to: 2024 },
    { trim: "STO", msrp: 327000, from: 2022, to: 2024 },
  ],
  "lamborghini|urus": [
    { trim: "Base", msrp: 229000, from: 2019, to: 2022 },
    { trim: "S", msrp: 250000, from: 2023, to: 2026 },
    { trim: "Performante", msrp: 271000, from: 2023, to: 2026 },
  ],
  "lamborghini|revuelto": [
    { trim: "Coupe", msrp: 608000, from: 2024, to: 2026 },
    { trim: "Opera Unica", msrp: 850000, from: 2024, to: 2026 },
  ],

  // ─── LAND ROVER ────────────────────────────────────────────────────────────
  "land rover|range rover": [
    { trim: "SE", msrp: 108000, from: 2022, to: 2026 },
    { trim: "HSE", msrp: 122000, from: 2022, to: 2026 },
    { trim: "Autobiography", msrp: 155000, from: 2022, to: 2026 },
  ],
  "land rover|range rover sport": [
    { trim: "S", msrp: 84000, from: 2023, to: 2026 },
    { trim: "SE", msrp: 92000, from: 2023, to: 2026 },
    { trim: "HSE", msrp: 102000, from: 2023, to: 2026 },
  ],
  "land rover|range rover velar": [
    { trim: "P300", msrp: 68000, from: 2018, to: 2026 },
    { trim: "P400", msrp: 76000, from: 2018, to: 2026 },
    { trim: "P550", msrp: 88000, from: 2022, to: 2026 },
  ],
  "land rover|range rover evoque": [
    { trim: "SE", msrp: 52000, from: 2020, to: 2026 },
    { trim: "HSE", msrp: 58000, from: 2020, to: 2026 },
    { trim: "First Edition", msrp: 64000, from: 2020, to: 2026 },
  ],
  "land rover|defender": [
    { trim: "90 S", msrp: 56000, from: 2021, to: 2026 },
    { trim: "90 SE", msrp: 62000, from: 2021, to: 2026 },
    { trim: "110 HSE", msrp: 72000, from: 2021, to: 2026 },
  ],
  "land rover|discovery": [
    { trim: "SE", msrp: 62000, from: 2017, to: 2026 },
    { trim: "HSE", msrp: 76000, from: 2017, to: 2026 },
    { trim: "Landmark", msrp: 88000, from: 2017, to: 2026 },
  ],

  // ─── LEXUS ─────────────────────────────────────────────────────────────────
  "lexus|es": [
    { trim: "250", msrp: 42000, from: 2019, to: 2026 },
    { trim: "350", msrp: 48000, from: 2022, to: 2026 },
    { trim: "Hybrid", msrp: 50000, from: 2019, to: 2026 },
  ],
  "lexus|is": [
    { trim: "250", msrp: 40000, from: 2014, to: 2021 },
    { trim: "300", msrp: 42000, from: 2022, to: 2026 },
    { trim: "500", msrp: 58000, from: 2022, to: 2026 },
  ],
  "lexus|ls": [
    { trim: "500 AWD", msrp: 82000, from: 2018, to: 2026 },
    { trim: "500h", msrp: 92000, from: 2018, to: 2026 },
    { trim: "500 F Sport", msrp: 98000, from: 2020, to: 2026 },
  ],
  "lexus|nx": [
    { trim: "250", msrp: 42000, from: 2022, to: 2026 },
    { trim: "350", msrp: 48000, from: 2022, to: 2026 },
    { trim: "450h+", msrp: 56000, from: 2022, to: 2026 },
  ],
  "lexus|rx": [
    { trim: "350 FWD", msrp: 52000, from: 2023, to: 2026 },
    { trim: "350h", msrp: 58000, from: 2023, to: 2026 },
    { trim: "500h F Sport", msrp: 72000, from: 2023, to: 2026 },
  ],
  "lexus|gx": [
    { trim: "460", msrp: 62000, from: 2010, to: 2021 },
    { trim: "550", msrp: 68000, from: 2022, to: 2026 },
  ],
  "lexus|lx": [
    { trim: "570", msrp: 92000, from: 2016, to: 2021 },
    { trim: "600", msrp: 92000, from: 2022, to: 2026 },
    { trim: "F Sport", msrp: 108000, from: 2022, to: 2026 },
  ],
  "lexus|ux": [
    { trim: "250", msrp: 36000, from: 2019, to: 2026 },
    { trim: "250h", msrp: 38000, from: 2019, to: 2026 },
    { trim: "300h", msrp: 42000, from: 2023, to: 2026 },
  ],
  "lexus|rz": [
    { trim: "RWD", msrp: 56000, from: 2023, to: 2026 },
    { trim: "AWD", msrp: 62000, from: 2023, to: 2026 },
  ],
  "lexus|lc": [
    { trim: "500 Coupe", msrp: 98000, from: 2018, to: 2026 },
    { trim: "500 Convertible", msrp: 105000, from: 2021, to: 2026 },
    { trim: "500h Hybrid", msrp: 100000, from: 2018, to: 2026 },
  ],
  "lexus|rc": [
    { trim: "300", msrp: 48000, from: 2022, to: 2026 },
    { trim: "F Sport", msrp: 54000, from: 2014, to: 2026 },
    { trim: "350", msrp: 58000, from: 2014, to: 2021 },
  ],

  // ─── LINCOLN ───────────────────────────────────────────────────────────────
  "lincoln|corsair": [
    { trim: "Standard", msrp: 42000, from: 2020, to: 2026 },
    { trim: "Reserve", msrp: 50000, from: 2020, to: 2026 },
    { trim: "Grand Touring", msrp: 58000, from: 2020, to: 2026 },
  ],
  "lincoln|nautilus": [
    { trim: "Standard", msrp: 52000, from: 2019, to: 2026 },
    { trim: "Reserve", msrp: 60000, from: 2019, to: 2026 },
    { trim: "Grand Touring", msrp: 70000, from: 2019, to: 2026 },
  ],
  "lincoln|aviator": [
    { trim: "Standard", msrp: 56000, from: 2020, to: 2026 },
    { trim: "Reserve", msrp: 64000, from: 2020, to: 2026 },
    { trim: "Grand Touring", msrp: 72000, from: 2020, to: 2026 },
  ],
  "lincoln|navigator": [
    { trim: "Standard", msrp: 82000, from: 2018, to: 2026 },
    { trim: "Reserve", msrp: 92000, from: 2018, to: 2026 },
    { trim: "Black Label", msrp: 108000, from: 2018, to: 2026 },
  ],

  // ─── MAZDA ─────────────────────────────────────────────────────────────────
  "mazda|mazda3": [
    { trim: "2.5 Base", msrp: 24000, from: 2019, to: 2026 },
    { trim: "2.5 Preferred", msrp: 26000, from: 2019, to: 2026 },
    { trim: "2.5 Premium", msrp: 30000, from: 2019, to: 2026 },
  ],
  "mazda|cx-5": [
    { trim: "2.5 S", msrp: 30000, from: 2022, to: 2026 },
    { trim: "2.5 S Premium", msrp: 36000, from: 2022, to: 2026 },
    { trim: "2.5 Turbo Premium", msrp: 44000, from: 2022, to: 2026 },
  ],
  "mazda|cx-50": [
    { trim: "2.5 Base", msrp: 32000, from: 2023, to: 2026 },
    { trim: "2.5 Premium", msrp: 38000, from: 2023, to: 2026 },
    { trim: "2.5 Turbo Premium", msrp: 46000, from: 2023, to: 2026 },
  ],
  "mazda|cx-90": [
    { trim: "PHEV Select", msrp: 42000, from: 2024, to: 2026 },
    { trim: "PHEV Premium", msrp: 50000, from: 2024, to: 2026 },
    { trim: "Turbo Premium", msrp: 56000, from: 2024, to: 2026 },
  ],
  "mazda|cx-9": [
    { trim: "2.5 L", msrp: 38000, from: 2016, to: 2026 },
    { trim: "2.5 Preferred", msrp: 42000, from: 2016, to: 2026 },
    { trim: "2.5 Turbo Premium", msrp: 50000, from: 2021, to: 2026 },
  ],
  "mazda|mx-5 miata": [
    { trim: "Sport", msrp: 30000, from: 2016, to: 2026 },
    { trim: "Club", msrp: 34000, from: 2016, to: 2026 },
    { trim: "Grand Touring", msrp: 38000, from: 2016, to: 2026 },
  ],
  "mazda|mx-30": [
    { trim: "Select", msrp: 34000, from: 2023, to: 2026 },
    { trim: "Preferred", msrp: 38000, from: 2023, to: 2026 },
  ],

  // ─── MERCEDES-BENZ ─────────────────────────────────────────────────────────
  "mercedes-benz|a-class": [
    { trim: "A 220", msrp: 34000, from: 2019, to: 2026 },
    { trim: "A 220 AMG", msrp: 40000, from: 2020, to: 2026 },
  ],
  "mercedes-benz|c-class": [
    { trim: "C 300 Premium", msrp: 46950, from: 1994, to: 2026 },
    { trim: "C 300 Exclusive", msrp: 49200, from: 2022, to: 2026 },
    { trim: "C 300 Pinnacle", msrp: 51150, from: 2022, to: 2026 },
    { trim: "C 300 4MATIC", msrp: 48950, from: 2015, to: 2026 },
    { trim: "AMG C 43", msrp: 59900, from: 2017, to: 2026 },
    { trim: "AMG C 63 S E Performance", msrp: 83900, from: 2023, to: 2026 },
  ],
  "mercedes-benz|e-class": [
    { trim: "E 350 Sedan", msrp: 65000, from: 1994, to: 2026 },
    { trim: "E 350 4MATIC", msrp: 68000, from: 2016, to: 2026 },
    { trim: "AMG E 53", msrp: 88000, from: 2019, to: 2026 },
  ],
  "mercedes-benz|s-class": [
    { trim: "S 500 4MATIC", msrp: 115000, from: 2021, to: 2026 },
    { trim: "S 580 4MATIC", msrp: 132000, from: 2021, to: 2026 },
    { trim: "AMG S 63", msrp: 192000, from: 2024, to: 2026 },
  ],
  "mercedes-benz|cla": [
    { trim: "CLA 250", msrp: 42000, from: 2020, to: 2026 },
    { trim: "CLA 250 4MATIC", msrp: 44000, from: 2020, to: 2026 },
    { trim: "AMG CLA 45", msrp: 62000, from: 2020, to: 2026 },
  ],
  "mercedes-benz|cls": [
    { trim: "CLS 450 4MATIC", msrp: 75000, from: 2019, to: 2026 },
    { trim: "CLS 580 4MATIC", msrp: 92000, from: 2021, to: 2026 },
    { trim: "AMG CLS 53", msrp: 102000, from: 2021, to: 2026 },
  ],
  "mercedes-benz|gla": [
    { trim: "GLA 250", msrp: 41000, from: 2021, to: 2026 },
    { trim: "GLA 250 4MATIC", msrp: 44000, from: 2021, to: 2026 },
    { trim: "AMG GLA 45", msrp: 62000, from: 2021, to: 2026 },
  ],
  "mercedes-benz|glb": [
    { trim: "GLB 250", msrp: 43000, from: 2020, to: 2026 },
    { trim: "GLB 250 4MATIC", msrp: 45000, from: 2020, to: 2026 },
    { trim: "AMG GLB 35", msrp: 58000, from: 2020, to: 2026 },
  ],
  "mercedes-benz|glc": [
    { trim: "GLC 300 4MATIC", msrp: 52000, from: 2016, to: 2026 },
    { trim: "GLC 300 Coupe", msrp: 58000, from: 2016, to: 2026 },
    { trim: "AMG GLC 63", msrp: 88000, from: 2020, to: 2026 },
  ],
  "mercedes-benz|gle": [
    { trim: "GLE 350 4MATIC", msrp: 68000, from: 2016, to: 2026 },
    { trim: "GLE 450 4MATIC", msrp: 78000, from: 2020, to: 2026 },
    { trim: "AMG GLE 53", msrp: 98000, from: 2021, to: 2026 },
  ],
  "mercedes-benz|gls": [
    { trim: "GLS 450 4MATIC", msrp: 92000, from: 2021, to: 2026 },
    { trim: "GLS 580 4MATIC", msrp: 110000, from: 2021, to: 2026 },
    { trim: "AMG GLS 63", msrp: 138000, from: 2021, to: 2026 },
  ],
  "mercedes-benz|g-class": [
    { trim: "G 550", msrp: 142000, from: 2002, to: 2026 },
    { trim: "AMG G 63", msrp: 182000, from: 2013, to: 2026 },
    { trim: "AMG G 63 Grand", msrp: 222000, from: 2024, to: 2026 },
  ],
  "mercedes-benz|eqs": [
    { trim: "EQS 450+", msrp: 105000, from: 2022, to: 2026 },
    { trim: "EQS 500 4MATIC", msrp: 122000, from: 2022, to: 2026 },
    { trim: "EQS AMG", msrp: 165000, from: 2023, to: 2026 },
  ],
  "mercedes-benz|eqe": [
    { trim: "EQE 350+", msrp: 76000, from: 2023, to: 2026 },
    { trim: "EQE 500 4MATIC", msrp: 88000, from: 2023, to: 2026 },
  ],
  "mercedes-benz|amg gt": [
    { trim: "GT C", msrp: 120000, from: 2018, to: 2026 },
    { trim: "GT R", msrp: 156000, from: 2018, to: 2026 },
  ],
  "mercedes-benz|sl": [
    { trim: "450 4MATIC", msrp: 98000, from: 2022, to: 2026 },
    { trim: "580 4MATIC", msrp: 125000, from: 2022, to: 2026 },
    { trim: "AMG 63 4MATIC", msrp: 189000, from: 2023, to: 2026 },
  ],

  // ─── MITSUBISHI ────────────────────────────────────────────────────────────
  "mitsubishi|outlander": [
    { trim: "ES FWD", msrp: 28000, from: 2022, to: 2026 },
    { trim: "SE AWD", msrp: 32000, from: 2022, to: 2026 },
    { trim: "SEL Premium", msrp: 40000, from: 2022, to: 2026 },
  ],
  "mitsubishi|eclipse cross": [
    { trim: "ES FWD", msrp: 26000, from: 2018, to: 2026 },
    { trim: "SE AWD", msrp: 30000, from: 2018, to: 2026 },
    { trim: "SEL Premium", msrp: 36000, from: 2018, to: 2026 },
  ],
  "mitsubishi|outlander sport": [
    { trim: "ES FWD", msrp: 24000, from: 2011, to: 2026 },
    { trim: "SE AWD", msrp: 28000, from: 2011, to: 2026 },
    { trim: "SEL Premium", msrp: 32000, from: 2011, to: 2026 },
  ],
  "mitsubishi|mirage": [
    { trim: "Base", msrp: 16000, from: 2014, to: 2026 },
    { trim: "SE", msrp: 18000, from: 2014, to: 2026 },
    { trim: "SEL", msrp: 20000, from: 2014, to: 2026 },
  ],

  // ─── NISSAN ────────────────────────────────────────────────────────────────
  "nissan|altima": [
    { trim: "S FWD", msrp: 24000, from: 2019, to: 2026 },
    { trim: "SV AWD", msrp: 28000, from: 2019, to: 2026 },
    { trim: "Platinum AWD", msrp: 36000, from: 2019, to: 2026 },
  ],
  "nissan|rogue": [
    { trim: "S FWD", msrp: 30000, from: 2021, to: 2026 },
    { trim: "SV AWD", msrp: 34000, from: 2021, to: 2026 },
    { trim: "Platinum AWD", msrp: 42000, from: 2021, to: 2026 },
  ],
  "nissan|pathfinder": [
    { trim: "S FWD", msrp: 38000, from: 2022, to: 2026 },
    { trim: "SV AWD", msrp: 44000, from: 2022, to: 2026 },
    { trim: "Platinum AWD", msrp: 52000, from: 2022, to: 2026 },
  ],
  "nissan|murano": [
    { trim: "S FWD", msrp: 36000, from: 2015, to: 2026 },
    { trim: "SV AWD", msrp: 42000, from: 2015, to: 2026 },
    { trim: "Platinum AWD", msrp: 52000, from: 2015, to: 2026 },
  ],
  "nissan|armada": [
    { trim: "SV", msrp: 52000, from: 2017, to: 2026 },
    { trim: "SL", msrp: 62000, from: 2017, to: 2026 },
    { trim: "Platinum", msrp: 72000, from: 2017, to: 2026 },
  ],
  "nissan|frontier": [
    { trim: "S", msrp: 32000, from: 2022, to: 2026 },
    { trim: "SV", msrp: 38000, from: 2022, to: 2026 },
    { trim: "PRO-4X", msrp: 48000, from: 2022, to: 2026 },
  ],
  "nissan|titan": [
    { trim: "S", msrp: 42000, from: 2016, to: 2026 },
    { trim: "SV", msrp: 54000, from: 2016, to: 2026 },
    { trim: "Platinum", msrp: 66000, from: 2016, to: 2026 },
  ],
  "nissan|z": [
    { trim: "Sport", msrp: 42000, from: 2023, to: 2026 },
    { trim: "Performance", msrp: 52000, from: 2023, to: 2026 },
    { trim: "NISMO", msrp: 62000, from: 2024, to: 2026 },
  ],
  "nissan|ariya": [
    { trim: "FWD", msrp: 48000, from: 2023, to: 2026 },
    { trim: "AWD", msrp: 56000, from: 2023, to: 2026 },
    { trim: "Platinum", msrp: 64000, from: 2023, to: 2026 },
  ],
  "nissan|leaf": [
    { trim: "S", msrp: 30000, from: 2011, to: 2026 },
    { trim: "SV", msrp: 34000, from: 2011, to: 2026 },
    { trim: "Plus", msrp: 38000, from: 2021, to: 2026 },
  ],

  // ─── PORSCHE ───────────────────────────────────────────────────────────────
  "porsche|911": [
    { trim: "Carrera", msrp: 114400, from: 1965, to: 2026 },
    { trim: "Carrera T", msrp: 124900, from: 1965, to: 2026 },
    { trim: "Carrera 4", msrp: 121700, from: 1965, to: 2026 },
    { trim: "Carrera S", msrp: 131300, from: 1965, to: 2026 },
    { trim: "Carrera 4S", msrp: 138600, from: 1965, to: 2026 },
    { trim: "Carrera GTS", msrp: 150900, from: 2011, to: 2026 },
    { trim: "Carrera 4 GTS", msrp: 158200, from: 2011, to: 2026 },
    { trim: "Turbo", msrp: 197200, from: 1975, to: 2026 },
    { trim: "Turbo S", msrp: 230400, from: 2004, to: 2026 },
    { trim: "GT3", msrp: 182900, from: 2004, to: 2026 },
    { trim: "GT3 RS", msrp: 241300, from: 2004, to: 2026 },
    { trim: "S/T", msrp: 290000, from: 2024, to: 2026 },
  ],
  "porsche|718 cayman": [
    { trim: "Base", msrp: 73000, from: 2016, to: 2026 },
    { trim: "S", msrp: 85000, from: 2016, to: 2026 },
    { trim: "GT4", msrp: 104000, from: 2016, to: 2026 },
  ],
  "porsche|718 boxster": [
    { trim: "Base", msrp: 72000, from: 2016, to: 2026 },
    { trim: "S", msrp: 84000, from: 2016, to: 2026 },
    { trim: "Spyder", msrp: 100000, from: 2016, to: 2026 },
  ],
  "porsche|cayenne": [
    { trim: "Base", msrp: 82200, from: 2003, to: 2026 },
    { trim: "S", msrp: 103300, from: 2003, to: 2026 },
    { trim: "Turbo", msrp: 157500, from: 2003, to: 2026 },
  ],
  "porsche|macan": [
    { trim: "Base", msrp: 68000, from: 2015, to: 2023 },
    { trim: "S", msrp: 79000, from: 2015, to: 2023 },
    { trim: "GTS", msrp: 92000, from: 2016, to: 2023 },
  ],
  "porsche|panamera": [
    { trim: "Base", msrp: 92000, from: 2010, to: 2026 },
    { trim: "4S", msrp: 118000, from: 2010, to: 2026 },
    { trim: "Turbo", msrp: 172000, from: 2010, to: 2026 },
  ],
  "porsche|taycan": [
    { trim: "RWD", msrp: 95000, from: 2020, to: 2026 },
    { trim: "4S", msrp: 126000, from: 2020, to: 2026 },
    { trim: "Turbo", msrp: 163000, from: 2020, to: 2026 },
  ],
  "porsche|taycan cross turismo": [
    { trim: "RWD", msrp: 105000, from: 2021, to: 2026 },
    { trim: "Sport Turismo", msrp: 130000, from: 2022, to: 2026 },
  ],
  "porsche|918 spyder": [
    { trim: "Base", msrp: 845000, from: 2013, to: 2015 },
    { trim: "Weissach Package", msrp: 929000, from: 2013, to: 2015 },
  ],
  "porsche|carrera gt": [
    { trim: "Base", msrp: 448000, from: 2004, to: 2006 },
  ],

  // ─── RAM ───────────────────────────────────────────────────────────────────
  "ram|1500": [
    { trim: "Tradesman", msrp: 38000, from: 2019, to: 2026 },
    { trim: "Big Horn", msrp: 48000, from: 2019, to: 2026 },
    { trim: "Limited", msrp: 62000, from: 2019, to: 2026 },
  ],
  "ram|2500": [
    { trim: "Tradesman", msrp: 46000, from: 2019, to: 2026 },
    { trim: "Big Horn", msrp: 52000, from: 2019, to: 2026 },
    { trim: "Limited", msrp: 76000, from: 2019, to: 2026 },
  ],
  "ram|3500": [
    { trim: "Tradesman", msrp: 54000, from: 2019, to: 2026 },
    { trim: "Big Horn", msrp: 62000, from: 2019, to: 2026 },
    { trim: "Limited", msrp: 84000, from: 2019, to: 2026 },
  ],

  // ─── SUBARU ────────────────────────────────────────────────────────────────
  "subaru|outback": [
    { trim: "Base", msrp: 30000, from: 2020, to: 2026 },
    { trim: "Premium", msrp: 34000, from: 2020, to: 2026 },
    { trim: "Limited", msrp: 38000, from: 2020, to: 2026 },
  ],
  "subaru|forester": [
    { trim: "Base", msrp: 28000, from: 2019, to: 2026 },
    { trim: "Premium", msrp: 32000, from: 2019, to: 2026 },
    { trim: "Limited", msrp: 36000, from: 2019, to: 2026 },
  ],
  "subaru|crosstrek": [
    { trim: "Base", msrp: 26000, from: 2018, to: 2026 },
    { trim: "Premium", msrp: 30000, from: 2018, to: 2026 },
    { trim: "Limited", msrp: 34000, from: 2018, to: 2026 },
  ],
  "subaru|wrx": [
    { trim: "Base", msrp: 32000, from: 2021, to: 2026 },
    { trim: "Premium", msrp: 36000, from: 2021, to: 2026 },
    { trim: "Limited", msrp: 42000, from: 2021, to: 2026 },
  ],
  "subaru|brz": [
    { trim: "Base", msrp: 30000, from: 2013, to: 2026 },
    { trim: "Premium", msrp: 34000, from: 2013, to: 2026 },
    { trim: "Limited", msrp: 38000, from: 2013, to: 2026 },
  ],
  "subaru|solterra": [
    { trim: "Standard", msrp: 46000, from: 2023, to: 2026 },
    { trim: "Premium", msrp: 52000, from: 2023, to: 2026 },
  ],
  "subaru|ascent": [
    { trim: "Base", msrp: 38000, from: 2019, to: 2026 },
    { trim: "Premium", msrp: 44000, from: 2019, to: 2026 },
    { trim: "Touring", msrp: 52000, from: 2019, to: 2026 },
  ],

  // ─── TESLA ─────────────────────────────────────────────────────────────────
  "tesla|model s": [
    { trim: "Long Range", msrp: 88990, from: 2013, to: 2026 },
    { trim: "Plaid", msrp: 108990, from: 2021, to: 2026 },
  ],
  "tesla|model 3": [
    { trim: "Rear-Wheel Drive", msrp: 38990, from: 2023, to: 2026 },
    { trim: "Long Range AWD", msrp: 47740, from: 2023, to: 2026 },
    { trim: "Performance AWD", msrp: 54990, from: 2024, to: 2026 },
  ],
  "tesla|model x": [
    { trim: "Long Range", msrp: 98990, from: 2016, to: 2026 },
    { trim: "Plaid", msrp: 118990, from: 2021, to: 2026 },
  ],
  "tesla|model y": [
    { trim: "Rear-Wheel Drive", msrp: 42990, from: 2023, to: 2026 },
    { trim: "Long Range AWD", msrp: 47990, from: 2023, to: 2026 },
    { trim: "Performance AWD", msrp: 51490, from: 2023, to: 2026 },
  ],
  "tesla|cybertruck": [
    { trim: "AWD", msrp: 82235, from: 2024, to: 2026 },
    { trim: "Cyberbeast", msrp: 102235, from: 2024, to: 2026 },
  ],

  // ─── TOYOTA ────────────────────────────────────────────────────────────────
  "toyota|camry": [
    { trim: "LE", msrp: 26420, from: 2018, to: 2026 },
    { trim: "SE", msrp: 27960, from: 2018, to: 2026 },
    { trim: "LE Hybrid", msrp: 28855, from: 2018, to: 2026 },
    { trim: "SE Nightshade", msrp: 28960, from: 2018, to: 2026 },
    { trim: "XLE", msrp: 31170, from: 2018, to: 2026 },
    { trim: "XSE", msrp: 31720, from: 2018, to: 2026 },
    { trim: "TRD V6", msrp: 33485, from: 2020, to: 2026 },
    { trim: "XLE V6", msrp: 36295, from: 2018, to: 2026 },
    { trim: "XSE V6", msrp: 36845, from: 2018, to: 2026 },
  ],
  "toyota|corolla": [
    { trim: "L", msrp: 22000, from: 2019, to: 2026 },
    { trim: "LE", msrp: 24000, from: 2019, to: 2026 },
    { trim: "XLE", msrp: 28000, from: 2019, to: 2026 },
  ],
  "toyota|rav4": [
    { trim: "LE", msrp: 28675, from: 2019, to: 2026 },
    { trim: "XLE", msrp: 30185, from: 2019, to: 2026 },
    { trim: "XLE Premium", msrp: 33075, from: 2019, to: 2026 },
    { trim: "Adventure", msrp: 34870, from: 2019, to: 2026 },
    { trim: "Limited", msrp: 36980, from: 2019, to: 2026 },
    { trim: "TRD Off-Road", msrp: 38295, from: 2019, to: 2026 },
    { trim: "Hybrid SE", msrp: 34120, from: 2019, to: 2026 },
    { trim: "Prime SE (PHEV)", msrp: 43690, from: 2021, to: 2026 },
    { trim: "Prime XSE (PHEV)", msrp: 47560, from: 2021, to: 2026 },
  ],
  "toyota|highlander": [
    { trim: "L", msrp: 38000, from: 2020, to: 2026 },
    { trim: "LE", msrp: 40000, from: 2020, to: 2026 },
    { trim: "Limited", msrp: 50000, from: 2020, to: 2026 },
  ],
  "toyota|4runner": [
    { trim: "SR5", msrp: 42000, from: 2010, to: 2026 },
    { trim: "Limited", msrp: 56000, from: 2010, to: 2026 },
    { trim: "TRD Pro", msrp: 68000, from: 2018, to: 2026 },
  ],
  "toyota|tacoma": [
    { trim: "SR", msrp: 32000, from: 2016, to: 2026 },
    { trim: "SR5", msrp: 36000, from: 2016, to: 2026 },
    { trim: "Limited", msrp: 46000, from: 2016, to: 2026 },
  ],
  "toyota|tundra": [
    { trim: "SR", msrp: 40000, from: 2022, to: 2026 },
    { trim: "SR5", msrp: 44000, from: 2022, to: 2026 },
    { trim: "Limited", msrp: 52000, from: 2022, to: 2026 },
  ],
  "toyota|sienna": [
    { trim: "LE", msrp: 38000, from: 2021, to: 2026 },
    { trim: "XLE", msrp: 44000, from: 2021, to: 2026 },
    { trim: "Limited", msrp: 50000, from: 2021, to: 2026 },
  ],
  "toyota|prius": [
    { trim: "LE", msrp: 30000, from: 2023, to: 2026 },
    { trim: "XLE", msrp: 34000, from: 2023, to: 2026 },
    { trim: "Limited", msrp: 38000, from: 2023, to: 2026 },
  ],
  "toyota|supra": [
    { trim: "2.0", msrp: 46000, from: 2021, to: 2026 },
    { trim: "3.0", msrp: 56000, from: 2020, to: 2026 },
    { trim: "3.0 Premium", msrp: 62000, from: 2020, to: 2026 },
  ],
  "toyota|bz4x": [
    { trim: "FWD", msrp: 44000, from: 2023, to: 2026 },
    { trim: "AWD", msrp: 50000, from: 2023, to: 2026 },
  ],
  "toyota|crown": [
    { trim: "Standard", msrp: 42000, from: 2023, to: 2026 },
    { trim: "Premium", msrp: 48000, from: 2023, to: 2026 },
  ],
  "toyota|venza": [
    { trim: "LE", msrp: 36000, from: 2021, to: 2026 },
    { trim: "XLE AWD", msrp: 42000, from: 2021, to: 2026 },
    { trim: "Limited", msrp: 48000, from: 2021, to: 2026 },
  ],
  "toyota|sequoia": [
    { trim: "Sr", msrp: 62000, from: 2023, to: 2026 },
    { trim: "Limited", msrp: 72000, from: 2023, to: 2026 },
  ],
  "toyota|gr86": [
    { trim: "Base", msrp: 30000, from: 2022, to: 2026 },
    { trim: "Premium", msrp: 34000, from: 2022, to: 2026 },
  ],

  // ─── VOLKSWAGEN ────────────────────────────────────────────────────────────
  "volkswagen|jetta": [
    { trim: "S", msrp: 22000, from: 2019, to: 2026 },
    { trim: "SE", msrp: 24000, from: 2019, to: 2026 },
    { trim: "SEL", msrp: 28000, from: 2019, to: 2026 },
  ],
  "volkswagen|golf gti": [
    { trim: "S", msrp: 32000, from: 2015, to: 2026 },
    { trim: "SE", msrp: 36000, from: 2015, to: 2026 },
    { trim: "Autobahn", msrp: 42000, from: 2015, to: 2026 },
  ],
  "volkswagen|golf r": [
    { trim: "S", msrp: 48000, from: 2015, to: 2026 },
    { trim: "SE", msrp: 52000, from: 2015, to: 2026 },
  ],
  "volkswagen|passat": [
    { trim: "L", msrp: 26000, from: 2020, to: 2023 },
    { trim: "S", msrp: 28000, from: 2020, to: 2023 },
    { trim: "SE", msrp: 32000, from: 2020, to: 2023 },
  ],
  "volkswagen|tiguan": [
    { trim: "S FWD", msrp: 30000, from: 2018, to: 2026 },
    { trim: "SE AWD", msrp: 34000, from: 2018, to: 2026 },
    { trim: "Limited AWD", msrp: 40000, from: 2018, to: 2026 },
  ],
  "volkswagen|atlas": [
    { trim: "S FWD", msrp: 36000, from: 2018, to: 2026 },
    { trim: "SE AWD", msrp: 42000, from: 2018, to: 2026 },
    { trim: "Limited AWD", msrp: 52000, from: 2018, to: 2026 },
  ],
  "volkswagen|atlas cross sport": [
    { trim: "S FWD", msrp: 36000, from: 2020, to: 2026 },
    { trim: "SE AWD", msrp: 42000, from: 2020, to: 2026 },
    { trim: "Limited AWD", msrp: 52000, from: 2020, to: 2026 },
  ],
  "volkswagen|taos": [
    { trim: "S FWD", msrp: 26000, from: 2022, to: 2026 },
    { trim: "SE AWD", msrp: 30000, from: 2022, to: 2026 },
    { trim: "Limited AWD", msrp: 36000, from: 2022, to: 2026 },
  ],
  "volkswagen|id.4": [
    { trim: "Standard RWD", msrp: 42000, from: 2021, to: 2026 },
    { trim: "Pro RWD", msrp: 44000, from: 2021, to: 2026 },
    { trim: "Pro S AWD", msrp: 54000, from: 2022, to: 2026 },
  ],
  "volkswagen|arteon": [
    { trim: "S", msrp: 42000, from: 2019, to: 2026 },
    { trim: "SE", msrp: 46000, from: 2019, to: 2026 },
    { trim: "SEL Premium", msrp: 52000, from: 2019, to: 2026 },
  ],

  // ─── VOLVO ─────────────────────────────────────────────────────────────────
  "volvo|s60": [
    { trim: "T5 Momentum", msrp: 42000, from: 2019, to: 2026 },
    { trim: "T6 R-Design AWD", msrp: 50000, from: 2019, to: 2026 },
    { trim: "T8 Inscription", msrp: 60000, from: 2019, to: 2026 },
  ],
  "volvo|s90": [
    { trim: "T5 Momentum", msrp: 58000, from: 2016, to: 2026 },
    { trim: "T6 R-Design", msrp: 66000, from: 2016, to: 2026 },
    { trim: "T8 Inscription", msrp: 80000, from: 2018, to: 2026 },
  ],
  "volvo|v60": [
    { trim: "T5 Momentum", msrp: 44000, from: 2019, to: 2026 },
    { trim: "T6 AWD R-Design", msrp: 52000, from: 2019, to: 2026 },
    { trim: "T8 Inscription", msrp: 62000, from: 2019, to: 2026 },
  ],
  "volvo|xc40": [
    { trim: "Momentum FWD", msrp: 38000, from: 2018, to: 2026 },
    { trim: "R-Design AWD", msrp: 44000, from: 2018, to: 2026 },
    { trim: "Inscription", msrp: 50000, from: 2018, to: 2026 },
  ],
  "volvo|c40": [
    { trim: "Core", msrp: 58000, from: 2022, to: 2026 },
    { trim: "Plus", msrp: 64000, from: 2022, to: 2026 },
    { trim: "Ultimate", msrp: 72000, from: 2022, to: 2026 },
  ],
  "volvo|xc60": [
    { trim: "T5 Momentum FWD", msrp: 48000, from: 2018, to: 2026 },
    { trim: "T6 AWD R-Design", msrp: 56000, from: 2018, to: 2026 },
    { trim: "T8 Inscription", msrp: 68000, from: 2019, to: 2026 },
  ],
  "volvo|xc90": [
    { trim: "T5 Momentum FWD", msrp: 62000, from: 2015, to: 2026 },
    { trim: "T6 AWD R-Design", msrp: 72000, from: 2015, to: 2026 },
    { trim: "T8 Inscription", msrp: 88000, from: 2018, to: 2026 },
  ],
  "volvo|ex90": [
    { trim: "Core", msrp: 78000, from: 2024, to: 2026 },
    { trim: "Plus", msrp: 88000, from: 2024, to: 2026 },
    { trim: "Ultra", msrp: 102000, from: 2024, to: 2026 },
  ],
  // ─── BUGATTI ───────────────────────────────────────────────────────────────
  "bugatti|chiron": [
    { trim: "Base", msrp: 2998000, from: 2016, to: 2022 },
    { trim: "Pur Sport", msrp: 3600000, from: 2020, to: 2022 },
    { trim: "Super Sport 300+", msrp: 3900000, from: 2021, to: 2022 },
  ],
  "bugatti|veyron": [
    { trim: "Base", msrp: 1700000, from: 2005, to: 2011 },
    { trim: "Grand Sport Vitesse", msrp: 2250000, from: 2012, to: 2015 },
  ],
  // ─── MCLAREN ───────────────────────────────────────────────────────────────
  "mclaren|p1": [
    { trim: "Base", msrp: 1150000, from: 2013, to: 2015 },
    { trim: "GTR", msrp: 3100000, from: 2015, to: 2016 },
  ],
  "mclaren|f1": [
    { trim: "Base", msrp: 815000, from: 1992, to: 1998 },
    { trim: "LM", msrp: 1250000, from: 1995, to: 1996 },
  ],
  "mclaren|senna": [
    { trim: "Base", msrp: 958966, from: 2018, to: 2019 },
    { trim: "GTR", msrp: 1650000, from: 2019, to: 2020 },
  ],
  "mclaren|720s": [
    { trim: "Base", msrp: 284745, from: 2017, to: 2023 },
    { trim: "Spider", msrp: 315000, from: 2019, to: 2023 },
  ],
  "mclaren|750s": [
    { trim: "Base", msrp: 324000, from: 2023, to: 2026 },
  ],
  // ─── KOENIGSEGG ────────────────────────────────────────────────────────────
  "koenigsegg|jesko": [
    { trim: "Base", msrp: 3000000, from: 2021, to: 2026 },
    { trim: "Absolut", msrp: 3400000, from: 2021, to: 2026 },
  ],
  "koenigsegg|agera": [
    { trim: "R", msrp: 1600000, from: 2011, to: 2014 },
    { trim: "RS", msrp: 2500000, from: 2015, to: 2018 },
  ],
  // ─── PAGANI ───────────────────────────────────────────────────────────────
  "pagani|huayra": [
    { trim: "Base", msrp: 1314000, from: 2012, to: 2018 },
    { trim: "BC", msrp: 2550000, from: 2016, to: 2019 },
    { trim: "Roadster", msrp: 2600000, from: 2017, to: 2019 },
  ],
  "pagani|zonda": [
    { trim: "C12", msrp: 325000, from: 1999, to: 2002 },
    { trim: "S 7.3", msrp: 500000, from: 2002, to: 2005 },
    { trim: "F", msrp: 741000, from: 2005, to: 2011 },
    { trim: "Cinque", msrp: 1900000, from: 2009, to: 2010 },
  ],
};

// Verification check
const REQUIRED_KEYS = [
  "acura|integra","acura|tlx","acura|rdx","acura|mdx","acura|nsx",
  "audi|a3","audi|a4","audi|a5","audi|a6","audi|a7","audi|a8",
  "audi|q3","audi|q4 e-tron","audi|q5","audi|q7","audi|q8",
  "audi|e-tron","audi|e-tron gt","audi|rs e-tron gt",
  "audi|rs3","audi|rs5","audi|rs6","audi|rs7",
  "audi|s3","audi|s4","audi|s5","audi|tt","audi|r8",
  "bmw|2 series","bmw|3 series","bmw|4 series","bmw|5 series",
  "bmw|7 series","bmw|8 series","bmw|x1","bmw|x2","bmw|x3",
  "bmw|x4","bmw|x5","bmw|x6","bmw|x7","bmw|m2","bmw|m3",
  "bmw|m4","bmw|m5","bmw|m8","bmw|ix","bmw|i4","bmw|i7",
  "bmw|z4","bmw|xm","buick|encore","buick|encore gx",
  "buick|envision","buick|enclave","cadillac|ct4","cadillac|ct5",
  "cadillac|xt4","cadillac|xt5","cadillac|xt6","cadillac|escalade",
  "cadillac|lyriq","cadillac|celestiq","chevrolet|malibu",
  "chevrolet|camaro","chevrolet|corvette","chevrolet|silverado",
  "chevrolet|equinox","chevrolet|tahoe","chevrolet|suburban",
  "chevrolet|traverse","chevrolet|blazer","chevrolet|trailblazer",
  "chevrolet|bolt ev","chevrolet|blazer ev","chevrolet|equinox ev",
  "chevrolet|colorado","chrysler|pacifica","chrysler|300",
  "dodge|charger","dodge|challenger","dodge|durango","dodge|hornet",
  "ferrari|roma","ferrari|sf90 stradale","ferrari|f8 tributo",
  "ferrari|296 gtb","ferrari|purosangue","ferrari|portofino m",
  "ferrari|812 superfast","ferrari|laferrari","ferrari|enzo",
  "ferrari|f50","ferrari|f40",
  "bugatti|chiron","bugatti|veyron",
  "mclaren|p1","mclaren|f1","mclaren|senna","mclaren|720s","mclaren|750s",
  "koenigsegg|jesko","koenigsegg|agera",
  "pagani|huayra","pagani|zonda",
  "ford|mustang","ford|f-150",
  "ford|explorer","ford|escape","ford|edge","ford|expedition",
  "ford|bronco","ford|bronco sport","ford|maverick",
  "ford|mustang mach-e","ford|f-150 lightning","genesis|g70",
  "genesis|g80","genesis|g90","genesis|gv70","genesis|gv80",
  "genesis|gv60","gmc|sierra","gmc|yukon","gmc|terrain",
  "gmc|acadia","gmc|canyon","gmc|hummer ev","honda|civic",
  "honda|accord","honda|cr-v","honda|pilot","honda|odyssey",
  "honda|ridgeline","honda|passport","honda|hr-v","honda|prologue",
  "hyundai|tucson","hyundai|santa fe","hyundai|palisade",
  "hyundai|ioniq 5","hyundai|ioniq 6","hyundai|elantra",
  "hyundai|sonata","hyundai|kona","hyundai|venue",
  "infiniti|q50","infiniti|q60","infiniti|qx50","infiniti|qx55",
  "infiniti|qx60","infiniti|qx80","jeep|wrangler",
  "jeep|grand cherokee","jeep|grand cherokee l","jeep|cherokee",
  "jeep|compass","jeep|gladiator","jeep|grand wagoneer",
  "jeep|wagoneer","kia|k5","kia|stinger","kia|sportage",
  "kia|sorento","kia|telluride","kia|carnival","kia|ev6","kia|ev9",
  "lamborghini|huracan","lamborghini|urus","lamborghini|revuelto",
  "land rover|range rover","land rover|range rover sport",
  "land rover|range rover velar","land rover|range rover evoque",
  "land rover|defender","land rover|discovery","lexus|es",
  "lexus|is","lexus|ls","lexus|nx","lexus|rx","lexus|gx",
  "lexus|lx","lexus|ux","lexus|rz","lexus|lc","lexus|rc",
  "lincoln|corsair","lincoln|nautilus","lincoln|aviator",
  "lincoln|navigator","mazda|mazda3","mazda|cx-5","mazda|cx-50",
  "mazda|cx-90","mazda|cx-9","mazda|mx-5 miata","mazda|mx-30",
  "mercedes-benz|a-class","mercedes-benz|c-class",
  "mercedes-benz|e-class","mercedes-benz|s-class",
  "mercedes-benz|cla","mercedes-benz|cls","mercedes-benz|gla",
  "mercedes-benz|glb","mercedes-benz|glc","mercedes-benz|gle",
  "mercedes-benz|gls","mercedes-benz|g-class","mercedes-benz|eqs",
  "mercedes-benz|eqe","mercedes-benz|amg gt","mercedes-benz|sl",
  "mitsubishi|outlander","mitsubishi|eclipse cross",
  "mitsubishi|outlander sport","mitsubishi|mirage",
  "nissan|altima","nissan|rogue","nissan|pathfinder",
  "nissan|murano","nissan|armada","nissan|frontier",
  "nissan|titan","nissan|z","nissan|ariya","nissan|leaf",
  "porsche|911","porsche|718 cayman","porsche|718 boxster",
  "porsche|cayenne","porsche|macan","porsche|panamera",
  "porsche|taycan","porsche|taycan cross turismo",
  "porsche|918 spyder","porsche|carrera gt",
  "ram|1500","ram|2500","ram|3500","subaru|outback",
  "subaru|forester","subaru|crosstrek","subaru|wrx","subaru|brz",
  "subaru|solterra","subaru|ascent","tesla|model s",
  "tesla|model 3","tesla|model x","tesla|model y",
  "tesla|cybertruck","toyota|camry","toyota|corolla",
  "toyota|rav4","toyota|highlander","toyota|4runner",
  "toyota|tacoma","toyota|tundra","toyota|sienna","toyota|prius",
  "toyota|supra","toyota|bz4x","toyota|crown","toyota|venza",
  "toyota|sequoia","toyota|gr86","volkswagen|jetta",
  "volkswagen|golf gti","volkswagen|golf r","volkswagen|passat",
  "volkswagen|tiguan","volkswagen|atlas",
  "volkswagen|atlas cross sport","volkswagen|taos",
  "volkswagen|id.4","volkswagen|arteon","volvo|s60","volvo|s90",
  "volvo|v60","volvo|xc40","volvo|c40","volvo|xc60",
  "volvo|xc90","volvo|ex90"
];

const missing = REQUIRED_KEYS.filter(k => !ALL_TRIM_DATA[k]);
if (missing.length > 0) {
  console.error("⚠️  MISSING TRIM DATA FOR:", missing);
} else {
  console.log("✓ All trim data verified —", Object.keys(ALL_TRIM_DATA).length, "models loaded");
}

export default ALL_TRIM_DATA;

import express from 'express';
import ALL_TRIM_DATA from '../data/trimData.js';
import { getDepreciationBreakdown } from '../utils/dataGenerator.js';

const router = express.Router();

// Helper function to get trims for a vehicle with depreciation applied
function getTrims(make, model, year) {
  const key = `${make.toLowerCase()}|${model.toLowerCase()}`;
  const yearNum = parseInt(year);

  const trimsArr = ALL_TRIM_DATA[key];
  if (!trimsArr || trimsArr.length === 0) {
    return [];
  }

  // Filter trims by year
  const availableTrims = trimsArr.filter(
    trim => yearNum >= trim.from && yearNum <= trim.to
  );

  if (availableTrims.length === 0) {
    return [];
  }

  const depreciatedTrims = availableTrims.map(trim => {
    // Apply year-based depreciation to every trim, passing the trim name
    const breakdown = getDepreciationBreakdown(make, model, yearNum, trim.trim);
    const multiplier = breakdown.finalMultiplier;

    return {
      trim: trim.trim,
      originalMsrp: trim.msrp,
      msrp: Math.round(trim.msrp * multiplier),
      invoicePrice: Math.round(trim.msrp * multiplier * 0.94),
      depreciationPct: Math.round((1 - multiplier) * 100),
      from: trim.from,
      to: trim.to
    };
  });

  // Return sorted by depreciated MSRP (base trim first)
  return depreciatedTrims.sort((a, b) => a.msrp - b.msrp);
}

router.get('/trims/:make/:model/:year', async (req, res) => {
  try {
    const { make, model, year } = req.params;
    const trims = getTrims(make, model, parseInt(year));
    res.json(trims);
  } catch (error) {
    console.error('Error fetching trims:', error.message);
    res.status(500).json({ error: 'Failed to fetch trim data' });
  }
});

export default router;

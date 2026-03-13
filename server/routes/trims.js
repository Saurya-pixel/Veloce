import express from 'express';
import ALL_TRIM_DATA from '../data/trimData.js';

const router = express.Router();

// Helper function to get trims for a vehicle
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

  // If no trims for this year, return empty (will get fallback from MODEL_BASE_MSRP)
  if (availableTrims.length === 0) {
    return [];
  }

  // Return sorted by MSRP (base trim first)
  return availableTrims.sort((a, b) => a.msrp - b.msrp);
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

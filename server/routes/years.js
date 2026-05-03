import express from 'express';
import { getModelStartYear } from '../utils/modelData.js';
import ALL_TRIM_DATA from '../data/trimData.js';

const router = express.Router();

router.get('/years/:make/:model', (req, res) => {
  try {
    const { make, model } = req.params;
    const key = `${make.toLowerCase()}|${model.toLowerCase()}`;
    const trims = ALL_TRIM_DATA[key];
    
    let startYear, endYear;
    const currentYear = 2026;

    if (trims && trims.length > 0) {
      startYear = Math.min(...trims.map(t => t.from));
      endYear = Math.max(...trims.map(t => t.to));
    } else {
      startYear = getModelStartYear(make, model);
      endYear = currentYear;
    }

    // Generate years array from start year to end year (descending)
    const years = [];
    for (let year = endYear; year >= startYear; year--) {
      years.push(year);
    }

    res.json(years);
  } catch (error) {
    console.error('Error generating years:', error.message);
    res.status(500).json({ error: 'Failed to generate year range' });
  }
});

export default router;

import express from 'express';
import { getModelStartYear } from '../utils/modelData.js';

const router = express.Router();

router.get('/years/:make/:model', (req, res) => {
  try {
    const { make, model } = req.params;
    const startYear = getModelStartYear(make, model);
    const currentYear = 2026;

    // Generate years array from start year to 2026 (descending)
    const years = [];
    for (let year = currentYear; year >= startYear; year--) {
      years.push(year);
    }

    res.json(years);
  } catch (error) {
    console.error('Error generating years:', error.message);
    res.status(500).json({ error: 'Failed to generate year range' });
  }
});

export default router;

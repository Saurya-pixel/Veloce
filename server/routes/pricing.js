import express from 'express';
import { generatePricingData, getDepreciationBreakdown } from '../utils/dataGenerator.js';
import { getBasePrice } from '../utils/pricingData.js';

const router = express.Router();

router.get('/pricing/:make/:model/:year', async (req, res) => {
  try {
    const { make, model, year } = req.params;
    const yearNum = parseInt(year);
    const { msrp: basePrice, confidence } = getBasePrice(make, model);
    const pricing = generatePricingData(make, model, yearNum, basePrice, confidence);
    const breakdown = getDepreciationBreakdown(make, model, yearNum);

    res.json({
      ...pricing,
      breakdown,
      basePrice
    });
  } catch (error) {
    console.error('Error generating pricing:', error.message);
    res.status(500).json({ error: 'Failed to generate pricing data' });
  }
});

export default router;

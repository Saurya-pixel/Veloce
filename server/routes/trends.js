import express from 'express';
import { generateTrendData } from '../utils/dataGenerator.js';

const router = express.Router();

router.get('/trends/:make/:model/:year/:trim?', async (req, res) => {
  try {
    const { make, model, year, trim } = req.params;
    const trends = generateTrendData(make, model, parseInt(year), trim);
    res.json(trends);
  } catch (error) {
    console.error('Error generating trends:', error.message);
    res.status(500).json({ error: 'Failed to generate trend data' });
  }
});

export default router;

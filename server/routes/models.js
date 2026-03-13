import express from 'express';
import axios from 'axios';

const router = express.Router();
const modelsCache = {};
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

router.get('/models/:make', async (req, res) => {
  try {
    const { make } = req.params;
    const now = Date.now();

    // Return cached data if available and fresh
    if (modelsCache[make] && now - modelsCache[make].timestamp < CACHE_DURATION) {
      return res.json(modelsCache[make].data);
    }

    // First, get the Make ID for the given make name
    const makesResponse = await axios.get(
      'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json'
    );

    const makeRecord = makesResponse.data.Results.find(
      m => m.Make_Name.toLowerCase() === make.toLowerCase()
    );

    if (!makeRecord) {
      return res.status(404).json({ error: 'Make not found' });
    }

    const response = await axios.get(
      `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeid/${makeRecord.Make_ID}?format=json`
    );

    const models = response.data.Results
      .map(m => m.Model_Name)
      .filter((model, index, self) => self.indexOf(model) === index) // Remove duplicates
      .sort();

    modelsCache[make] = {
      data: models,
      timestamp: now
    };

    res.json(models);
  } catch (error) {
    console.error('Error fetching models:', error.message);
    res.status(500).json({ error: 'Failed to fetch models' });
  }
});

export default router;

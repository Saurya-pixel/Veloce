import express from 'express';
import cors from 'cors';
import makesRoute from './routes/makes.js';
import modelsRoute from './routes/models.js';
import pricingRoute from './routes/pricing.js';
import trendsRoute from './routes/trends.js';
import yearsRoute from './routes/years.js';
import trimsRoute from './routes/trims.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api', makesRoute);
app.use('/api', modelsRoute);
app.use('/api', yearsRoute);
app.use('/api', pricingRoute);
app.use('/api', trendsRoute);
app.use('/api', trimsRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

import express from 'express';

const router = express.Router();

// Curated list of popular manufacturers
const POPULAR_MAKES = [
  'Acura', 'Audi', 'BMW', 'Bugatti', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge',
  'Ferrari', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jeep',
  'Kia', 'Koenigsegg', 'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Mazda', 'McLaren', 
  'Mercedes-Benz', 'Mitsubishi', 'Nissan', 'Pagani', 'Porsche', 'Ram', 'Subaru', 'Tesla', 'Toyota',
  'Volkswagen', 'Volvo'
];

router.get('/makes', (req, res) => {
  res.json(POPULAR_MAKES);
});

export default router;

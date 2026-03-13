# Car Price Calculator

A full-stack web application for calculating out-the-door car prices with real-time negotiation insights and 13-month price trends.

## Features

- **Vehicle Selection**: Cascading dropdowns with real data from NHTSA API
- **Price Breakdown**: Detailed out-the-door calculation including taxes, fees, trade-in value
- **Negotiation Insights**: Compare your offer against actual invoice prices
- **Financing Calculator**: APR slider and loan term selector with monthly payment calculation
- **Price Trends**: 13-month historical price and incentive trends with statistics
- **State Presets**: Pre-configured sales tax rates for all US states
- **Dark Theme**: Modern, clean dark interface with monospace fonts for numbers

## Project Structure

```
car-price-calculator/
├── client/              # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── VehicleSelector.jsx
│   │   │   ├── PriceInputs.jsx
│   │   │   ├── FeesSection.jsx
│   │   │   ├── FinancingSection.jsx
│   │   │   ├── PriceBreakdown.jsx
│   │   │   └── TrendChart.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
└── server/              # Express backend
    ├── routes/
    │   ├── makes.js
    │   ├── models.js
    │   ├── pricing.js
    │   └── trends.js
    ├── utils/
    │   └── dataGenerator.js
    ├── index.js
    └── package.json
```

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Recharts** - Price trend charts
- **Lucide React** - Icons

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **Axios** - HTTP client for NHTSA API
- **CORS** - Cross-origin request handling

### Data
- **NHTSA Public API** - Real vehicle make/model data
- **Deterministic Mock Data** - Seeded pricing and trends for consistent results

## Setup Instructions

### Prerequisites
- Node.js 16+ and npm

### Backend Setup

```bash
cd server
npm install
npm start
```

The server will start on `http://localhost:3001`

### Frontend Setup

In a new terminal:

```bash
cd client
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

## API Endpoints

### GET `/api/makes`
Returns an alphabetically sorted list of all vehicle makes from NHTSA.

**Response:**
```json
["Acura", "Alfa Romeo", "Aston Martin", ...]
```

### GET `/api/models/:make`
Returns models for a given make.

**Response:**
```json
["ILX", "MDX", "RDX", "TLX", ...]
```

### GET `/api/pricing/:make/:model/:year`
Returns pricing information for a vehicle.

**Response:**
```json
{
  "msrp": 40000,
  "invoicePrice": 36800,
  "averagePaidPrice": 36000,
  "dealerMarkup": 5.5,
  "incentives": 1500
}
```

### GET `/api/trends/:make/:model/:year`
Returns 13 months of price and incentive trends.

**Response:**
```json
[
  { "month": "Jan", "avgPrice": 40000, "incentive": 1500 },
  { "month": "Feb", "avgPrice": 39800, "incentive": 1600 },
  ...
]
```

## Pricing Calculations

All calculations happen client-side in real-time:

### Out-the-Door (OTD) Price
```
OTD = MSRP - dealerDiscount - manufacturerRebate + destination
    + (MSRP × salesTaxRate) + docFee + registrationFee
    - tradeInValue + remainingTradeInLoan
```

### Loan Amount
```
loanAmount = OTD - downPayment
```

### Monthly Payment
```
monthlyPayment = (loanAmount × (apr/12) × (1 + apr/12)^months) / ((1 + apr/12)^months - 1)
```

### Negotiation Insight
```
percentFromInvoice = ((msrp - invoicePrice) / invoicePrice) × 100
```

## Features in Detail

### Vehicle Selection
- Three cascading dropdowns (Make → Model → Year)
- Makes and models fetched from NHTSA API
- Years go back 10 years from current year

### Price Inputs
- MSRP (auto-populated from pricing API)
- Dealer discount
- Trade-in value
- Remaining trade-in loan amount
- Manufacturer rebate
- Down payment

### Fees Section
- Sales tax rate with 50 US state presets
- Doc fee (typical: $200)
- Registration fee (typical: $150)
- Destination charge (typical: $1,200)

### Financing Section
- APR slider (2% - 10%)
- Loan term selector (24, 36, 48, 60, 72, 84 months)
- Calculates monthly payment and total interest

### Price Breakdown
- Detailed line-item breakdown
- Financing summary (down payment, loan amount, monthly payment)
- Loan details (total interest, total amount paid)
- Negotiation insight showing MSRP vs invoice price

### Trend Chart
- Line chart showing 13-month price trends
- Secondary axis for incentive amounts
- Statistics: 52-week low, average, high, and average incentive

## Development Notes

### Deterministic Seeding
The pricing and trend data are generated deterministically from `make+model+year`. This means:
- Same vehicle selections always produce the same pricing and trends
- Useful for testing and consistent data display
- Uses a simple hash function to generate seeds

### NHTSA API Integration
- Calls are cached for 24 hours to improve performance
- Graceful fallback if API is unavailable
- Models are deduplicated (NHTSA often returns duplicates)

### Real-time Calculations
- All price calculations happen on the client
- Updates instantly as inputs change
- No server calls needed for calculations

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

MIT

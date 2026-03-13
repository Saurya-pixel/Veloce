import { useState, useEffect } from 'react';
import { Car } from 'lucide-react';
import { VehicleSelector } from './components/VehicleSelector';
import { PriceInputs } from './components/PriceInputs';
import { FeesSection } from './components/FeesSection';
import { FinancingSection } from './components/FinancingSection';
import { PriceBreakdown } from './components/PriceBreakdown';
import { TrendChart } from './components/TrendChart';
import { DepreciationBreakdown } from './components/DepreciationBreakdown';

function App() {
  const [vehicle, setVehicle] = useState({ make: '', model: '', year: '', trim: '' });
  const [pricing, setPricing] = useState({
    msrp: 0,
    invoicePrice: 0,
    averagePaidPrice: 0,
    dealerMarkup: 0,
    incentives: 0,
    confidence: 'unknown'
  });

  // Price inputs
  const [msrp, setMsrp] = useState(0);
  const [dealerDiscount, setDealerDiscount] = useState(0);
  const [tradeInValue, setTradeInValue] = useState(0);
  const [remainingLoan, setRemainingLoan] = useState(0);
  const [manufacturerRebate, setManufacturerRebate] = useState(0);
  const [downPayment, setDownPayment] = useState(0);

  // Fees
  const [taxRate, setTaxRate] = useState(0.07); // Default 7%
  const [selectedState, setSelectedState] = useState('CA');
  const [docFee, setDocFee] = useState(200);
  const [registrationFee, setRegistrationFee] = useState(150);
  const [destinationCharge, setDestinationCharge] = useState(1200);

  // Financing
  const [apr, setApr] = useState(5.0);
  const [loanTerm, setLoanTerm] = useState(60);

  // Fetch pricing when vehicle changes
  useEffect(() => {
    if (!vehicle.make || !vehicle.model || !vehicle.year) {
      setPricing({
        msrp: 0,
        invoicePrice: 0,
        averagePaidPrice: 0,
        dealerMarkup: 0,
        incentives: 0,
        confidence: 'unknown'
      });
      setMsrp(0);
      return;
    }

    const fetchPricing = async () => {
      try {
        const res = await fetch(`/api/pricing/${vehicle.make}/${vehicle.model}/${vehicle.year}`);
        const data = await res.json();
        setPricing(data);
        // Only set MSRP if trim is not selected, so trim data takes precedence
        if (!vehicle.trim) {
          setMsrp(data.msrp);
        }
      } catch (error) {
        console.error('Error fetching pricing:', error);
      }
    };

    fetchPricing();
  }, [vehicle.make, vehicle.model, vehicle.year]);

  // Handle trim selection and auto-populate MSRP and invoice
  useEffect(() => {
    if (!vehicle.trim || !vehicle.make || !vehicle.model || !vehicle.year) {
      return;
    }

    const fetchTrimsAndSelect = async () => {
      try {
        const res = await fetch(`/api/trims/${vehicle.make}/${vehicle.model}/${vehicle.year}`);
        const trims = await res.json();
        const selectedTrimData = trims.find(t => t.trim === vehicle.trim);

        if (selectedTrimData) {
          setMsrp(selectedTrimData.msrp);
          setPricing(prev => ({
            ...prev,
            msrp: selectedTrimData.msrp,
            invoicePrice: selectedTrimData.invoicePrice
          }));
        }
      } catch (error) {
        console.error('Error fetching trim pricing:', error);
      }
    };

    fetchTrimsAndSelect();
  }, [vehicle.trim, vehicle.make, vehicle.model, vehicle.year]);

  const handleVehicleChange = (newVehicle) => {
    setVehicle(newVehicle);
  };

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'msrp':
        setMsrp(value);
        break;
      case 'dealerDiscount':
        setDealerDiscount(value);
        break;
      case 'tradeInValue':
        setTradeInValue(value);
        break;
      case 'remainingLoan':
        setRemainingLoan(value);
        break;
      case 'manufacturerRebate':
        setManufacturerRebate(value);
        break;
      case 'downPayment':
        setDownPayment(value);
        break;
      case 'taxRate':
        setTaxRate(value);
        break;
      case 'selectedState':
        setSelectedState(value);
        break;
      case 'docFee':
        setDocFee(value);
        break;
      case 'registrationFee':
        setRegistrationFee(value);
        break;
      case 'destinationCharge':
        setDestinationCharge(value);
        break;
      case 'apr':
        setApr(value);
        break;
      case 'loanTerm':
        setLoanTerm(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <Car className="w-8 h-8 text-blue-500" />
            <h1 className="text-4xl font-bold">Car Price Calculator</h1>
          </div>
          <p className="text-gray-400">Calculate your out-the-door price with real-time insights</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Inputs */}
          <div className="lg:col-span-1 space-y-6">
            {/* Vehicle Selection */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Select Vehicle</h2>
              <VehicleSelector
                onVehicleChange={handleVehicleChange}
                selectedMake={vehicle.make}
                selectedModel={vehicle.model}
                selectedYear={vehicle.year}
                selectedTrim={vehicle.trim}
              />
            </div>

            {/* Price Inputs */}
            {vehicle.year && (
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Price Information</h2>
                <PriceInputs
                  msrp={msrp}
                  dealerDiscount={dealerDiscount}
                  tradeInValue={tradeInValue}
                  remainingLoan={remainingLoan}
                  manufacturerRebate={manufacturerRebate}
                  downPayment={downPayment}
                  onInputChange={handleInputChange}
                />
                <DepreciationBreakdown
                  make={vehicle.make}
                  model={vehicle.model}
                  year={vehicle.year}
                  baseMsrp={pricing.basePrice}
                  currentMsrp={msrp || pricing.msrp}
                  breakdown={pricing.breakdown}
                />
              </div>
            )}

            {/* Fees Section */}
            {vehicle.year && (
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Fees & Taxes</h2>
                <FeesSection
                  taxRate={taxRate}
                  docFee={docFee}
                  registrationFee={registrationFee}
                  destinationCharge={destinationCharge}
                  selectedState={selectedState}
                  onInputChange={handleInputChange}
                />
              </div>
            )}

            {/* Financing Section */}
            {vehicle.year && (
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Financing</h2>
                <FinancingSection
                  apr={apr}
                  loanTerm={loanTerm}
                  onInputChange={handleInputChange}
                />
              </div>
            )}
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-2 space-y-8">
            {vehicle.year ? (
              <>
                {/* Price Breakdown */}
                <PriceBreakdown
                  msrp={msrp || pricing.msrp}
                  dealerDiscount={dealerDiscount}
                  manufacturerRebate={manufacturerRebate}
                  destinationCharge={destinationCharge}
                  taxRate={taxRate}
                  docFee={docFee}
                  registrationFee={registrationFee}
                  tradeInValue={tradeInValue}
                  remainingLoan={remainingLoan}
                  downPayment={downPayment}
                  apr={apr}
                  loanTerm={loanTerm}
                  invoicePrice={pricing.invoicePrice}
                  priceConfidence={pricing.confidence}
                />

                {/* Trend Chart */}
                <TrendChart
                  make={vehicle.make}
                  model={vehicle.model}
                  year={vehicle.year}
                />
              </>
            ) : (
              <div className="bg-gray-800 rounded-lg p-12 text-center">
                <Car className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-xl text-gray-400">Select a vehicle to get started</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

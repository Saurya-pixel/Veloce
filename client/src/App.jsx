import { useState, useEffect } from 'react';
import { Car } from 'lucide-react';
import { VehicleSelector } from './components/VehicleSelector';
import { PriceInputs } from './components/PriceInputs';
import { FeesSection } from './components/FeesSection';
import { FinancingSection } from './components/FinancingSection';
import { PriceBreakdown } from './components/PriceBreakdown';
import { TrendChart } from './components/TrendChart';
import { HeroSection } from './components/HeroSection';
import { NewsSidebar } from './components/NewsSidebar';

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
  const [originalMsrp, setOriginalMsrp] = useState(0);
  const [dealerDiscount, setDealerDiscount] = useState(0);
  const [tradeInValue, setTradeInValue] = useState(0);
  const [remainingLoan, setRemainingLoan] = useState(0);
  const [manufacturerRebate, setManufacturerRebate] = useState(0);
  const [downPayment, setDownPayment] = useState(0);

  // Fees
  const [taxRate, setTaxRate] = useState(0.0725);
  const [selectedState, setSelectedState] = useState('CA');
  const [docFee, setDocFee] = useState(85);
  const [registrationFee, setRegistrationFee] = useState(450);
  const [destinationCharge, setDestinationCharge] = useState(0);

  // Calculation Toggles
  const [isTaxAfterTradeIn, setIsTaxAfterTradeIn] = useState(false);
  const [isRebateTaxable, setIsRebateTaxable] = useState(true);

  // Financing
  const [apr, setApr] = useState(5.99);
  const [loanTerm, setLoanTerm] = useState(60);

  const currentYear = 2026;
  const isUsedCar = vehicle.year && parseInt(vehicle.year) < currentYear;
  const hasVehicleSelected = vehicle.make && vehicle.model && vehicle.year;

  // Fetch pricing when vehicle changes
  useEffect(() => {
    if (!vehicle.make || !vehicle.model || !vehicle.year) {
      setPricing({ msrp: 0, invoicePrice: 0, averagePaidPrice: 0, dealerMarkup: 0, incentives: 0, confidence: 'unknown' });
      setMsrp(0);
      setOriginalMsrp(0);
      return;
    }

    const fetchPricing = async () => {
      try {
        const res = await fetch(`/api/pricing/${vehicle.make}/${vehicle.model}/${vehicle.year}`);
        const data = await res.json();
        setPricing(data);
        if (!vehicle.trim) {
          setMsrp(data.msrp);
          setOriginalMsrp(data.basePrice || data.msrp);
        }
      } catch (error) {
        console.error('Error fetching pricing:', error);
      }
    };

    fetchPricing();

    const yearNum = parseInt(vehicle.year);
    if (yearNum < currentYear) {
      setDestinationCharge(0);
    } else {
      setDestinationCharge(1200);
    }
  }, [vehicle.make, vehicle.model, vehicle.year]);

  // Handle trim selection
  useEffect(() => {
    if (!vehicle.trim || !vehicle.make || !vehicle.model || !vehicle.year) return;

    const fetchTrimsAndSelect = async () => {
      try {
        const res = await fetch(`/api/trims/${vehicle.make}/${vehicle.model}/${vehicle.year}`);
        const trims = await res.json();
        const selectedTrimData = trims.find(t => t.trim === vehicle.trim);

        if (selectedTrimData) {
          setMsrp(selectedTrimData.msrp);
          setOriginalMsrp(selectedTrimData.originalMsrp || selectedTrimData.msrp);
          setPricing(prev => ({
            ...prev,
            msrp: selectedTrimData.msrp,
            invoicePrice: selectedTrimData.invoicePrice || (selectedTrimData.msrp * 0.94)
          }));
        }
      } catch (error) {
        console.error('Error fetching trim pricing:', error);
      }
    };

    fetchTrimsAndSelect();
  }, [vehicle.trim, vehicle.make, vehicle.model, vehicle.year]);

  const handleInputChange = (field, value) => {
    const setters = {
      msrp: setMsrp, dealerDiscount: setDealerDiscount, tradeInValue: setTradeInValue,
      remainingLoan: setRemainingLoan, manufacturerRebate: setManufacturerRebate,
      downPayment: setDownPayment, taxRate: setTaxRate, selectedState: setSelectedState,
      docFee: setDocFee, registrationFee: setRegistrationFee, destinationCharge: setDestinationCharge,
      apr: setApr, loanTerm: setLoanTerm
    };
    if (setters[field]) setters[field](value);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="p-3 bg-blue-600/20 rounded-2xl border border-blue-500/30">
              <Car className="w-10 h-10 text-blue-500" />
            </div>
            <h1 className="text-5xl font-black tracking-tighter italic uppercase">
              Vel<span className="text-blue-500">oce</span>
            </h1>
          </div>
          <p className="text-slate-400 max-w-lg mx-auto text-sm">
            Professional-grade automotive financial intelligence
          </p>
        </div>
      </div>

      {/* ─── Landing State: Hero with embedded vehicle selector ─── */}
      {!hasVehicleSelected && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <HeroSection
                onVehicleChange={setVehicle}
                selectedMake={vehicle.make}
                selectedModel={vehicle.model}
                selectedYear={vehicle.year}
                selectedTrim={vehicle.trim}
              />
            </div>
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <NewsSidebar />
            </div>
          </div>
        </div>
      )}

      {/* ─── Configurator State: Full layout after vehicle is selected ─── */}
      {hasVehicleSelected && (
        <div className="px-4 sm:px-6 lg:px-8 pb-12 animate-fade-in">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column - Configuration */}
              <div className="lg:col-span-4 space-y-6">
                {/* Vehicle selector — always accessible at top */}
                <div className="glass-card p-6">
                  <h2 className="premium-label mb-4">1. Vehicle</h2>
                  <VehicleSelector
                    onVehicleChange={setVehicle}
                    selectedMake={vehicle.make}
                    selectedModel={vehicle.model}
                    selectedYear={vehicle.year}
                    selectedTrim={vehicle.trim}
                  />
                </div>

                <div className="glass-card p-6">
                  <h2 className="premium-label mb-4">2. Pricing & Credits</h2>
                  {isUsedCar && (
                    <div className="mb-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-xs text-amber-200">
                      <span className="font-bold">Used Vehicle</span> — Prices reflect current market value with depreciation applied.
                    </div>
                  )}
                  <PriceInputs
                    msrp={msrp}
                    dealerDiscount={dealerDiscount}
                    tradeInValue={tradeInValue}
                    remainingLoan={remainingLoan}
                    manufacturerRebate={manufacturerRebate}
                    downPayment={downPayment}
                    onInputChange={handleInputChange}
                  />
                </div>

                <div className="glass-card p-6">
                  <h2 className="premium-label mb-4">3. Fees & Tax</h2>
                  <FeesSection
                    taxRate={taxRate}
                    docFee={docFee}
                    registrationFee={registrationFee}
                    destinationCharge={destinationCharge}
                    selectedState={selectedState}
                    onInputChange={handleInputChange}
                  />
                  <div className="mt-6 pt-6 border-t border-white/5 space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-xs text-slate-400 uppercase tracking-widest font-bold">Tax after trade-in</label>
                      <button
                        onClick={() => setIsTaxAfterTradeIn(!isTaxAfterTradeIn)}
                        className={`w-10 h-5 rounded-full transition-colors relative ${isTaxAfterTradeIn ? 'bg-blue-600' : 'bg-slate-700'}`}
                      >
                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${isTaxAfterTradeIn ? 'left-6' : 'left-1'}`} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-xs text-slate-400 uppercase tracking-widest font-bold">Taxable Rebates</label>
                      <button
                        onClick={() => setIsRebateTaxable(!isRebateTaxable)}
                        className={`w-10 h-5 rounded-full transition-colors relative ${isRebateTaxable ? 'bg-blue-600' : 'bg-slate-700'}`}
                      >
                        <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-transform ${isRebateTaxable ? 'left-6' : 'left-1'}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <h2 className="premium-label mb-4">4. Financing</h2>
                  <FinancingSection
                    apr={apr}
                    loanTerm={loanTerm}
                    onInputChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Right Column - Results */}
              <div className="lg:col-span-8">
                <div className="space-y-8 lg:sticky lg:top-8">
                  <PriceBreakdown
                    msrp={msrp || pricing.msrp}
                    originalMsrp={originalMsrp}
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
                    isTaxAfterTradeIn={isTaxAfterTradeIn}
                    isRebateTaxable={isRebateTaxable}
                    isUsedCar={isUsedCar}
                    vehicleYear={vehicle.year}
                  />

                  <div className="glass-card p-6">
                    <h3 className="premium-label mb-6">Market Trends</h3>
                    <TrendChart
                      make={vehicle.make}
                      model={vehicle.model}
                      year={vehicle.year}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

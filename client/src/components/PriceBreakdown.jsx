import { TrendingUp, TrendingDown } from 'lucide-react';

export function PriceBreakdown({
  msrp,
  originalMsrp,
  dealerDiscount,
  manufacturerRebate,
  destinationCharge,
  taxRate,
  docFee,
  registrationFee,
  tradeInValue,
  remainingLoan,
  downPayment,
  apr,
  loanTerm,
  invoicePrice,
  priceConfidence = 'unknown',
  isTaxAfterTradeIn = true,
  isRebateTaxable = true,
  isUsedCar = false,
  vehicleYear = ''
}) {
  // 1. Calculate the Selling Price
  const sellingPrice = msrp - dealerDiscount + destinationCharge;

  // 2. Calculate Taxable Amount
  let taxableAmount = sellingPrice;
  if (!isRebateTaxable) {
    taxableAmount -= manufacturerRebate;
  }
  if (isTaxAfterTradeIn) {
    taxableAmount = Math.max(0, taxableAmount - tradeInValue);
  }

  // 3. Calculate Sales Tax
  const salesTax = taxableAmount * taxRate;

  // 4. Total Out-the-Door Price
  const totalFees = docFee + registrationFee;
  const otd = sellingPrice + salesTax + totalFees + remainingLoan - tradeInValue - manufacturerRebate;

  // 5. Loan Amount (OTD minus down payment)
  const loanAmount = Math.max(0, otd - downPayment);

  // Calculate monthly payment
  const monthlyRate = apr / 100 / 12;
  const monthlyPayment = monthlyRate === 0
    ? loanAmount / loanTerm
    : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
      (Math.pow(1 + monthlyRate, loanTerm) - 1);

  const totalInterest = monthlyPayment * loanTerm - loanAmount;
  const totalCostOfOwnership = (monthlyPayment * loanTerm) + downPayment;

  // Depreciation info
  const depreciationAmount = originalMsrp && originalMsrp > msrp ? originalMsrp - msrp : 0;
  const depreciationPct = originalMsrp && originalMsrp > 0 ? Math.round((depreciationAmount / originalMsrp) * 100) : 0;

  // Down payment as percentage of OTD
  const downPct = otd > 0 ? Math.round((downPayment / otd) * 100) : 0;
  const financedPct = 100 - downPct;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Price Breakdown Card */}
      <div className="glass-card overflow-hidden">
        <div className="bg-gradient-to-r from-gold-600/10 to-zinc-600/10 p-6 border-b border-white/5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <span className="w-2 h-6 bg-gold-500 rounded-full"></span>
              Out-the-Door Summary
            </h3>
            {isUsedCar && (
              <span className="px-3 py-1 bg-gold-500/20 border border-gold-500/30 rounded-full text-[10px] font-bold text-gold-300 uppercase tracking-widest">
                {vehicleYear} • Used
              </span>
            )}
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">The Vehicle</h4>
              <div className="space-y-2">
                {/* Show original MSRP with depreciation for used cars */}
                {isUsedCar && depreciationAmount > 0 && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">Original MSRP</span>
                      <span className="font-mono text-slate-500 line-through">{formatCurrency(originalMsrp)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-amber-400">
                      <span>Depreciation (-{depreciationPct}%)</span>
                      <span className="font-mono">-{formatCurrency(depreciationAmount)}</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">{isUsedCar ? 'Market Value' : 'Base MSRP'}</span>
                  <span className="font-mono font-semibold">{formatCurrency(msrp)}</span>
                </div>
                {dealerDiscount > 0 && (
                  <div className="flex justify-between text-sm text-emerald-400">
                    <span>Dealer Discount</span>
                    <span className="font-mono">-{formatCurrency(dealerDiscount)}</span>
                  </div>
                )}
                {destinationCharge > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Destination</span>
                    <span className="font-mono">+{formatCurrency(destinationCharge)}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-white/5 flex justify-between font-semibold">
                  <span>Selling Price</span>
                  <span className="font-mono">{formatCurrency(sellingPrice)}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Taxes & Fees</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Sales Tax ({(taxRate * 100).toFixed(2)}%)</span>
                  <span className="font-mono">+{formatCurrency(salesTax)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Doc & Reg Fees</span>
                  <span className="font-mono">+{formatCurrency(totalFees)}</span>
                </div>
                <div className="text-[10px] text-slate-500 text-right space-y-0.5">
                  {isTaxAfterTradeIn && tradeInValue > 0 && <div>*Tax calculated after trade-in credit</div>}
                  {!isRebateTaxable && manufacturerRebate > 0 && <div>*Tax calculated after rebates</div>}
                </div>
              </div>
            </div>
          </div>

          {/* Trade-in & Rebates */}
          {(tradeInValue > 0 || manufacturerRebate > 0) && (
            <div className="p-4 bg-slate-950/50 rounded-xl border border-white/5 space-y-2">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Credits & Adjustments</h4>
              {tradeInValue > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 text-xs">Trade-In Equity ({formatCurrency(tradeInValue)} - {formatCurrency(remainingLoan)})</span>
                  <span className="font-mono text-emerald-400">{tradeInValue - remainingLoan > 0 ? '-' : '+'}{formatCurrency(Math.abs(tradeInValue - remainingLoan))}</span>
                </div>
              )}
              {manufacturerRebate > 0 && (
                <div className="flex justify-between text-sm text-emerald-400">
                  <span className="text-xs">Manufacturer Rebates</span>
                  <span className="font-mono">-{formatCurrency(manufacturerRebate)}</span>
                </div>
              )}
            </div>
          )}

          {/* Final Total */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Total Out-the-Door</p>
                <p className="text-4xl font-black text-white tracking-tighter mt-1">
                  {formatCurrency(otd)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Monthly Estimate</p>
                <p className="text-3xl font-black text-gold-500 tracking-tighter mt-1">
                  {formatCurrency(monthlyPayment)}
                  <span className="text-sm font-normal text-zinc-500">/mo</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Financing Details — improved with down payment visibility */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass-card p-6">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Financing Breakdown</h4>
          
          {/* Visual bar showing down payment vs financed */}
          <div className="mb-5">
            <div className="flex justify-between text-[10px] text-slate-500 mb-1.5">
              <span>Down Payment ({downPct}%)</span>
              <span>Financed ({financedPct}%)</span>
            </div>
            <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden flex">
              <div 
                className="h-full bg-emerald-500 rounded-l-full transition-all duration-500"
                style={{ width: `${Math.max(downPct, 2)}%` }}
              />
              <div 
                className="h-full bg-gold-500 rounded-r-full transition-all duration-500"
                style={{ width: `${financedPct}%` }}
              />
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">OTD Price</span>
              <span className="font-mono">{formatCurrency(otd)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block"></span>
                Down Payment
              </span>
              <span className="font-mono text-emerald-400 font-bold">-{formatCurrency(downPayment)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gold-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-gold-500 rounded-full inline-block"></span>
                Loan Amount
              </span>
              <span className="font-mono text-gold-400 font-bold">{formatCurrency(loanAmount)}</span>
            </div>
            <div className="pt-3 border-t border-white/5 space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">APR {apr.toFixed(2)}% × {loanTerm} months</span>
                <span className="font-mono text-red-400">+{formatCurrency(totalInterest)} interest</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total Paid (with interest)</span>
                <span className="font-mono text-white">{formatCurrency(totalCostOfOwnership)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            {invoicePrice < msrp ? <TrendingDown className="w-4 h-4 text-emerald-400" /> : <TrendingUp className="w-4 h-4 text-orange-400" />}
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Negotiation Room</h4>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">{isUsedCar ? 'Market Value' : 'MSRP'}</span>
              <span className="font-mono">{formatCurrency(msrp)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Dealer Invoice</span>
              <span className="font-mono">{formatCurrency(invoicePrice)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Spread</span>
              <span className="font-mono text-emerald-400">{formatCurrency(msrp - invoicePrice)}</span>
            </div>
            <div className="p-3 bg-gold-500/10 border border-gold-500/20 rounded-lg text-[11px] leading-relaxed text-zinc-300">
              {isUsedCar
                ? `This ${vehicleYear} model has depreciated ~${depreciationPct}% from its original MSRP. The dealer invoice estimate suggests up to ${formatCurrency(msrp - invoicePrice)} in negotiation room.`
                : `Dealer profit is approximately ${(((msrp - invoicePrice) / msrp) * 100).toFixed(1)}% of MSRP. Target a discount within this range for a fair deal.`
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

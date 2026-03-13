import { TrendingUp, TrendingDown } from 'lucide-react';

export function PriceBreakdown({
  msrp,
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
  priceConfidence = 'unknown'
}) {
  // Calculate base price before taxes and fees
  const basePrice = msrp - dealerDiscount - manufacturerRebate + destinationCharge;
  const salesTax = basePrice * taxRate;
  const subtotalBeforeTrade = basePrice + salesTax + docFee + registrationFee;
  const netTradeIn = tradeInValue - remainingLoan;
  const otd = subtotalBeforeTrade - netTradeIn;
  const loanAmount = Math.max(0, otd - downPayment);

  // Calculate monthly payment using standard auto loan formula
  const monthlyRate = apr / 100 / 12;
  const monthlyPayment = monthlyRate === 0
    ? loanAmount / loanTerm
    : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
      (Math.pow(1 + monthlyRate, loanTerm) - 1);

  // Calculate total interest
  const totalInterest = monthlyPayment * loanTerm - loanAmount;

  // Negotiation insight
  const priceGap = msrp - invoicePrice;
  const percentFromInvoice = invoicePrice ? ((msrp - invoicePrice) / invoicePrice * 100) : 0;

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Confidence badge
  const getConfidenceBadge = () => {
    switch (priceConfidence) {
      case 'verified':
        return (
          <span className="ml-2 px-2 py-1 text-xs font-semibold rounded bg-green-900 text-green-200">
            ✓ Verified
          </span>
        );
      case 'estimated':
        return (
          <span className="ml-2 px-2 py-1 text-xs font-semibold rounded bg-yellow-900 text-yellow-200">
            ~ Estimated
          </span>
        );
      default:
        return (
          <span className="ml-2 px-2 py-1 text-xs font-semibold rounded bg-gray-700 text-gray-300">
            ? Unknown
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Price Breakdown */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Out-the-Door Price Breakdown</h3>

        <div className="space-y-2 text-sm mb-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span>MSRP</span>
              {getConfidenceBadge()}
            </div>
            <span className="font-mono">{formatCurrency(msrp)}</span>
          </div>
          {dealerDiscount > 0 && (
            <div className="flex justify-between text-green-400">
              <span>Dealer Discount</span>
              <span className="font-mono">-{formatCurrency(dealerDiscount)}</span>
            </div>
          )}
          {manufacturerRebate > 0 && (
            <div className="flex justify-between text-green-400">
              <span>Manufacturer Rebate</span>
              <span className="font-mono">-{formatCurrency(manufacturerRebate)}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Destination Charge</span>
            <span className="font-mono">+{formatCurrency(destinationCharge)}</span>
          </div>
          <div className="border-t border-gray-700 pt-2 mt-2 flex justify-between font-semibold">
            <span>Subtotal before fees</span>
            <span className="font-mono">{formatCurrency(basePrice)}</span>
          </div>
        </div>

        <div className="space-y-2 text-sm mb-4">
          <div className="flex justify-between">
            <span>Sales Tax ({(taxRate * 100).toFixed(2)}%)</span>
            <span className="font-mono">+{formatCurrency(salesTax)}</span>
          </div>
          <div className="flex justify-between">
            <span>Doc Fee</span>
            <span className="font-mono">+{formatCurrency(docFee)}</span>
          </div>
          <div className="flex justify-between">
            <span>Registration Fee</span>
            <span className="font-mono">+{formatCurrency(registrationFee)}</span>
          </div>
          {tradeInValue > 0 && (
            <div className="flex justify-between text-green-400">
              <span>Trade-in Value</span>
              <span className="font-mono">-{formatCurrency(tradeInValue)}</span>
            </div>
          )}
          {remainingLoan > 0 && (
            <div className="flex justify-between text-red-400">
              <span>Remaining Trade-in Loan</span>
              <span className="font-mono">+{formatCurrency(remainingLoan)}</span>
            </div>
          )}
          <div className="border-t border-gray-700 pt-2 mt-2 flex justify-between font-bold text-base bg-gray-900 p-2 rounded">
            <span>Out-the-Door Price</span>
            <span className="font-mono text-blue-400">{formatCurrency(otd)}</span>
          </div>
        </div>
      </div>

      {/* Financing Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-gray-400">Down Payment</p>
          <p className="text-2xl font-mono font-bold text-green-400 mt-1">
            {formatCurrency(downPayment)}
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-gray-400">Loan Amount</p>
          <p className="text-2xl font-mono font-bold text-yellow-400 mt-1">
            {formatCurrency(loanAmount)}
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-gray-400">Monthly Payment</p>
          <p className="text-2xl font-mono font-bold text-blue-400 mt-1">
            {formatCurrency(monthlyPayment)}
          </p>
        </div>
      </div>

      {/* Loan Details */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Loan Details</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>APR</span>
            <span className="font-mono font-bold">{apr.toFixed(2)}%</span>
          </div>
          <div className="flex justify-between">
            <span>Loan Term</span>
            <span className="font-mono font-bold">{loanTerm} months</span>
          </div>
          <div className="flex justify-between">
            <span>Total Interest Paid</span>
            <span className="font-mono font-bold text-red-400">{formatCurrency(totalInterest)}</span>
          </div>
          <div className="flex justify-between font-bold border-t border-gray-700 pt-2 mt-2">
            <span>Total Amount Paid</span>
            <span className="font-mono">{formatCurrency(monthlyPayment * loanTerm + downPayment)}</span>
          </div>
        </div>
      </div>

      {/* Negotiation Insight */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          {percentFromInvoice >= 0 ? (
            <TrendingUp className="w-5 h-5 text-orange-400" />
          ) : (
            <TrendingDown className="w-5 h-5 text-green-400" />
          )}
          Negotiation Insight
        </h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Your Offer (MSRP)</span>
            <span className="font-mono font-bold">{formatCurrency(msrp)}</span>
          </div>
          <div className="flex justify-between">
            <span>Invoice Price</span>
            <span className="font-mono font-bold">{formatCurrency(invoicePrice)}</span>
          </div>
          <div className={`flex justify-between border-t border-gray-700 pt-2 mt-2 font-bold ${
            percentFromInvoice >= 0 ? 'text-orange-400' : 'text-green-400'
          }`}>
            <span>{percentFromInvoice >= 0 ? 'Above' : 'Below'} Invoice</span>
            <span className="font-mono">
              {Math.abs(percentFromInvoice).toFixed(1)}% ({formatCurrency(Math.abs(priceGap))})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

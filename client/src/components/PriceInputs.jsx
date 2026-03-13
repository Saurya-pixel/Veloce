import { DollarSign } from 'lucide-react';

export function PriceInputs({
  msrp,
  dealerDiscount,
  tradeInValue,
  remainingLoan,
  manufacturerRebate,
  downPayment,
  onInputChange
}) {
  const inputs = [
    { id: 'msrp', label: 'MSRP', value: msrp },
    { id: 'dealerDiscount', label: 'Dealer Discount', value: dealerDiscount },
    { id: 'tradeInValue', label: 'Trade-in Value', value: tradeInValue },
    { id: 'remainingLoan', label: 'Remaining Trade-in Loan', value: remainingLoan },
    { id: 'manufacturerRebate', label: 'Manufacturer Rebate', value: manufacturerRebate },
    { id: 'downPayment', label: 'Down Payment', value: downPayment },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {inputs.map(input => (
        <div key={input.id}>
          <label className="block text-sm font-medium mb-2">{input.label}</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            <input
              type="number"
              value={input.value === 0 ? '' : input.value}
              onChange={(e) => onInputChange(input.id, parseFloat(e.target.value) || 0)}
              className="w-full pl-10 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 font-mono"
              placeholder="0"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

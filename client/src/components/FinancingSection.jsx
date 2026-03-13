import { Percent } from 'lucide-react';

export function FinancingSection({
  apr,
  loanTerm,
  onInputChange
}) {
  const loanTerms = [24, 36, 48, 60, 72, 84];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-4">
          APR: <span className="font-mono font-bold text-blue-400">{apr.toFixed(2)}%</span>
        </label>
        <input
          type="range"
          min="2"
          max="10"
          step="0.1"
          value={apr}
          onChange={(e) => onInputChange('apr', parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>2%</span>
          <span>10%</span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Loan Term (Months)</label>
        <select
          value={loanTerm}
          onChange={(e) => onInputChange('loanTerm', parseFloat(e.target.value))}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
        >
          {loanTerms.map(term => (
            <option key={term} value={term}>{term} months ({(term / 12).toFixed(1)} years)</option>
          ))}
        </select>
      </div>
    </div>
  );
}

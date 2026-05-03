import { Percent } from 'lucide-react';

export function FinancingSection({
  apr,
  loanTerm,
  onInputChange
}) {
  const loanTerms = [24, 36, 48, 60, 72, 84];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="premium-label !mb-0">APR</label>
          <span className="font-mono font-bold text-gold-400 text-sm">{apr.toFixed(2)}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="12"
          step="0.01"
          value={apr}
          onChange={(e) => onInputChange('apr', parseFloat(e.target.value))}
          className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-gold-500 hover:accent-gold-400 transition-all"
        />
        <div className="flex justify-between text-[10px] text-zinc-500 mt-2 uppercase tracking-tighter font-bold">
          <span>0%</span>
          <span>12%</span>
        </div>
      </div>

      <div>
        <label className="premium-label">Term Length</label>
        <select
          value={loanTerm}
          onChange={(e) => onInputChange('loanTerm', parseFloat(e.target.value))}
          className="premium-input bg-black/50"
        >
          {loanTerms.map(term => (
            <option key={term} value={term}>{term} Months ({term / 12}Y)</option>
          ))}
        </select>
      </div>
    </div>
  );
}

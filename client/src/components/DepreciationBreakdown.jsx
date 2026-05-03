import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function DepreciationBreakdown({ make, model, year, baseMsrp, currentMsrp, breakdown }) {
  const [expanded, setExpanded] = useState(false);

  if (!make || !model || !year || !breakdown) {
    return null;
  }

  return (
    <div className="mt-4 bg-black/40 rounded-xl overflow-hidden border border-white/5">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-white/5 transition-colors group"
      >
        <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">
          Price Calculation Details
        </span>
        {expanded ? (
          <ChevronUp className="w-4 h-4 text-zinc-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-zinc-500" />
        )}
      </button>

      {expanded && (
        <div className="px-4 py-4 bg-black/20 border-t border-white/5 space-y-3 text-[11px]">
          <div className="flex justify-between">
            <span className="text-zinc-400 italic">MSRP when manufactured</span>
            <span className="font-mono text-zinc-300">
              ${baseMsrp ? baseMsrp.toLocaleString() : '0'}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-zinc-400">Market depreciation for {year}</span>
            <span className="font-mono text-red-400 bg-red-400/10 px-1.5 rounded">
              −{breakdown.yearDepreciationPct}%
            </span>
          </div>

          {breakdown.brandAdjustmentPct !== 0 && (
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">Brand retention strength ({make})</span>
              <span className={`font-mono px-1.5 rounded ${breakdown.brandAdjustmentPct > 0 ? 'text-emerald-400 bg-emerald-400/10' : 'text-red-400 bg-red-400/10'}`}>
                {breakdown.brandAdjustmentPct > 0 ? '+' : ''}{breakdown.brandAdjustmentPct}%
              </span>
            </div>
          )}

          {breakdown.isEV && (
            <div className="flex justify-between items-center">
              <span className="text-zinc-400">EV market adjustment</span>
              <span className="font-mono text-red-400 bg-red-400/10 px-1.5 rounded">
                −{breakdown.evAdjustmentPct}%
              </span>
            </div>
          )}

          <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-sm">
            <span className="text-zinc-300">Net Fair Value</span>
            <span className="font-mono text-gold-400">
              ${currentMsrp ? currentMsrp.toLocaleString() : '0'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function DepreciationBreakdown({ make, model, year, baseMsrp, currentMsrp, breakdown }) {
  const [expanded, setExpanded] = useState(false);

  if (!make || !model || !year || !breakdown) {
    return null;
  }

  return (
    <div className="mt-4 bg-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-600 transition"
      >
        <span className="text-sm font-medium">How this price was calculated</span>
        {expanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {expanded && (
        <div className="px-4 py-3 bg-gray-800 border-t border-gray-700 space-y-3 text-sm">
          {/* Base MSRP */}
          <div className="flex justify-between">
            <span className="text-gray-400">Base MSRP (new):</span>
            <span className="text-right font-mono">
              ${baseMsrp ? baseMsrp.toLocaleString() : '0'}
            </span>
          </div>

          {/* Year Depreciation */}
          <div className="flex justify-between">
            <span className="text-gray-400">
              Year depreciation ({year}):
            </span>
            <span className="text-right font-mono text-red-400">
              −{breakdown.yearDepreciationPct}%
            </span>
          </div>

          {/* Brand Adjustment */}
          {breakdown.brandAdjustmentPct !== 0 && (
            <div className="flex justify-between">
              <span className="text-gray-400">
                Brand value retention ({make}):
              </span>
              <span
                className={`text-right font-mono ${
                  breakdown.brandAdjustmentPct > 0
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}
              >
                {breakdown.brandAdjustmentPct > 0 ? '+' : ''}
                {breakdown.brandAdjustmentPct}%
              </span>
            </div>
          )}

          {/* EV Adjustment */}
          {breakdown.isEV && (
            <div className="flex justify-between">
              <span className="text-gray-400">EV depreciation adjustment:</span>
              <span className="text-right font-mono text-red-400">
                −{breakdown.evAdjustmentPct}%
              </span>
            </div>
          )}

          <div className="border-t border-gray-700 pt-3 flex justify-between font-medium">
            <span className="text-gray-300">Estimated value:</span>
            <span className="text-right font-mono text-blue-400">
              ${currentMsrp ? currentMsrp.toLocaleString() : '0'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

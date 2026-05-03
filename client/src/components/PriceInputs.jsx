import { DollarSign, Tag, Percent, ArrowDownCircle, Wallet, History, Sparkles } from 'lucide-react';

export function PriceInputs({
  msrp,
  isUsedCar,
  dealerDiscount,
  tradeInValue,
  remainingLoan,
  manufacturerRebate,
  downPayment,
  onInputChange
}) {
  const inputGroups = [
    { 
      id: 'msrp', 
      label: isUsedCar ? 'Estimated Market Value' : 'Vehicle MSRP', 
      value: msrp, 
      icon: Tag, 
      color: 'text-white',
      description: 'Sticker price or market value'
    },
    { 
      id: 'dealerDiscount', 
      label: 'Dealer Discount', 
      value: dealerDiscount, 
      icon: Sparkles, 
      color: 'text-emerald-400',
      description: 'Negotiated price reduction'
    },
    { 
      id: 'tradeInValue', 
      label: 'Trade-in Value', 
      value: tradeInValue, 
      icon: History, 
      color: 'text-zinc-400',
      description: 'Estimated value of your current car'
    },
    { 
      id: 'remainingLoan', 
      label: 'Trade-in Payoff', 
      value: remainingLoan, 
      icon: ArrowDownCircle, 
      color: 'text-red-400',
      description: 'Amount still owed on trade-in'
    },
    { 
      id: 'manufacturerRebate', 
      label: 'Rebates', 
      value: manufacturerRebate, 
      icon: Percent, 
      color: 'text-gold-400',
      description: 'Manufacturer cash incentives'
    },
    { 
      id: 'downPayment', 
      label: 'Down Payment', 
      value: downPayment, 
      icon: Wallet, 
      color: 'text-emerald-500',
      description: 'Cash contribution at signing'
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {inputGroups.map(input => (
        <div key={input.id} className="relative group">
          <div className="flex items-center justify-between mb-1.5 px-1">
            <label className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
              <input.icon className={`w-3 h-3 ${input.color}`} />
              {input.label}
            </label>
            <span className="text-[9px] text-zinc-500 font-medium italic opacity-0 group-focus-within:opacity-100 transition-opacity">
              {input.description}
            </span>
          </div>
          
          <div className="relative">
            <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-gold-500 transition-colors" />
            <input
              type="number"
              value={input.value === 0 ? '' : input.value}
              onChange={(e) => onInputChange(input.id, parseFloat(e.target.value) || 0)}
              className="w-full bg-black/40 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/30 hover:border-white/10 transition-all placeholder:text-zinc-700"
              placeholder="0"
            />
            
            {/* Subtle glow effect on focus */}
            <div className="absolute inset-0 rounded-xl bg-gold-500/5 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity blur-md" />
          </div>
        </div>
      ))}
    </div>
  );
}

import { Car, Calculator, TrendingUp, DollarSign, Gauge, ChevronRight, Shield, Zap } from 'lucide-react';
import { VehicleSelector } from './VehicleSelector';

export function HeroSection({ onVehicleChange, selectedMake, selectedModel, selectedYear, selectedTrim }) {
  return (
    <div className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-0 w-80 h-80 bg-zinc-600/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent animate-road-line" />
        <div className="absolute bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-road-line-delayed" />
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <svg viewBox="0 0 200 200" className="w-36 h-36 animate-spin-slow">
                  <defs>
                    <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#AA8529" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="90" fill="none" stroke="url(#gaugeGrad)" strokeWidth="2" strokeDasharray="8 12" opacity="0.5" />
                  <circle cx="100" cy="100" r="80" fill="none" stroke="url(#gaugeGrad)" strokeWidth="1" strokeDasharray="4 8" opacity="0.3" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-600/20 to-zinc-600/20 border border-gold-500/20 flex items-center justify-center backdrop-blur-sm shadow-2xl shadow-gold-900/10">
                    <Gauge className="w-10 h-10 text-gold-400" />
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-tight">
              <span className="text-white">Know Your Car's </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-300 via-gold-500 to-white animate-gradient-shift">
                True Price
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-2 leading-relaxed">
              Calculate precise out-the-door costs for new and used vehicles with real depreciation data.
            </p>

            {/* Quick stats */}
            <div className="flex items-center justify-center gap-6 mt-4 text-sm text-zinc-500">
              <div className="flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-gold-500" />
                <span>500+ Models</span>
              </div>
              <div className="w-1 h-1 bg-zinc-700 rounded-full" />
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-white" />
                <span>50 States</span>
              </div>
              <div className="w-1 h-1 bg-zinc-700 rounded-full" />
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-gold-400" />
                <span>Real-Time Data</span>
              </div>
            </div>
          </div>

          {/* ─── VEHICLE SELECTOR — front and center ─────────────────────── */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="glass-card p-8 border-gold-500/20 relative overflow-hidden">
              {/* Subtle gradient accent at top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-white" />
              
              <h3 className="text-center text-sm font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-2">
                <Car className="w-4 h-4 text-gold-500" />
                Select Your Vehicle to Begin
              </h3>
              
              <VehicleSelector
                onVehicleChange={onVehicleChange}
                selectedMake={selectedMake}
                selectedModel={selectedModel}
                selectedYear={selectedYear}
                selectedTrim={selectedTrim}
              />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              {
                icon: Calculator,
                title: 'Precise OTD Pricing',
                description: 'Accurate out-the-door calculations with state-specific taxes, doc fees, and trade-in equity.',
                iconBg: 'bg-gold-500/10',
                iconColor: 'text-gold-400',
                delay: '200ms'
              },
              {
                icon: TrendingUp,
                title: 'Market Intelligence',
                description: 'Category-specific depreciation curves for exotics, luxury, trucks, and mainstream vehicles.',
                iconBg: 'bg-white/10',
                iconColor: 'text-white',
                delay: '300ms'
              },
              {
                icon: DollarSign,
                title: 'Negotiation Edge',
                description: 'See dealer invoice prices and profit margins. Know your negotiation room before you walk in.',
                iconBg: 'bg-gold-500/10',
                iconColor: 'text-gold-500',
                delay: '400ms'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="glass-card p-6 hover:border-white/20 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: feature.delay }}
              >
                <div className={`w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Brand strip */}
          <div className="text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
            <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em] font-bold mb-4">Pricing data for all major brands</p>
            <div className="flex items-center justify-center gap-4 flex-wrap text-slate-600 text-[11px] font-bold uppercase tracking-widest">
              {['Toyota', 'Honda', 'Ford', 'Tesla', 'BMW', 'Mercedes', 'Porsche', 'Audi', 'Lexus', 'Chevrolet', 'Ferrari', 'Lamborghini'].map((brand, i) => (
                <span key={i} className="hover:text-slate-400 transition-colors cursor-default px-1.5 py-1">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function TrendChart({ make, model, year, trim }) {
  const [trendData, setTrendData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({});

  useEffect(() => {
    if (!make || !model || !year) {
      setTrendData([]);
      setStats({});
      return;
    }

    const fetchTrends = async () => {
      setLoading(true);
      try {
        const url = trim 
          ? `/api/trends/${make}/${model}/${year}/${encodeURIComponent(trim)}`
          : `/api/trends/${make}/${model}/${year}`;
          
        const res = await fetch(url);
        const data = await res.json();
        setTrendData(data);

        const prices = data.map(d => d.avgPrice);
        const incentives = data.map(d => d.incentive);

        // Calculate trend direction
        const firstHalf = prices.slice(0, 6);
        const secondHalf = prices.slice(6);
        const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
        const secondAvg = secondHalf.length > 0 ? secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length : firstAvg;
        const trendDirection = secondAvg >= firstAvg ? 'up' : 'down';
        const trendPct = Math.abs(((secondAvg - firstAvg) / firstAvg) * 100).toFixed(1);

        setStats({
          lowPrice: Math.min(...prices),
          highPrice: Math.max(...prices),
          avgPrice: Math.round(prices.reduce((a, b) => a + b, 0) / prices.length),
          avgIncentive: Math.round(incentives.reduce((a, b) => a + b, 0) / incentives.length),
          trendDirection,
          trendPct,
        });
      } catch (error) {
        console.error('Error fetching trends:', error);
      }
      setLoading(false);
    };

    fetchTrends();
  }, [make, model, year, trim]);

  if (!make || !model || !year) {
    return (
      <div className="p-6 text-center text-slate-500 text-sm">
        Select a vehicle to view price trends
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-6 text-center text-zinc-500 text-sm">
        <div className="inline-block w-5 h-5 border-2 border-gold-500 border-t-transparent rounded-full animate-spin mr-2" />
        Loading market data...
      </div>
    );
  }

  const formatCurrency = (value) => '$' + value.toLocaleString();

  const isUsed = parseInt(year) < 2026;
  const age = 2026 - parseInt(year);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Trend summary badge */}
      {stats.trendDirection && (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {stats.trendDirection === 'up' ? (
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-400" />
            )}
            <span className="text-xs text-zinc-400">
              {isUsed ? `${age}-year depreciated pricing` : 'New vehicle market pricing'} — 
              <span className={stats.trendDirection === 'up' ? 'text-emerald-400' : 'text-red-400'}>
                {' '}{stats.trendDirection === 'up' ? '↑' : '↓'} {stats.trendPct}% over 12 months
              </span>
            </span>
          </div>
        </div>
      )}

      {/* Chart */}
      <div className="glass-card p-5">
        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-gold-400" />
          {isUsed ? 'Market Value Over Time' : 'Price & Incentive Trends'}
        </h4>

        {trendData.length > 0 && (
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#D4AF37" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="incentiveGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffffff" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="month" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} dy={8} />
                <YAxis stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(10, 10, 10, 0.95)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    backdropFilter: 'blur(10px)',
                    fontSize: '12px',
                  }}
                  labelStyle={{ color: '#fff', fontWeight: 'bold', marginBottom: '4px' }}
                  formatter={(value, name) => [
                    formatCurrency(value),
                    name === 'avgPrice' ? 'Market Value' : 'Incentives'
                  ]}
                />
                <Area
                  type="monotone"
                  dataKey="avgPrice"
                  stroke="#D4AF37"
                  strokeWidth={2.5}
                  fill="url(#priceGradient)"
                  dot={false}
                  activeDot={{ r: 5, fill: '#D4AF37', stroke: '#000000', strokeWidth: 2 }}
                />
                <Area
                  type="monotone"
                  dataKey="incentive"
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  fill="url(#incentiveGradient)"
                  dot={false}
                  activeDot={{ r: 4, fill: '#ffffff' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: '12M Low', value: stats.lowPrice, color: 'text-emerald-400' },
          { label: '12M Avg', value: stats.avgPrice, color: 'text-white' },
          { label: '12M High', value: stats.highPrice, color: 'text-red-400' },
          { label: 'Avg Incentive', value: stats.avgIncentive, color: 'text-gold-400' }
        ].map((stat, i) => (
          <div key={i} className="glass-card p-3">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</p>
            <p className={`text-base font-mono font-bold mt-1 ${stat.color}`}>
              {formatCurrency(stat.value || 0)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

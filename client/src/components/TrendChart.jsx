import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp } from 'lucide-react';

export function TrendChart({ make, model, year }) {
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
        const res = await fetch(`/api/trends/${make}/${model}/${year}`);
        const data = await res.json();
        setTrendData(data);

        // Calculate stats
        const prices = data.map(d => d.avgPrice);
        const incentives = data.map(d => d.incentive);

        const stats = {
          lowPrice: Math.min(...prices),
          highPrice: Math.max(...prices),
          avgPrice: Math.round(prices.reduce((a, b) => a + b, 0) / prices.length),
          avgIncentive: Math.round(incentives.reduce((a, b) => a + b, 0) / incentives.length),
        };
        setStats(stats);
      } catch (error) {
        console.error('Error fetching trends:', error);
      }
      setLoading(false);
    };

    fetchTrends();
  }, [make, model, year]);

  if (!make || !model || !year) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 text-center text-gray-400">
        Select a vehicle to view price trends
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 text-center text-gray-400">
        Loading trends...
      </div>
    );
  }

  const formatCurrency = (value) => {
    return '$' + value.toLocaleString();
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-400" />
          13-Month Price & Incentive Trends
        </h3>

        {trendData.length > 0 && (
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#999" />
                <YAxis yAxisId="left" stroke="#999" />
                <YAxis yAxisId="right" orientation="right" stroke="#999" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #444',
                    borderRadius: '0.5rem'
                  }}
                  formatter={(value) => formatCurrency(value)}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="avgPrice"
                  stroke="#3b82f6"
                  name="Avg Transaction Price"
                  dot={{ fill: '#3b82f6', r: 4 }}
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="incentive"
                  stroke="#10b981"
                  name="Avg Incentive"
                  dot={{ fill: '#10b981', r: 4 }}
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-gray-400">52-Week Low</p>
          <p className="text-xl font-mono font-bold text-green-400 mt-1">
            {formatCurrency(stats.lowPrice || 0)}
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-gray-400">52-Week Avg</p>
          <p className="text-xl font-mono font-bold text-blue-400 mt-1">
            {formatCurrency(stats.avgPrice || 0)}
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-gray-400">52-Week High</p>
          <p className="text-xl font-mono font-bold text-red-400 mt-1">
            {formatCurrency(stats.highPrice || 0)}
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-gray-400">Avg Incentive</p>
          <p className="text-xl font-mono font-bold text-emerald-400 mt-1">
            {formatCurrency(stats.avgIncentive || 0)}
          </p>
        </div>
      </div>
    </div>
  );
}

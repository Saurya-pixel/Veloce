import React from 'react';
import { Newspaper, TrendingUp, Clock, AlertCircle } from 'lucide-react';

const MOCK_NEWS = [
  {
    id: 1,
    category: 'Market Insight',
    title: 'Porsche 911 GT3 RS Pre-Owned Values Surge Past $300k',
    time: '2 hours ago',
    icon: TrendingUp,
    color: 'text-amber-500',
    bg: 'bg-amber-500/10'
  },
  {
    id: 2,
    category: 'Industry News',
    title: 'EV Depreciation Accelerates: What Buyers Need to Know',
    time: '5 hours ago',
    icon: AlertCircle,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10'
  },
  {
    id: 3,
    category: 'Auction Report',
    title: 'Rare Ferrari F8 Spider Sets New Record at Monterey',
    time: '1 day ago',
    icon: Newspaper,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    id: 4,
    category: 'Analysis',
    title: 'Why Trucks Are Holding Their Value Better Than SUVs',
    time: '2 days ago',
    icon: TrendingUp,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  }
];

export function NewsSidebar() {
  return (
    <div className="glass-card p-6 h-full border-indigo-500/20 animate-fade-in" style={{ animationDelay: '300ms' }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
          <Newspaper className="w-5 h-5 text-indigo-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Market News</h3>
          <p className="text-xs text-slate-400">Latest valuations & trends</p>
        </div>
      </div>

      <div className="space-y-4">
        {MOCK_NEWS.map((news) => (
          <div key={news.id} className="group p-4 rounded-2xl bg-slate-900/50 hover:bg-slate-800/50 border border-white/5 hover:border-white/10 transition-all cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${news.bg} ${news.color}`}>
                {news.category}
              </span>
              <div className="flex items-center gap-1 text-slate-500 text-[10px]">
                <Clock className="w-3 h-3" />
                {news.time}
              </div>
            </div>
            <h4 className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors line-clamp-2">
              {news.title}
            </h4>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 py-3 rounded-xl border border-white/10 text-xs font-bold text-slate-300 uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all">
        View All Reports
      </button>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Newspaper, TrendingUp, Clock, AlertCircle, ExternalLink } from 'lucide-react';

export function NewsSidebar() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news');
        const data = await res.json();
        setNewsData(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="glass-card p-6 h-full border-gold-500/20 animate-fade-in" style={{ animationDelay: '300ms' }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center">
          <Newspaper className="w-5 h-5 text-gold-400" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Market News</h3>
          <p className="text-xs text-slate-400">Latest valuations & trends</p>
        </div>
      </div>

      <div className="space-y-4">
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="w-6 h-6 border-2 border-gold-500/30 border-t-gold-500 rounded-full animate-spin"></div>
          </div>
        ) : newsData.length > 0 ? (
          newsData.map((news) => (
            <a 
              key={news.id} 
              href={news.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group p-4 rounded-2xl bg-slate-900/50 hover:bg-slate-800/50 border border-white/5 hover:border-white/10 transition-all cursor-pointer relative"
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full ${news.bg} ${news.color}`}>
                  {news.category}
                </span>
                <div className="flex items-center gap-1 text-slate-500 text-[10px]">
                  <Clock className="w-3 h-3" />
                  {news.time}
                </div>
              </div>
              <h4 className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors line-clamp-2 pr-6">
                {news.title}
              </h4>
              <ExternalLink className="absolute right-4 bottom-4 w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))
        ) : (
          <div className="text-center text-slate-400 text-sm py-4">
            No news available right now.
          </div>
        )}
      </div>
      
      <button className="w-full mt-6 py-3 rounded-xl border border-white/10 text-xs font-bold text-slate-300 uppercase tracking-widest hover:bg-white/5 hover:text-white transition-all">
        View All Reports
      </button>
    </div>
  );
}

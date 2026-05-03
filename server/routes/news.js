import express from 'express';

const router = express.Router();

router.get('/news', async (req, res) => {
  try {
    // Fetch top news from a public reliable source (Reddit /r/cars)
    const response = await fetch('https://www.reddit.com/r/cars/top.json?t=week&limit=5');
    if (!response.ok) {
      throw new Error(`Reddit API returned ${response.status}`);
    }
    const data = await response.json();
    
    // Map Reddit data to our news format
    const newsItems = data.data.children.map((child, index) => {
      const post = child.data;
      
      // Determine category and styling based on index or tags
      const categories = [
        { name: 'Market Insight', color: 'text-gold-500', bg: 'bg-gold-500/10' },
        { name: 'Industry News', color: 'text-white', bg: 'bg-white/10' },
        { name: 'Discussion', color: 'text-zinc-300', bg: 'bg-zinc-500/20' },
        { name: 'Analysis', color: 'text-gold-400', bg: 'bg-gold-500/5' },
        { name: 'Alert', color: 'text-zinc-100', bg: 'bg-white/5' }
      ];
      
      const categoryStyle = categories[index % categories.length];
      
      // Calculate hours ago
      const hoursAgo = Math.floor((Date.now() / 1000 - post.created_utc) / 3600);
      let timeString = `${hoursAgo} hours ago`;
      if (hoursAgo > 24) {
        timeString = `${Math.floor(hoursAgo / 24)} days ago`;
      } else if (hoursAgo === 0) {
        timeString = 'Just now';
      }

      return {
        id: post.id,
        category: categoryStyle.name,
        title: post.title,
        time: timeString,
        color: categoryStyle.color,
        bg: categoryStyle.bg,
        url: `https://reddit.com${post.permalink}`
      };
    });

    res.json(newsItems);
  } catch (error) {
    console.error('Error fetching news:', error.message);
    res.status(500).json({ error: 'Failed to fetch news data' });
  }
});

export default router;

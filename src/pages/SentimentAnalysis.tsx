import React, { useState } from 'react';
import { MessageSquare, TrendingUp, TrendingDown, Filter } from 'lucide-react';

const mockData = {
  posts: [
    {
      id: 1,
      platform: 'Twitter',
      content: 'Just bought more $AAPL shares. The new iPhone sales numbers look incredible! 🚀',
      sentiment: 0.9,
      timestamp: '5m ago',
      symbol: 'AAPL',
      engagement: 245,
    },
    {
      id: 2,
      platform: 'Reddit',
      content: '$TSLA facing some headwinds in the Chinese market. Might affect Q2 earnings.',
      sentiment: 0.3,
      timestamp: '15m ago',
      symbol: 'TSLA',
      engagement: 182,
    },
    {
      id: 3,
      platform: 'Twitter',
      content: '$NVDA continues to dominate the AI chip market. Strong buy signal.',
      sentiment: 0.8,
      timestamp: '25m ago',
      symbol: 'NVDA',
      engagement: 567,
    },
  ],
};

const SentimentAnalysis = () => {
  const [platform, setPlatform] = useState('all');
  const [sentiment, setSentiment] = useState('all');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Social Media Sentiment</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
          <Filter className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Filters */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Platforms</option>
          <option value="twitter">Twitter</option>
          <option value="reddit">Reddit</option>
          <option value="telegram">Telegram</option>
        </select>
        <select
          value={sentiment}
          onChange={(e) => setSentiment(e.target.value)}
          className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Sentiment</option>
          <option value="positive">Positive</option>
          <option value="neutral">Neutral</option>
          <option value="negative">Negative</option>
        </select>
      </div>

      {/* Posts Feed */}
      <div className="space-y-4">
        {mockData.posts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold">{post.platform}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{post.timestamp}</span>
                </div>
                <p className="text-lg">{post.content}</p>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-sm ${
                  post.sentiment > 0.6
                    ? 'bg-green-500/20 text-green-400'
                    : post.sentiment > 0.4
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                Sentiment: {post.sentiment.toFixed(2)}
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-blue-500">#{post.symbol}</span>
                <div className="flex items-center space-x-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{post.engagement}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {post.sentiment > 0.5 ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <span
                  className={post.sentiment > 0.5 ? 'text-green-500' : 'text-red-500'}
                >
                  {post.sentiment > 0.5 ? 'Bullish' : 'Bearish'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SentimentAnalysis;
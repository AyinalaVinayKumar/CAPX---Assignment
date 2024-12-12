import React from 'react';
import { useParams } from 'react-router-dom';
import { TrendingUp, MessageSquare, Users, BarChart2, Clock, ArrowRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = {
  stockInfo: {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 175.84,
    change: '+2.5%',
    sentiment: 0.8,
    mentions: 1250,
  },
  sentimentHistory: Array.from({ length: 30 }, (_, i) => ({
    date: `2024-03-${i + 1}`,
    sentiment: Math.random() * 0.5 + 0.3,
    price: 150 + Math.random() * 50,
  })),
  recentMentions: [
    {
      id: 1,
      platform: 'Twitter',
      content: 'Bullish on $AAPL, new product announcement coming soon! 🚀',
      sentiment: 0.9,
      timestamp: '5m ago',
    },
    {
      id: 2,
      platform: 'Reddit',
      content: 'Q1 earnings look strong, expecting good performance',
      sentiment: 0.7,
      timestamp: '15m ago',
    },
    {
      id: 3,
      platform: 'Twitter',
      content: 'Market conditions might affect short-term growth',
      sentiment: 0.4,
      timestamp: '30m ago',
    },
  ],
};

const StockAnalysis = () => {
  const { symbol } = useParams();
  const stockInfo = mockData.stockInfo;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Stock Overview */}
      <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{stockInfo.name}</h1>
            <p className="text-gray-400 text-xl mb-4">${stockInfo.symbol}</p>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold">${stockInfo.price}</span>
              <span className="text-green-500 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                {stockInfo.change}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <MessageSquare className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">Mentions</span>
              </div>
              <p className="text-2xl font-bold">{stockInfo.mentions}</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <BarChart2 className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">Sentiment</span>
              </div>
              <p className="text-2xl font-bold">{stockInfo.sentiment.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sentiment Chart */}
      <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-6">Sentiment Analysis</h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData.sentimentHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '0.5rem',
                }}
              />
              <Line
                type="monotone"
                dataKey="sentiment"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#10B981"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Mentions */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-6">Recent Mentions</h2>
        <div className="space-y-4">
          {mockData.recentMentions.map((mention) => (
            <div
              key={mention.id}
              className="bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold">{mention.platform}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{mention.timestamp}</span>
                </div>
                <div
                  className={`px-2 py-1 rounded-full text-sm ${
                    mention.sentiment > 0.6
                      ? 'bg-green-500/20 text-green-400'
                      : mention.sentiment > 0.4
                      ? 'bg-yellow-500/20 text-yellow-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  Sentiment: {mention.sentiment.toFixed(2)}
                </div>
              </div>
              <p className="text-gray-300">{mention.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockAnalysis;
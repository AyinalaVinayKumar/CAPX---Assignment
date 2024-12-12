import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, TrendingUp, TrendingDown, MessageSquare, Users, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockData = {
  trending: [
    { symbol: 'AAPL', name: 'Apple Inc.', sentiment: 0.8, change: '+2.5%' },
    { symbol: 'TSLA', name: 'Tesla, Inc.', sentiment: 0.6, change: '+1.8%' },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', sentiment: 0.9, change: '+3.2%' },
    { symbol: 'MSFT', name: 'Microsoft Corp.', sentiment: 0.7, change: '+1.5%' },
  ],
  chartData: Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    sentiment: Math.random() * 0.5 + 0.3,
    volume: Math.floor(Math.random() * 1000),
  })),
};

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for stocks..."
            className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
          />
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 mb-1">Total Mentions</p>
              <h3 className="text-2xl font-bold">24.5K</h3>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <MessageSquare className="h-6 w-6 text-blue-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-500">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+12.5%</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 mb-1">Active Users</p>
              <h3 className="text-2xl font-bold">8.2K</h3>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-500">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+5.2%</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 mb-1">Sentiment Score</p>
              <h3 className="text-2xl font-bold">0.75</h3>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <Activity className="h-6 w-6 text-blue-500" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-500">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+3.8%</span>
          </div>
        </motion.div>
      </div>

      {/* Sentiment Chart */}
      <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-6">Market Sentiment Overview</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData.chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
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
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trending Stocks */}
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-6">Trending Stocks</h2>
        <div className="grid gap-4">
          {mockData.trending.map((stock) => (
            <Link
              key={stock.symbol}
              to={`/analysis/${stock.symbol}`}
              className="bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-1">{stock.symbol}</h3>
                  <p className="text-sm text-gray-400">{stock.name}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">{stock.change}</span>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-sm text-gray-400">
                    Sentiment: {stock.sentiment.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
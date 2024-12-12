import React, { useState } from 'react';
import { Calendar, Search, Download, Car, MapPin, Clock, CreditCard } from 'lucide-react';

const ParkingHistory = () => {
  const [dateRange, setDateRange] = useState('last-7-days');
  const [searchQuery, setSearchQuery] = useState('');

  const parkingHistory = [
    {
      id: 1,
      vehicle: 'ABC 123',
      location: 'Downtown Zone A',
      startTime: '2024-03-10 10:00 AM',
      endTime: '2024-03-10 12:00 PM',
      duration: '2 hours',
      amount: '$5.00',
      status: 'completed'
    },
    // Add more history items as needed
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Parking History</h1>

      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="col-span-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by vehicle or location..."
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        <select
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="last-7-days">Last 7 Days</option>
          <option value="last-30-days">Last 30 Days</option>
          <option value="last-90-days">Last 90 Days</option>
          <option value="custom">Custom Range</option>
        </select>
      </div>

      {/* History List */}
      <div className="bg-gray-800/50 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Parking Sessions</h2>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        <div className="divide-y divide-gray-700">
          {parkingHistory.map((session) => (
            <div key={session.id} className="p-6 hover:bg-gray-800/50 transition-colors">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Car className="h-5 w-5 text-blue-400" />
                    <span>{session.vehicle}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <span>{session.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-400" />
                    <span>{session.duration}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-400" />
                    <span>{session.startTime} - {session.endTime}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CreditCard className="h-5 w-5 text-blue-400" />
                    <span>{session.amount}</span>
                  </div>
                  <div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      {session.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParkingHistory;
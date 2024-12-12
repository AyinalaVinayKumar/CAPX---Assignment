import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, BarChart2, MessageSquare, Settings } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/', icon: TrendingUp },
    { name: 'Sentiment Analysis', href: '/sentiment', icon: MessageSquare },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <nav className="bg-gray-900/50 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BarChart2 className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-white">StockSense AI</span>
          </Link>

          <div className="flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-blue-500'
                    : 'text-gray-300 hover:text-white'
                } flex items-center space-x-1 transition-colors duration-200`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
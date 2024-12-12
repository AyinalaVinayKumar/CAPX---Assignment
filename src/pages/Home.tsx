import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Clock, CreditCard, Shield, Smartphone, Map } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    {
      icon: Car,
      title: 'Multiple Vehicles',
      description: 'Manage multiple vehicles under one account'
    },
    {
      icon: Clock,
      title: 'Flexible Parking',
      description: 'Pay only for the time you need'
    },
    {
      icon: CreditCard,
      title: 'Easy Payments',
      description: 'Multiple payment options including PayPal and credit cards'
    },
    {
      icon: Shield,
      title: 'Secure System',
      description: 'Advanced security for your data and transactions'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Manage your parking from your phone'
    },
    {
      icon: Map,
      title: 'Location Tracking',
      description: 'Find your parked vehicle easily'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Smart City Parking Made Easy
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Manage and pay for your parking spaces digitally. No more paper tickets or searching for meters.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/dashboard"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <a
            href="#features"
            className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Learn More
          </a>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div id="features" className="grid md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
          >
            <feature.icon className="h-8 w-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* How It Works */}
      <div className="bg-gray-800/30 rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-500/10 rounded-full p-4 inline-block mb-4">
              <Car className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Register Your Vehicle</h3>
            <p className="text-gray-400">Add your vehicle details and license plate number</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500/10 rounded-full p-4 inline-block mb-4">
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Select Parking Duration</h3>
            <p className="text-gray-400">Choose how long you need to park</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-500/10 rounded-full p-4 inline-block mb-4">
              <CreditCard className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pay Securely</h3>
            <p className="text-gray-400">Complete payment using your preferred method</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-400 mb-8">
          Join thousands of users who have simplified their parking experience.
        </p>
        <Link
          to="/dashboard"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

export default Home;
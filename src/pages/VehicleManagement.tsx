import React, { useState } from 'react';
import { Car, Plus, Edit2, Trash2 } from 'lucide-react';

const VehicleManagement = () => {
  const [vehicles, setVehicles] = useState([
    { id: 1, plate: 'ABC 123', make: 'Toyota', model: 'Camry', year: '2020' },
    { id: 2, plate: 'XYZ 789', make: 'Honda', model: 'Civic', year: '2019' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Vehicle Management</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Add Vehicle</span>
        </button>
      </div>

      {/* Vehicle List */}
      <div className="grid gap-6">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Car className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{vehicle.plate}</h3>
                  <p className="text-gray-400">
                    {vehicle.year} {vehicle.make} {vehicle.model}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Edit2 className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Vehicle Form */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add New Vehicle</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">License Plate</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter license plate"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Make</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Vehicle make"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Model</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Vehicle model"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Year</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Vehicle year"
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Vehicle
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleManagement;
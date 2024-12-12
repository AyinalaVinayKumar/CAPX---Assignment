import React, { useState } from 'react';
import { CreditCard, Plus, PaypalIcon, Trash2 } from 'lucide-react';

const PaymentMethods = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'credit_card',
      last4: '4242',
      expiry: '12/24',
      brand: 'Visa'
    },
    {
      id: 2,
      type: 'paypal',
      email: 'user@example.com'
    }
  ]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Payment Methods</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Add Payment Method</span>
        </button>
      </div>

      {/* Payment Methods List */}
      <div className="grid gap-6">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  {method.type === 'credit_card' ? (
                    <CreditCard className="h-6 w-6 text-blue-500" />
                  ) : (
                    <PaypalIcon className="h-6 w-6 text-blue-500" />
                  )}
                </div>
                <div>
                  {method.type === 'credit_card' ? (
                    <>
                      <h3 className="text-xl font-semibold mb-1">
                        {method.brand} •••• {method.last4}
                      </h3>
                      <p className="text-gray-400">Expires {method.expiry}</p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold mb-1">PayPal</h3>
                      <p className="text-gray-400">{method.email}</p>
                    </>
                  )}
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Payment Method Form */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Payment Method</h2>
            <div className="grid gap-4">
              <button className="flex items-center justify-center space-x-2 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <CreditCard className="h-5 w-5" />
                <span>Add Credit Card</span>
              </button>
              <button className="flex items-center justify-center space-x-2 p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <PaypalIcon className="h-5 w-5" />
                <span>Connect PayPal</span>
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div></div>
      )}
    </div>
  );
};

export default PaymentMethods;
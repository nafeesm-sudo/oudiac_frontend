import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, CreditCard, CheckCircle } from "lucide-react";
import CustomerLayout from "../../components/Customer/CustomerLayout";

const Checkout = () => {
  const { cartItems, cartTotal, setCartItems } = useCart();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (orderPlaced) {
    return (
      <CustomerLayout>
        <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center max-w-lg mx-auto mt-10 shadow-sm">
          <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-black text-gray-900 mb-2">
            Order Confirmed!
          </h2>
          <p className="text-gray-500 mb-6">
            Your order #ORD-8921 has been placed and will be delivered in 10
            minutes.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700"
          >
            Continue Shopping
          </button>
        </div>
      </CustomerLayout>
    );
  }

  return (
    <CustomerLayout>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Col: Details */}
        <div className="flex-1 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-emerald-600" /> Delivery Address
            </h3>
            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl">
              <h4 className="font-bold text-emerald-900">Home</h4>
              <p className="text-sm text-emerald-700 mt-1">
                Flat 402, Sunshine Apartments, Sector 2, HSR Layout, Bengaluru
              </p>
            </div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
              <CreditCard className="w-5 h-5 text-emerald-600" /> Payment Method
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border border-emerald-500 bg-emerald-50 rounded-xl cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                  className="text-emerald-600 focus:ring-emerald-500"
                />
                <span className="font-bold text-gray-900">
                  UPI (Google Pay, PhonePe)
                </span>
              </label>
              <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  className="text-emerald-600 focus:ring-emerald-500"
                />
                <span className="font-bold text-gray-900">
                  Cash on Delivery
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Col: Summary */}
        <div className="w-full lg:w-96 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-24">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
            <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.quantity} x {item.name}
                  </span>
                  <span className="font-medium text-gray-900">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Item Total</span>
                <span className="font-medium">₹{cartTotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Fee</span>
                <span className="font-medium">₹15</span>
              </div>
              <div className="flex justify-between text-lg font-bold mt-2 pt-2 border-t border-gray-100">
                <span>To Pay</span>
                <span>₹{cartTotal + 15}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setCartItems([]);
                setOrderPlaced(true);
              }}
              className="w-full mt-6 bg-emerald-600 text-white py-3.5 rounded-xl font-bold hover:bg-emerald-700 shadow-md transition-colors"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default Checkout;

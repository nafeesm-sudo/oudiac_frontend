import React, { useState } from "react";
import { User, Package, MapPin, LogOut } from "lucide-react";
import CustomerLayout from "../../components/Customer/CustomerLayout";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("orders");

  return (
    <CustomerLayout>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar (Admin Style) */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-6 p-2">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-lg">
                AJ
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Alex Johnson</h3>
                <p className="text-xs text-gray-500">+91 98765 43210</p>
              </div>
            </div>

            <div className="space-y-1">
              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === "orders" ? "bg-emerald-50 text-emerald-600" : "text-gray-600 hover:bg-gray-50"}`}
              >
                <Package className="w-5 h-5" /> My Orders
              </button>
              <button
                onClick={() => setActiveTab("details")}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === "details" ? "bg-emerald-50 text-emerald-600" : "text-gray-600 hover:bg-gray-50"}`}
              >
                <User className="w-5 h-5" /> Account Details
              </button>
              <button
                onClick={() => setActiveTab("addresses")}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeTab === "addresses" ? "bg-emerald-50 text-emerald-600" : "text-gray-600 hover:bg-gray-50"}`}
              >
                <MapPin className="w-5 h-5" /> Saved Addresses
              </button>
              <div className="h-px bg-gray-100 my-2"></div>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                <LogOut className="w-5 h-5" /> Logout
              </button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm min-h-[500px]">
          {activeTab === "orders" && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-6">
                Recent Orders
              </h2>
              <div className="border border-gray-100 rounded-xl p-4 flex items-center justify-between hover:border-emerald-200 transition-colors cursor-pointer">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900">
                      Order #ORD-0921
                    </span>
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-md">
                      Delivered
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Placed on May 28, 2026 • ₹1,240
                  </p>
                </div>
                <button className="text-emerald-600 font-semibold text-sm">
                  View Details
                </button>
              </div>
            </div>
          )}

          {activeTab === "details" && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-6">
                Account Details
              </h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Alex Johnson"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="alex@example.com"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  />
                </div>
                <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-emerald-700">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </CustomerLayout>
  );
};

export default Profile;

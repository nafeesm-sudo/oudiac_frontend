import React, { useState } from "react";
import {
  Store,
  User,
  CreditCard,
  Bell,
  Shield,
  Save,
  MapPin,
  Globe,
  Mail,
  Phone,
  Lock,
} from "lucide-react";
import AdminLayout from "../../components/Admin/Layout/AdminLayout";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");

  // Dummy State for Form Toggles
  const [toggles, setToggles] = useState({
    orderAlerts: true,
    stockAlerts: true,
    promoEmails: false,
    codEnabled: true,
    taxIncluded: false,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const tabs = [
    {
      id: "general",
      name: "General",
      icon: Store,
      desc: "Store details and currency",
    },
    {
      id: "profile",
      name: "Profile",
      icon: User,
      desc: "Admin account settings",
    },
    {
      id: "payments",
      name: "Payments",
      icon: CreditCard,
      desc: "Gateways and taxes",
    },
    {
      id: "notifications",
      name: "Notifications",
      icon: Bell,
      desc: "Email and push alerts",
    },
    {
      id: "security",
      name: "Security",
      icon: Shield,
      desc: "Passwords and 2FA",
    },
  ];

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your application preferences and configurations.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-emerald-600 text-white rounded-lg text-sm font-bold hover:bg-emerald-700 transition-colors shadow-sm">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Settings Sidebar Navigation */}
        <div className="w-full lg:w-72 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2 flex flex-col gap-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-start gap-3 w-full p-3 rounded-xl transition-all text-left ${
                    isActive
                      ? "bg-emerald-50 border-emerald-100/50 shadow-sm"
                      : "hover:bg-gray-50 border-transparent"
                  } border`}
                >
                  <div
                    className={`p-2 rounded-lg ${isActive ? "bg-emerald-100 text-emerald-600" : "bg-gray-100 text-gray-500"}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`text-sm font-bold ${isActive ? "text-emerald-800" : "text-gray-700"}`}
                    >
                      {tab.name}
                    </h3>
                    <p
                      className={`text-xs mt-0.5 ${isActive ? "text-emerald-600/80" : "text-gray-500"}`}
                    >
                      {tab.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Settings Content Area */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* General Settings Tab */}
            {activeTab === "general" && (
              <div className="p-6 sm:p-8">
                <h2 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                  General Information
                </h2>

                <div className="space-y-6 max-w-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Store Name
                      </label>
                      <input
                        type="text"
                        defaultValue="QuickMart App"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Support Email
                      </label>
                      <input
                        type="email"
                        defaultValue="support@quickmart.com"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Support Phone
                      </label>
                      <input
                        type="text"
                        defaultValue="+91 1800 123 4567"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Currency
                      </label>
                      <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm appearance-none cursor-pointer">
                        <option value="INR">Indian Rupee (₹)</option>
                        <option value="USD">US Dollar ($)</option>
                        <option value="EUR">Euro (€)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Timezone
                    </label>
                    <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm appearance-none cursor-pointer">
                      <option value="IST">Asia/Kolkata (IST)</option>
                      <option value="UTC">
                        Coordinated Universal Time (UTC)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Headquarters Address
                    </label>
                    <textarea
                      rows="3"
                      defaultValue="123 Startup Boulevard, Sector 4, HSR Layout, Bengaluru, Karnataka 560102"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="p-6 sm:p-8">
                <h2 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                  Admin Profile
                </h2>
                <div className="flex items-center gap-6 mb-8">
                  <img
                    src="https://ui-avatars.com/api/?name=Sarah+Jenkins&background=10b981&color=fff&size=128"
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-emerald-50"
                  />
                  <div>
                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors mb-2">
                      Change Avatar
                    </button>
                    <p className="text-xs text-gray-500">
                      JPG, GIF or PNG. Max size of 800K
                    </p>
                  </div>
                </div>

                <div className="space-y-6 max-w-2xl">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Sarah"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Jenkins"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      defaultValue="sarah.jenkins@quickmart.com"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === "notifications" && (
              <div className="p-6 sm:p-8">
                <h2 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                  Notification Preferences
                </h2>
                <div className="max-w-2xl space-y-6">
                  {/* Custom Toggle 1 */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        New Order Alerts
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Receive a push notification for every new order.
                      </p>
                    </div>
                    <button
                      onClick={() => handleToggle("orderAlerts")}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${toggles.orderAlerts ? "bg-emerald-500" : "bg-gray-300"}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggles.orderAlerts ? "translate-x-6" : "translate-x-1"}`}
                      />
                    </button>
                  </div>

                  {/* Custom Toggle 2 */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        Low Stock Warnings
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Get notified when a product falls below the threshold.
                      </p>
                    </div>
                    <button
                      onClick={() => handleToggle("stockAlerts")}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${toggles.stockAlerts ? "bg-emerald-500" : "bg-gray-300"}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggles.stockAlerts ? "translate-x-6" : "translate-x-1"}`}
                      />
                    </button>
                  </div>

                  {/* Custom Toggle 3 */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        Marketing Emails
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Receive weekly reports and feature updates.
                      </p>
                    </div>
                    <button
                      onClick={() => handleToggle("promoEmails")}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${toggles.promoEmails ? "bg-emerald-500" : "bg-gray-300"}`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${toggles.promoEmails ? "translate-x-6" : "translate-x-1"}`}
                      />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Other Tabs Placeholder */}
            {(activeTab === "payments" || activeTab === "security") && (
              <div className="p-6 sm:p-12 flex flex-col items-center justify-center text-center h-96">
                <Shield className="w-16 h-16 text-gray-200 mb-4" />
                <h3 className="text-lg font-bold text-gray-900">
                  Advanced {activeTab === "payments" ? "Payments" : "Security"}{" "}
                  Configuration
                </h3>
                <p className="text-gray-500 text-sm max-w-sm mt-2">
                  This section requires super-admin authentication. Please
                  contact your system administrator to unlock these settings.
                </p>
                <button className="mt-6 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
                  Request Access
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;

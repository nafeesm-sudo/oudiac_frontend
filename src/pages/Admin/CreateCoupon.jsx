import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Save,
  Ticket,
  Percent,
  IndianRupee,
  Truck,
  Calendar,
  Settings,
} from "lucide-react";
import AdminLayout from "../../components/Admin/Layout/AdminLayout";

const CreateCoupon = () => {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    code: "",
    type: "percentage", // percentage, flat, shipping
    value: "",
    minOrderAmount: "",
    maxDiscountAmount: "",
    startDate: "",
    startTime: "00:00",
    endDate: "",
    endTime: "23:59",
    usageLimit: "",
    perUserLimit: "1",
    status: "active", // active, draft
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Auto-uppercase coupon code
    if (name === "code") {
      setFormData((prev) => ({ ...prev, [name]: value.toUpperCase() }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleTypeChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      type,
      // Reset values when switching types
      value: type === "shipping" ? "0" : "",
      maxDiscountAmount: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Coupon Data Submitted:", formData);
    alert("Coupon created successfully!");
    navigate("/admin/coupons"); // Redirect back to coupons list
  };

  return (
    <AdminLayout>
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate("/admin/coupons")}
              className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                Create New Coupon
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Set up discount codes, free shipping, and promotional offers.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/admin/coupons")}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Discard
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 text-sm font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-sm shadow-emerald-600/20 transition-colors"
            >
              <Save className="w-4 h-4" />
              Save Coupon
            </button>
          </div>
        </div>

        {/* Main Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Primary Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* General Info Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Ticket className="w-5 h-5 text-emerald-600" />
                Coupon Details
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Coupon Code
                  </label>
                  <input
                    type="text"
                    name="code"
                    required
                    value={formData.code}
                    onChange={handleChange}
                    placeholder="e.g., WELCOME20, SUMMER50"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm font-mono tracking-wider uppercase"
                  />
                  <p className="text-xs text-gray-500 mt-1.5">
                    Customers will enter this code at checkout.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Discount Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div
                      onClick={() => handleTypeChange("percentage")}
                      className={`cursor-pointer p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                        formData.type === "percentage"
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : "border-gray-200 hover:bg-gray-50 text-gray-600"
                      }`}
                    >
                      <Percent
                        className={`w-6 h-6 ${formData.type === "percentage" ? "text-emerald-600" : "text-gray-400"}`}
                      />
                      <span className="text-sm font-bold">Percentage</span>
                    </div>
                    <div
                      onClick={() => handleTypeChange("flat")}
                      className={`cursor-pointer p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                        formData.type === "flat"
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : "border-gray-200 hover:bg-gray-50 text-gray-600"
                      }`}
                    >
                      <IndianRupee
                        className={`w-6 h-6 ${formData.type === "flat" ? "text-emerald-600" : "text-gray-400"}`}
                      />
                      <span className="text-sm font-bold">Flat Amount</span>
                    </div>
                    <div
                      onClick={() => handleTypeChange("shipping")}
                      className={`cursor-pointer p-4 rounded-xl border flex flex-col items-center gap-2 transition-all ${
                        formData.type === "shipping"
                          ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                          : "border-gray-200 hover:bg-gray-50 text-gray-600"
                      }`}
                    >
                      <Truck
                        className={`w-6 h-6 ${formData.type === "shipping" ? "text-emerald-600" : "text-gray-400"}`}
                      />
                      <span className="text-sm font-bold">Free Shipping</span>
                    </div>
                  </div>
                </div>

                {formData.type !== "shipping" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Discount Value
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        {formData.type === "percentage" ? (
                          <Percent className="w-4 h-4 text-gray-400" />
                        ) : (
                          <IndianRupee className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <input
                        type="number"
                        name="value"
                        required
                        min="1"
                        value={formData.value}
                        onChange={handleChange}
                        placeholder={
                          formData.type === "percentage"
                            ? "e.g., 20"
                            : "e.g., 150"
                        }
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Conditions Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-emerald-600" />
                Usage Conditions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Minimum Order Amount (₹)
                  </label>
                  <input
                    type="number"
                    name="minOrderAmount"
                    required
                    min="0"
                    value={formData.minOrderAmount}
                    onChange={handleChange}
                    placeholder="e.g., 499"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-1.5">
                    Applies to subtotal.
                  </p>
                </div>

                {formData.type === "percentage" && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Maximum Discount (₹)
                    </label>
                    <input
                      type="number"
                      name="maxDiscountAmount"
                      min="0"
                      value={formData.maxDiscountAmount}
                      onChange={handleChange}
                      placeholder="e.g., 100"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                    />
                    <p className="text-xs text-gray-500 mt-1.5">
                      Leave blank for uncapped.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Organization & Settings */}
          <div className="lg:col-span-1 space-y-6">
            {/* Status Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Status</h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 border border-emerald-500 bg-emerald-50 rounded-xl cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value="active"
                    checked={formData.status === "active"}
                    onChange={handleChange}
                    className="text-emerald-600 focus:ring-emerald-500 w-4 h-4"
                  />
                  <span className="font-bold text-emerald-900 text-sm">
                    Active
                  </span>
                </label>
                <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="status"
                    value="draft"
                    checked={formData.status === "draft"}
                    onChange={handleChange}
                    className="text-gray-600 focus:ring-gray-500 w-4 h-4"
                  />
                  <span className="font-bold text-gray-900 text-sm">
                    Save as Draft
                  </span>
                </label>
              </div>
            </div>

            {/* Validity Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-600" />
                Validity
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Starts
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      name="startDate"
                      required
                      value={formData.startDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                    />
                    <input
                      type="time"
                      name="startTime"
                      required
                      value={formData.startTime}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Ends
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                    />
                    <input
                      type="time"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleChange}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1.5">
                    Leave blank for no expiration date.
                  </p>
                </div>
              </div>
            </div>

            {/* Limits Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Limits</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Total Usage Limit
                  </label>
                  <input
                    type="number"
                    name="usageLimit"
                    min="1"
                    value={formData.usageLimit}
                    onChange={handleChange}
                    placeholder="e.g., 1000"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                  />
                  <p className="text-[11px] text-gray-500 mt-1">
                    Maximum times this code can be used across the store.
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Limit per customer
                  </label>
                  <input
                    type="number"
                    name="perUserLimit"
                    min="1"
                    value={formData.perUserLimit}
                    onChange={handleChange}
                    placeholder="1"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default CreateCoupon;

import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  MoreVertical,
  Ticket,
  Tag,
  Percent,
  Calendar,
  IndianRupee,
  Copy,
  Trash2,
  Edit3,
  PowerOff,
  Sparkles,
} from "lucide-react";
import AdminLayout from "../../components/Admin/Layout/AdminLayout";

// Dummy Coupons Data
const initialCoupons = [
  {
    id: "CPN-001",
    code: "WELCOME20",
    type: "percentage",
    value: 20,
    maxDiscount: 100,
    minOrder: 299,
    usageLimit: 5000,
    used: 3420,
    status: "Active",
    expiry: "Dec 31, 2026",
  },
  {
    id: "CPN-002",
    code: "FLAT50",
    type: "flat",
    value: 50,
    maxDiscount: 50,
    minOrder: 199,
    usageLimit: 1000,
    used: 1000,
    status: "Expired",
    expiry: "May 25, 2026",
  },
  {
    id: "CPN-003",
    code: "FREEDEL",
    type: "shipping",
    value: 0,
    maxDiscount: 0,
    minOrder: 99,
    usageLimit: null,
    used: 8450,
    status: "Active",
    expiry: "Jun 30, 2026",
  },
  {
    id: "CPN-004",
    code: "WEEKENDFUN",
    type: "percentage",
    value: 15,
    maxDiscount: 75,
    minOrder: 399,
    usageLimit: 2000,
    used: 450,
    status: "Draft",
    expiry: "Jun 01, 2026",
  },
  {
    id: "CPN-005",
    code: "GROCERY10",
    type: "percentage",
    value: 10,
    maxDiscount: 150,
    minOrder: 999,
    usageLimit: 1500,
    used: 1480,
    status: "Active",
    expiry: "May 31, 2026",
  },
];

const Coupons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Status Badge Logic
  const getStatusBadge = (status) => {
    switch (status) {
      case "Active":
        return (
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center w-max gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>{" "}
            Active
          </span>
        );
      case "Expired":
        return (
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-red-50 text-red-600 border border-red-200">
            Expired
          </span>
        );
      case "Draft":
        return (
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 border border-gray-200">
            Draft
          </span>
        );
      default:
        return null;
    }
  };

  // Type Icon Logic
  const getTypeIcon = (type) => {
    switch (type) {
      case "percentage":
        return <Percent className="w-4 h-4 text-blue-500" />;
      case "flat":
        return <IndianRupee className="w-4 h-4 text-emerald-500" />;
      case "shipping":
        return <Ticket className="w-4 h-4 text-purple-500" />;
      default:
        return <Tag className="w-4 h-4 text-gray-500" />;
    }
  };

  // Filter Logic
  const filteredCoupons = initialCoupons.filter((coupon) => {
    const matchesSearch = coupon.code
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || coupon.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Coupons & Promotions
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create and manage discount codes, offers, and free shipping rules.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
            Create Coupon
          </button>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">
            Active Promotions
          </p>
          <div className="flex items-end gap-2">
            <h4 className="text-2xl font-bold text-gray-900">12</h4>
            <span className="text-sm text-gray-500 mb-1">
              running campaigns
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Ticket className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">
            Total Coupon Uses
          </p>
          <h4 className="text-2xl font-bold text-gray-900">14,800</h4>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <IndianRupee className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">
            Total Discount Given
          </p>
          <h4 className="text-2xl font-bold text-gray-900">₹4.2L</h4>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Filters & Search */}
        <div className="p-4 sm:px-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by coupon code..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all uppercase placeholder:normal-case"
            />
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-1 min-w-max">
              {["All", "Active", "Draft", "Expired"].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    statusFilter === status
                      ? "bg-white text-gray-900 shadow-sm border border-gray-200/50"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
            <button className="p-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Coupons Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-50/50 text-gray-500 text-sm border-b border-gray-100">
                <th className="px-6 py-4 font-medium">Coupon Code</th>
                <th className="px-6 py-4 font-medium">Discount Type</th>
                <th className="px-6 py-4 font-medium">Conditions</th>
                <th className="px-6 py-4 font-medium">Usage</th>
                <th className="px-6 py-4 font-medium">Status & Expiry</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredCoupons.length > 0 ? (
                filteredCoupons.map((coupon, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50/80 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-100 p-2 rounded-lg border border-gray-200 border-dashed">
                          <span className="font-mono font-bold text-gray-900 tracking-wider text-sm">
                            {coupon.code}
                          </span>
                        </div>
                        <button
                          className="text-gray-400 hover:text-emerald-600 transition-colors"
                          title="Copy Code"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-gray-100 rounded-md">
                          {getTypeIcon(coupon.type)}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-900 text-sm capitalize">
                            {coupon.type === "shipping"
                              ? "Free Shipping"
                              : `${coupon.type} Discount`}
                          </span>
                          <span className="text-xs text-gray-500">
                            {coupon.type === "percentage" &&
                              `${coupon.value}% off (Max ₹${coupon.maxDiscount})`}
                            {coupon.type === "flat" && `₹${coupon.value} off`}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
                        Min. order: ₹{coupon.minOrder}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="font-bold text-gray-900">
                            {coupon.used}
                          </span>
                          <span className="text-gray-500">
                            / {coupon.usageLimit || "∞"}
                          </span>
                        </div>
                        {coupon.usageLimit && (
                          <div className="w-full bg-gray-100 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full ${coupon.used >= coupon.usageLimit ? "bg-red-500" : "bg-emerald-500"}`}
                              style={{
                                width: `${Math.min((coupon.used / coupon.usageLimit) * 100, 100)}%`,
                              }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-start gap-1.5">
                        {getStatusBadge(coupon.status)}
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> Exp: {coupon.expiry}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 text-gray-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                          title="Deactivate"
                        >
                          <PowerOff className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-6 py-16 text-center">
                    <Ticket className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      No coupons found
                    </h3>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto">
                      We couldn't find any promotional codes matching your
                      search or filters.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Dummy */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm">
          <span className="text-gray-500">
            Showing {filteredCoupons.length} entries
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-gray-200 text-gray-600 rounded-md hover:bg-gray-50 disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-1.5 bg-emerald-600 text-white font-medium rounded-md">
              1
            </button>
            <button className="px-3 py-1.5 border border-gray-200 text-gray-600 rounded-md hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Coupons;

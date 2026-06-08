import React, { useState } from "react";
import {
  Search,
  Filter,
  MoreVertical,
  Bike,
  Map,
  MapPin,
  Star,
  Plus,
  ShieldCheck,
  Clock,
  Zap,
  Navigation,
  ArrowDownToLine,
} from "lucide-react";
import AdminLayout from "../../components/Admin/Layout/AdminLayout";

// Dummy Delivery Partners Data
const initialPartners = [
  {
    id: "DP-1042",
    name: "Ramesh Kumar",
    phone: "+91 98765 10001",
    zone: "Koramangala",
    vehicle: "EV Scooter",
    status: "On Delivery",
    rating: 4.8,
    totalDeliveries: 1245,
    lastActive: "Now",
  },
  {
    id: "DP-1043",
    name: "Suresh Singh",
    phone: "+91 98765 10002",
    zone: "HSR Layout",
    vehicle: "Motorcycle",
    status: "Online",
    rating: 4.9,
    totalDeliveries: 3420,
    lastActive: "Now",
  },
  {
    id: "DP-1044",
    name: "Manish Reddy",
    phone: "+91 98765 10003",
    zone: "Indiranagar",
    vehicle: "Motorcycle",
    status: "Offline",
    rating: 4.5,
    totalDeliveries: 890,
    lastActive: "2 hours ago",
  },
  {
    id: "DP-1045",
    name: "Karthik Iyer",
    phone: "+91 98765 10004",
    zone: "Whitefield",
    vehicle: "EV Scooter",
    status: "On Delivery",
    rating: 4.7,
    totalDeliveries: 2150,
    lastActive: "Now",
  },
  {
    id: "DP-1046",
    name: "Syed Ali",
    phone: "+91 98765 10005",
    zone: "JP Nagar",
    vehicle: "Bicycle",
    status: "Online",
    rating: 4.6,
    totalDeliveries: 430,
    lastActive: "Now",
  },
  {
    id: "DP-1047",
    name: "David Raj",
    phone: "+91 98765 10006",
    zone: "BTM Layout",
    vehicle: "Motorcycle",
    status: "Offline",
    rating: 4.2,
    totalDeliveries: 150,
    lastActive: "1 day ago",
  },
];

const DeliveryPartners = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Status Badge Logic
  const getStatusBadge = (status) => {
    switch (status) {
      case "Online":
        return (
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center w-max gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>{" "}
            Available
          </span>
        );
      case "On Delivery":
        return (
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-600 border border-blue-200 flex items-center w-max gap-1.5">
            <Zap className="w-3 h-3" /> On Order
          </span>
        );
      case "Offline":
        return (
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 border border-gray-200 flex items-center w-max gap-1.5">
            <Clock className="w-3 h-3" /> Offline
          </span>
        );
      default:
        return null;
    }
  };

  // Filter Logic
  const filteredPartners = initialPartners.filter((partner) => {
    const matchesSearch =
      partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.zone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      partner.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || partner.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Delivery Fleet</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and monitor your delivery partners in real-time.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <Map className="w-4 h-4" />
            Live Tracking
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
            Onboard Partner
          </button>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">
            Active Partners Now
          </p>
          <div className="flex items-end gap-2">
            <h4 className="text-2xl font-bold text-gray-900">842</h4>
            <span className="text-sm text-gray-500 mb-1">/ 1,250</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-blue-400">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Navigation className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">
            Currently on Delivery
          </p>
          <h4 className="text-2xl font-bold text-gray-900">315</h4>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <Clock className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">
            Avg. Delivery Time
          </p>
          <div className="flex items-end gap-2">
            <h4 className="text-2xl font-bold text-gray-900">8.4</h4>
            <span className="text-sm text-gray-500 mb-1">mins</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <Star className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">
            Avg. Fleet Rating
          </p>
          <div className="flex items-end gap-2">
            <h4 className="text-2xl font-bold text-gray-900">4.7</h4>
            <span className="text-sm text-gray-500 mb-1">/ 5.0</span>
          </div>
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
              placeholder="Search by name, ID, or zone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
            />
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-1 min-w-max">
              {["All", "Online", "On Delivery", "Offline"].map((status) => (
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
            <button className="flex items-center gap-2 p-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
            <button
              className="p-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
              title="Export List"
            >
              <ArrowDownToLine className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Delivery Partners Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-50/50 text-gray-500 text-sm border-b border-gray-100">
                <th className="px-6 py-4 font-medium">Partner Details</th>
                <th className="px-6 py-4 font-medium">Zone & Vehicle</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Deliveries</th>
                <th className="px-6 py-4 font-medium">Rating</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredPartners.length > 0 ? (
                filteredPartners.map((partner, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50/80 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold border border-emerald-200">
                          {partner.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-900 text-sm hover:text-emerald-600 cursor-pointer">
                            {partner.name}
                          </span>
                          <span className="text-xs font-mono text-gray-500 mt-0.5">
                            {partner.id} • {partner.phone}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1.5">
                        <span className="inline-flex items-center gap-1.5 text-sm text-gray-900 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />
                          {partner.zone}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-xs text-gray-500">
                          <Bike className="w-3.5 h-3.5 text-gray-400" />
                          {partner.vehicle}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        {getStatusBadge(partner.status)}
                        {partner.status === "Offline" && (
                          <span className="text-[10px] text-gray-400 ml-1">
                            Last: {partner.lastActive}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 text-sm">
                          {partner.totalDeliveries}
                        </span>
                        <span className="text-xs text-gray-500">Lifetime</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 bg-amber-50 text-amber-700 px-2 py-1 rounded-md w-max border border-amber-200">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        <span className="text-sm font-bold">
                          {partner.rating}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          Track
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
                    <Bike className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      No partners found
                    </h3>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto">
                      We couldn't find any delivery partners matching your
                      search or filters.
                    </p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm">
          <span className="text-gray-500">
            Showing {filteredPartners.length} entries
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

export default DeliveryPartners;

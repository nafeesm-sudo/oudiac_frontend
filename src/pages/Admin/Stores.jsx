import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  MoreVertical,
  Store,
  MapPin,
  TrendingUp,
  Users,
  Power,
  Activity,
  Map,
  Phone,
} from "lucide-react";
import AdminLayout from "../../components/Admin/Layout/AdminLayout"; // Adjust path based on your setup

// Dummy Stores Data
const initialStores = [
  {
    id: "STR-KOR-01",
    name: "Koramangala Hub",
    location: "Block 5, Koramangala",
    manager: "Ankit Sharma",
    phone: "+91 98765 11111",
    status: "Open",
    ordersToday: 845,
    revenueToday: "₹1.2L",
    activePartners: 42,
  },
  {
    id: "STR-HSR-02",
    name: "HSR Layout Sector 2",
    location: "27th Main Road, HSR",
    manager: "Priya Patel",
    phone: "+91 98765 22222",
    status: "High Volume",
    ordersToday: 1120,
    revenueToday: "₹1.8L",
    activePartners: 55,
  },
  {
    id: "STR-IND-01",
    name: "Indiranagar Main",
    location: "100ft Road, Indiranagar",
    manager: "Rahul Desai",
    phone: "+91 98765 33333",
    status: "Open",
    ordersToday: 630,
    revenueToday: "₹95K",
    activePartners: 30,
  },
  {
    id: "STR-WFD-03",
    name: "Whitefield Tech Park",
    location: "ITPL Main Road",
    manager: "Sneha Reddy",
    phone: "+91 98765 44444",
    status: "Closed",
    ordersToday: 0,
    revenueToday: "₹0",
    activePartners: 0,
  },
  {
    id: "STR-JP-01",
    name: "JP Nagar Phase 6",
    location: "Outer Ring Road, JP Nagar",
    manager: "Vikram Singh",
    phone: "+91 98765 55555",
    status: "Open",
    ordersToday: 410,
    revenueToday: "₹62K",
    activePartners: 25,
  },
  {
    id: "STR-BTM-02",
    name: "BTM Layout Stage 2",
    location: "Udupi Garden Road",
    manager: "Neha Gupta",
    phone: "+91 98765 66666",
    status: "High Volume",
    ordersToday: 950,
    revenueToday: "₹1.4L",
    activePartners: 48,
  },
];

const Stores = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Status Badge Logic
  const getStatusBadge = (status) => {
    switch (status) {
      case "Open":
        return (
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center w-max gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>{" "}
            Open
          </span>
        );
      case "High Volume":
        return (
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-50 text-amber-600 border border-amber-200 flex items-center w-max gap-1.5">
            <Activity className="w-3 h-3" /> High Volume
          </span>
        );
      case "Closed":
        return (
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 border border-gray-200 flex items-center w-max gap-1.5">
            <Power className="w-3 h-3" /> Offline
          </span>
        );
      default:
        return null;
    }
  };

  // Filter Logic
  const filteredStores = initialStores.filter((store) => {
    const matchesSearch =
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      store.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || store.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dark Stores</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage fulfillment centers and monitor local performance.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <Map className="w-4 h-4" />
            Map View
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
            Add Store
          </button>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Store className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">
            Total Active Stores
          </p>
          <div className="flex items-end gap-2">
            <h4 className="text-2xl font-bold text-gray-900">24</h4>
            <span className="text-sm text-gray-500 mb-1">/ 25 total</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm border-l-4 border-l-amber-400">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <Activity className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">
            High Volume Stores
          </p>
          <h4 className="text-2xl font-bold text-gray-900">8</h4>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">
            Network Orders Today
          </p>
          <h4 className="text-2xl font-bold text-gray-900">14,280</h4>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm font-medium text-gray-500 mb-1">
            Active Fleet Partners
          </p>
          <h4 className="text-2xl font-bold text-gray-900">842</h4>
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
              placeholder="Search by store name, location, or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
            />
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-1 min-w-max">
              {["All", "Open", "High Volume", "Closed"].map((status) => (
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

        {/* Stores Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-50/50 text-gray-500 text-sm border-b border-gray-100">
                <th className="px-6 py-4 font-medium">Store Name & Location</th>
                <th className="px-6 py-4 font-medium">Store Manager</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Today's Orders</th>
                <th className="px-6 py-4 font-medium">Active Fleet</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredStores.length > 0 ? (
                filteredStores.map((store, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50/80 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 text-sm">
                          {store.name}
                        </span>
                        <div className="flex items-center gap-1.5 text-gray-500 mt-1">
                          <MapPin className="w-3 h-3" />
                          <span className="text-xs">{store.location}</span>
                          <span className="text-xs text-gray-300 ml-1">|</span>
                          <span className="text-xs font-mono text-gray-400 ml-1">
                            {store.id}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold border border-blue-200">
                          {store.manager
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-900 text-sm">
                            {store.manager}
                          </span>
                          <span className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                            <Phone className="w-3 h-3" /> {store.phone}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(store.status)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 text-sm">
                          {store.ordersToday}{" "}
                          <span className="text-xs font-normal text-gray-500">
                            orders
                          </span>
                        </span>
                        <span className="text-xs text-emerald-600 font-medium mt-0.5">
                          {store.revenueToday} revenue
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-100">
                          {store.activePartners}
                        </span>
                        <span className="text-xs text-gray-500">riders</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          Manage
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
                    <Store className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      No stores found
                    </h3>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto">
                      We couldn't find any fulfillment centers matching your
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
            Showing {filteredStores.length} entries
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

export default Stores;

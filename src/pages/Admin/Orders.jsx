import React, { useState } from "react";
import {
  Search,
  Filter,
  Eye,
  MoreVertical,
  ShoppingBag,
  Clock,
  CheckCircle2,
  Truck,
  XCircle,
  Download,
  Calendar,
} from "lucide-react";
import AdminLayout from "../../components/Admin/Layout/AdminLayout"; // Adjust path based on your setup

// Dummy Orders Data
const initialOrders = [
  {
    id: "#ORD-0921",
    customer: "Alex Johnson",
    phone: "+91 98765 43210",
    items: 5,
    amount: 1240,
    date: "Today, 04:45 PM",
    status: "Processing",
    payment: "Paid",
  },
  {
    id: "#ORD-0920",
    customer: "Maria Garcia",
    phone: "+91 98765 43211",
    items: 2,
    amount: 850,
    date: "Today, 04:30 PM",
    status: "Out for Delivery",
    payment: "COD",
  },
  {
    id: "#ORD-0919",
    customer: "James Smith",
    phone: "+91 98765 43212",
    items: 12,
    amount: 3100,
    date: "Today, 03:15 PM",
    status: "Delivered",
    payment: "Paid",
  },
  {
    id: "#ORD-0918",
    customer: "Priya Sharma",
    phone: "+91 98765 43213",
    items: 1,
    amount: 450,
    date: "Today, 01:20 PM",
    status: "Delivered",
    payment: "Paid",
  },
  {
    id: "#ORD-0917",
    customer: "Robert Chen",
    phone: "+91 98765 43214",
    items: 8,
    amount: 2100,
    date: "Today, 11:10 AM",
    status: "Cancelled",
    payment: "Refunded",
  },
  {
    id: "#ORD-0916",
    customer: "Anita Desai",
    phone: "+91 98765 43215",
    items: 4,
    amount: 620,
    date: "Yesterday, 08:30 PM",
    status: "Delivered",
    payment: "COD",
  },
  {
    id: "#ORD-0915",
    customer: "Vikram Singh",
    phone: "+91 98765 43216",
    items: 3,
    amount: 890,
    date: "Yesterday, 07:15 PM",
    status: "Pending",
    payment: "Failed",
  },
];

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Order Status Badge Logic
  const getStatusBadge = (status) => {
    const styles = {
      Pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
      Processing: "bg-blue-50 text-blue-700 border-blue-200",
      "Out for Delivery": "bg-purple-50 text-purple-700 border-purple-200",
      Delivered: "bg-emerald-50 text-emerald-700 border-emerald-200",
      Cancelled: "bg-red-50 text-red-700 border-red-200",
    };

    const icons = {
      Pending: <Clock className="w-3 h-3" />,
      Processing: <ShoppingBag className="w-3 h-3" />,
      "Out for Delivery": <Truck className="w-3 h-3" />,
      Delivered: <CheckCircle2 className="w-3 h-3" />,
      Cancelled: <XCircle className="w-3 h-3" />,
    };

    return (
      <span
        className={`px-2.5 py-1 text-xs font-semibold rounded-full border flex items-center gap-1.5 w-max ${styles[status]}`}
      >
        {icons[status]} {status}
      </span>
    );
  };

  // Payment Status Badge Logic
  const getPaymentBadge = (payment) => {
    const styles = {
      Paid: "bg-emerald-100 text-emerald-800",
      COD: "bg-gray-100 text-gray-800",
      Refunded: "bg-blue-100 text-blue-800",
      Failed: "bg-red-100 text-red-800",
    };
    return (
      <span
        className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${styles[payment]}`}
      >
        {payment}
      </span>
    );
  };

  // Filter Logic
  const filteredOrders = initialOrders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage and track customer orders in real-time.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <Calendar className="w-4 h-4" />
            Select Date
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: "Total Orders",
            value: "1,240",
            subtitle: "+12% from yesterday",
            color: "blue",
          },
          {
            title: "Processing",
            value: "45",
            subtitle: "Requires attention",
            color: "amber",
          },
          {
            title: "Out for Delivery",
            value: "28",
            subtitle: "Currently in transit",
            color: "purple",
          },
          {
            title: "Delivered Today",
            value: "312",
            subtitle: "Successfully fulfilled",
            color: "emerald",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
          >
            <p className="text-sm font-medium text-gray-500 mb-1">
              {stat.title}
            </p>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">
              {stat.value}
            </h4>
            <span
              className={`text-xs font-medium text-${stat.color}-600 bg-${stat.color}-50 px-2 py-1 rounded-md`}
            >
              {stat.subtitle}
            </span>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Filters & Search */}
        <div className="p-4 sm:px-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Order ID or Customer Name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm transition-all"
            />
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg p-1 min-w-max">
              {[
                "All",
                "Processing",
                "Out for Delivery",
                "Delivered",
                "Cancelled",
              ].map((status) => (
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

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-gray-50/50 text-gray-500 text-sm border-b border-gray-100">
                <th className="px-6 py-4 font-medium">Order ID & Date</th>
                <th className="px-6 py-4 font-medium">Customer Info</th>
                <th className="px-6 py-4 font-medium text-center">Items</th>
                <th className="px-6 py-4 font-medium">Total Amount</th>
                <th className="px-6 py-4 font-medium">Order Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50/80 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 hover:text-emerald-600 cursor-pointer transition-colors">
                          {order.id}
                        </span>
                        <span className="text-xs text-gray-500 mt-0.5">
                          {order.date}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold border border-emerald-200">
                          {order.customer
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-900 text-sm">
                            {order.customer}
                          </span>
                          <span className="text-xs text-gray-500 mt-0.5">
                            {order.phone}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-700 text-xs font-bold">
                        {order.items}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col items-start gap-1">
                        <span className="font-bold text-gray-900 text-sm">
                          ₹{order.amount}
                        </span>
                        {getPaymentBadge(order.payment)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(order.status)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="px-3 py-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg hover:bg-emerald-100 transition-colors">
                          Update
                        </button>
                        <button
                          className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Eye className="w-4 h-4" />
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
                    <ShoppingBag className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      No orders found
                    </h3>
                    <p className="text-gray-500 text-sm max-w-sm mx-auto">
                      We couldn't find any orders matching your search or
                      filters.
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
            Showing {filteredOrders.length} entries
          </span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 border border-gray-200 text-gray-600 rounded-md hover:bg-gray-50 disabled:opacity-50">
              Previous
            </button>
            <button className="px-3 py-1.5 bg-emerald-600 text-white font-medium rounded-md">
              1
            </button>
            <button className="px-3 py-1.5 border border-gray-200 text-gray-600 rounded-md hover:bg-gray-50">
              2
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

export default Orders;

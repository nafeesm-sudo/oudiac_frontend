import React from "react";
import { MoreHorizontal } from "lucide-react";

const orders = [
  {
    id: "#ORD-0921",
    customer: "Alex Johnson",
    date: "Just now",
    amount: "₹1,240",
    status: "Processing",
  },
  {
    id: "#ORD-0920",
    customer: "Maria Garcia",
    date: "10 mins ago",
    amount: "₹850",
    status: "On the way",
  },
  {
    id: "#ORD-0919",
    customer: "James Smith",
    date: "1 hour ago",
    amount: "₹3,100",
    status: "Delivered",
  },
  {
    id: "#ORD-0918",
    customer: "Priya Sharma",
    date: "2 hours ago",
    amount: "₹450",
    status: "Delivered",
  },
  {
    id: "#ORD-0917",
    customer: "Robert Chen",
    date: "3 hours ago",
    amount: "₹2,100",
    status: "Cancelled",
  },
];

const getStatusBadge = (status) => {
  const styles = {
    Processing: "bg-blue-50 text-blue-600 border-blue-200",
    "On the way": "bg-amber-50 text-amber-600 border-amber-200",
    Delivered: "bg-emerald-50 text-emerald-600 border-emerald-200",
    Cancelled: "bg-red-50 text-red-600 border-red-200",
  };
  return (
    <span
      className={`px-2.5 py-1 text-xs font-medium rounded-full border ${styles[status]}`}
    >
      {status}
    </span>
  );
};

const RecentOrders = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-800">Recent Orders</h3>
        <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50 text-gray-500 text-sm">
              <th className="px-6 py-4 font-medium">Order ID</th>
              <th className="px-6 py-4 font-medium">Customer</th>
              <th className="px-6 py-4 font-medium">Date</th>
              <th className="px-6 py-4 font-medium">Amount</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50/50 transition-colors group"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                <td className="px-6 py-4 text-gray-500 text-sm">
                  {order.date}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900">
                  {order.amount}
                </td>
                <td className="px-6 py-4">{getStatusBadge(order.status)}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;

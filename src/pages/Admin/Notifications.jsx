import React, { useState } from "react";
import {
  Bell,
  Package,
  AlertTriangle,
  Info,
  CheckCircle,
  Clock,
  CheckCheck,
  Trash2,
  Filter,
  Settings,
  Bike,
  ShoppingBag,
} from "lucide-react";
import AdminLayout from "../../components/Admin/Layout/AdminLayout";

// Dummy Notifications Data
const initialNotifications = [
  {
    id: 1,
    type: "alert",
    title: "Low Stock Alert",
    message:
      "Amul Taaza Toned Milk is running low in Koramangala Hub (Only 12 left).",
    time: "10 mins ago",
    isRead: false,
  },
  {
    id: 2,
    type: "order",
    title: "Large Order Received",
    message:
      "Order #ORD-0925 received for ₹4,250. Requires immediate processing.",
    time: "25 mins ago",
    isRead: false,
  },
  {
    id: 3,
    type: "delivery",
    title: "Delivery Partner Delayed",
    message: "Ramesh Kumar is running 15 mins late for order #ORD-0920.",
    time: "1 hour ago",
    isRead: false,
  },
  {
    id: 4,
    type: "system",
    title: "System Maintenance Scheduled",
    message:
      "Routine server maintenance scheduled for May 31, 2026, at 02:00 AM IST.",
    time: "3 hours ago",
    isRead: true,
  },
  {
    id: 5,
    type: "success",
    title: "Daily Settlement Successful",
    message:
      "Yesterday's revenue of ₹1,45,200 has been settled to your primary account.",
    time: "12 hours ago",
    isRead: true,
  },
  {
    id: 6,
    type: "order",
    title: "Order Cancelled",
    message: "Customer cancelled order #ORD-0917. Refund initiated.",
    time: "Yesterday",
    isRead: true,
  },
  {
    id: 7,
    type: "alert",
    title: "Store Offline",
    message: "Whitefield Tech Park store went offline unexpectedly.",
    time: "Yesterday",
    isRead: true,
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeTab, setActiveTab] = useState("All");

  // Utility to get icons and colors based on notification type
  const getNotificationStyle = (type) => {
    switch (type) {
      case "alert":
        return {
          icon: <AlertTriangle className="w-5 h-5" />,
          color: "text-red-600",
          bg: "bg-red-50",
          border: "border-red-100",
        };
      case "order":
        return {
          icon: <ShoppingBag className="w-5 h-5" />,
          color: "text-blue-600",
          bg: "bg-blue-50",
          border: "border-blue-100",
        };
      case "delivery":
        return {
          icon: <Bike className="w-5 h-5" />,
          color: "text-purple-600",
          bg: "bg-purple-50",
          border: "border-purple-100",
        };
      case "success":
        return {
          icon: <CheckCircle className="w-5 h-5" />,
          color: "text-emerald-600",
          bg: "bg-emerald-50",
          border: "border-emerald-100",
        };
      case "system":
        return {
          icon: <Info className="w-5 h-5" />,
          color: "text-gray-600",
          bg: "bg-gray-100",
          border: "border-gray-200",
        };
      default:
        return {
          icon: <Bell className="w-5 h-5" />,
          color: "text-gray-600",
          bg: "bg-gray-100",
          border: "border-gray-200",
        };
    }
  };

  // Actions
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif,
      ),
    );
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notif) => ({ ...notif, isRead: true })),
    );
  };

  // Filtering
  const filteredNotifications = notifications.filter((notif) => {
    if (activeTab === "All") return true;
    if (activeTab === "Unread") return !notif.isRead;
    return notif.type === activeTab.toLowerCase();
  });

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
            {unreadCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                {unreadCount} New
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Stay updated with system alerts, orders, and inventory warnings.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <CheckCheck className="w-4 h-4 text-emerald-600" />
            Mark all as read
          </button>
          <button
            className="p-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            title="Notification Settings"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col min-h-[600px]">
        {/* Tabs & Filters */}
        <div className="p-4 sm:px-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm font-medium overflow-x-auto scrollbar-hide">
            {["All", "Unread", "Alert", "Order", "Delivery", "System"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 relative whitespace-nowrap ${
                    activeTab === tab
                      ? "text-emerald-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 rounded-t-full"></span>
                  )}
                </button>
              ),
            )}
          </div>
          <button className="flex items-center gap-2 p-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:block">Filter</span>
          </button>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto bg-gray-50/30">
          {filteredNotifications.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {filteredNotifications.map((notif) => {
                const style = getNotificationStyle(notif.type);
                return (
                  <div
                    key={notif.id}
                    className={`p-4 sm:px-6 flex gap-4 transition-colors group relative ${notif.isRead ? "bg-white hover:bg-gray-50" : "bg-emerald-50/30 hover:bg-emerald-50/50"}`}
                  >
                    {/* Unread Indicator */}
                    {!notif.isRead && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 rounded-r-full"></div>
                    )}

                    {/* Icon */}
                    <div
                      className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center border shrink-0 ${style.bg} ${style.color} ${style.border}`}
                    >
                      {style.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1">
                        <h4
                          className={`text-sm font-bold truncate ${notif.isRead ? "text-gray-700" : "text-gray-900"}`}
                        >
                          {notif.title}
                        </h4>
                        <span className="text-xs font-medium text-gray-400 whitespace-nowrap flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {notif.time}
                        </span>
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${notif.isRead ? "text-gray-500" : "text-gray-700 font-medium"}`}
                      >
                        {notif.message}
                      </p>
                    </div>

                    {/* Actions (Hover) */}
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      {!notif.isRead && (
                        <button
                          onClick={() => markAsRead(notif.id)}
                          className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                          title="Mark as read"
                        >
                          <CheckCheck className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notif.id)}
                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Bell className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                All caught up!
              </h3>
              <p className="text-gray-500 text-sm max-w-sm">
                You don't have any{" "}
                {activeTab !== "All" ? activeTab.toLowerCase() : ""}{" "}
                notifications at the moment.
              </p>
            </div>
          )}
        </div>

        {/* Footer (Pagination Dummy) */}
        {filteredNotifications.length > 0 && (
          <div className="p-4 border-t border-gray-100 bg-white text-center">
            <button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors">
              Load older notifications
            </button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Notifications;

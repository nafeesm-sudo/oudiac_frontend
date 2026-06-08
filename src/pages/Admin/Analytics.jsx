import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import {
  Calendar,
  Download,
  IndianRupee,
  ShoppingBag,
  TrendingUp,
  MousePointerClick,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import AdminLayout from "../../components/Admin/Layout/AdminLayout";

// --- Dummy Data ---
const revenueData = [
  { name: "Mon", revenue: 45000, orders: 120 },
  { name: "Tue", revenue: 52000, orders: 145 },
  { name: "Wed", revenue: 48000, orders: 130 },
  { name: "Thu", revenue: 61000, orders: 170 },
  { name: "Fri", revenue: 85000, orders: 240 },
  { name: "Sat", revenue: 110000, orders: 310 },
  { name: "Sun", revenue: 95000, orders: 280 },
];

const categoryData = [
  { name: "Dairy & Bread", value: 35 },
  { name: "Vegetables", value: 25 },
  { name: "Snacks", value: 20 },
  { name: "Beverages", value: 15 },
  { name: "Meat", value: 5 },
];
const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#8b5cf6", "#ef4444"];

const timeData = [
  { time: "6AM-10AM", orders: 180 },
  { time: "10AM-2PM", orders: 250 },
  { time: "2PM-6PM", orders: 210 },
  { time: "6PM-10PM", orders: 380 },
  { time: "10PM-2AM", orders: 90 },
];

const topProducts = [
  {
    id: 1,
    name: "Amul Taaza Toned Milk",
    category: "Dairy",
    sold: 1245,
    revenue: 89640,
    trend: "up",
  },
  {
    id: 2,
    name: "Fresho Onion - Medium",
    category: "Vegetables",
    sold: 980,
    revenue: 31360,
    trend: "up",
  },
  {
    id: 3,
    name: "Farmley Premium Almonds",
    category: "Snacks",
    sold: 450,
    revenue: 189000,
    trend: "down",
  },
  {
    id: 4,
    name: "Coca-Cola Soft Drink",
    category: "Beverages",
    sold: 820,
    revenue: 32800,
    trend: "up",
  },
];

const Analytics = () => {
  const [dateRange, setDateRange] = useState("Last 7 Days");

  // Helper for KPI Cards
  const StatCard = ({ title, value, icon: Icon, trend, trendValue, color }) => {
    const isPositive = trend === "up";
    return (
      <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-${color}-50 text-${color}-600`}>
            <Icon className="w-6 h-6" />
          </div>
          <span
            className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? "text-emerald-600" : "text-red-600"}`}
          >
            {isPositive ? (
              <ArrowUpRight className="w-4 h-4" />
            ) : (
              <ArrowDownRight className="w-4 h-4" />
            )}
            {trendValue}%
          </span>
        </div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
      </div>
    );
  };

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Analytics Overview
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Track store performance, revenue, and customer behavior.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* Date Picker Dummy */}
          <div className="relative">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="appearance-none pl-10 pr-8 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option>Today</option>
              <option>Yesterday</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Month</option>
            </select>
            <Calendar className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm">
            <Download className="w-4 h-4" />
            Report
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value="₹4,96,000"
          icon={IndianRupee}
          trend="up"
          trendValue="15.2"
          color="emerald"
        />
        <StatCard
          title="Total Orders"
          value="1,395"
          icon={ShoppingBag}
          trend="up"
          trendValue="8.4"
          color="blue"
        />
        <StatCard
          title="Average Order Value"
          value="₹355"
          icon={TrendingUp}
          trend="down"
          trendValue="2.1"
          color="amber"
        />
        <StatCard
          title="Conversion Rate"
          value="4.8%"
          icon={MousePointerClick}
          trend="up"
          trendValue="1.2"
          color="purple"
        />
      </div>

      {/* Main Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Area Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">
              Revenue & Orders
            </h3>
            <span className="text-sm text-gray-500 font-medium">
              Last 7 Days
            </span>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f3f4f6"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                />
                <YAxis
                  yAxisId="left"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                  tickFormatter={(val) => `₹${val / 1000}k`}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                />
                <RechartsTooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                  formatter={(value, name) => [
                    name === "revenue" ? `₹${value}` : value,
                    name === "revenue" ? "Revenue" : "Orders",
                  ]}
                />
                <Area
                  yAxisId="left"
                  type="monotone"
                  dataKey="revenue"
                  stroke="#10b981"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sales by Category Pie Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm lg:col-span-1">
          <h3 className="text-lg font-bold text-gray-800 mb-6">
            Sales by Category
          </h3>
          <div className="h-[240px] w-full flex justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <RechartsTooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: "12px" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Secondary Charts & Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Peak Order Times Bar Chart */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-6">
            Peak Order Times
          </h3>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={timeData}
                margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f3f4f6"
                />
                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#6b7280", fontSize: 12 }}
                />
                <RechartsTooltip
                  cursor={{ fill: "#f3f4f6" }}
                  contentStyle={{ borderRadius: "8px", border: "none" }}
                />
                <Bar
                  dataKey="orders"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Selling Products Table */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">
              Top Selling Products
            </h3>
            <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-gray-500 border-b border-gray-100">
                  <th className="pb-3 font-medium">Product</th>
                  <th className="pb-3 font-medium">Sold</th>
                  <th className="pb-3 font-medium text-right">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {topProducts.map((product) => (
                  <tr
                    key={product.id}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-3">
                      <p className="text-sm font-bold text-gray-900 line-clamp-1">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {product.category}
                      </p>
                    </td>
                    <td className="py-3 text-sm text-gray-700 font-medium">
                      {product.sold}
                    </td>
                    <td className="py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-sm font-bold text-gray-900">
                          ₹{product.revenue.toLocaleString()}
                        </span>
                        {product.trend === "up" ? (
                          <TrendingUp className="w-4 h-4 text-emerald-500" />
                        ) : (
                          <TrendingUp className="w-4 h-4 text-red-500 transform rotate-180" />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Analytics;

import React from "react";

const StatsCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
  colorClass,
}) => {
  const isPositive = trend === "up";

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <h4 className="text-2xl font-bold text-gray-900">{value}</h4>
        </div>
        <div className={`p-3 rounded-xl ${colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm">
        <span
          className={`font-medium ${isPositive ? "text-emerald-600" : "text-red-600"}`}
        >
          {isPositive ? "+" : "-"}
          {trendValue}%
        </span>
        <span className="text-gray-500">vs last month</span>
      </div>
    </div>
  );
};

export default StatsCard;

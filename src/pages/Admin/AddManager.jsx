import React, { useState } from "react";
import Api from "../API/Api";
import { ArrowDownToLine, Save, UserPlus } from "lucide-react";
import AdminLayout from "../../components/Admin/Layout/AdminLayout";
import { useNavigate } from "react-router-dom";

const AddManager = () => {
  const navigate = useNavigate();

  const [managerFormData, setManagerFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const handleSave = async () => {
    console.log("Saving new manager:", managerFormData);
    try {
      const response = await Api.post(
        "/admin/oudiac/register-manager",
        managerFormData,
      );

      console.log(response.data);
      alert("Manager added successfully!");
      navigate("/admin/managers");
    } catch (error) {
      console.error(error);
      alert("Failed to save manager.");
    }
  };

  return (
    <AdminLayout>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Managers</h1>
          <p className="text-sm text-gray-500 mt-1">
            View and manage your registered managers.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm"
          >
            <Save className="w-4 h-4" />
            Save Manager
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <h2 className="text-lg font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
          Add New Store Manager
        </h2>

        <div className="space-y-6 max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                onChange={(e) =>
                  setManagerFormData({
                    ...managerFormData,
                    name: e.target.value,
                  })
                }
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                onChange={(e) =>
                  setManagerFormData({
                    ...managerFormData,
                    email: e.target.value,
                  })
                }
                placeholder="support@quickmart.com"
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Mobile Number
              </label>
              <input
                type="text"
                onChange={(e) =>
                  setManagerFormData({
                    ...managerFormData,
                    mobileNumber: e.target.value,
                  })
                }
                placeholder="+91 1800 123 4567"
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                onChange={(e) =>
                  setManagerFormData({
                    ...managerFormData,
                    password: e.target.value,
                  })
                }
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
export default AddManager;

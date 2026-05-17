import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  UploadCloud,
  Image as ImageIcon,
  X,
  Save,
} from "lucide-react";
import AdminLayout from "../../components/Admin/Layout/AdminLayout";

const AddProduct = () => {
  const navigate = useNavigate();

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    mrp: "",
    sku: "",
    stock: "",
    category: "",
    status: "draft",
  });

  // Dummy Image State for UI demonstration
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Dummy image upload handler
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      // In a real app, you would upload to a server/S3 here
      const newImages = files.map((file) => URL.createObjectURL(file));
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  const removeImage = (indexToRemove) => {
    setImages((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data Submitted:", { ...formData, images });
    // Add API call here
    alert("Product saved successfully!");
    navigate("/");
  };

  return (
    <AdminLayout>
      <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                Add New Product
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Create a new product for your stores.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/admin")}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Discard
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2 text-sm font-bold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-sm shadow-emerald-600/20 transition-colors"
            >
              <Save className="w-4 h-4" />
              Save Product
            </button>
          </div>
        </div>

        {/* Main Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Primary Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* General Info Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                General Information
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Amul Taaza Toned Milk"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Write a brief description about the product..."
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm resize-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Pricing</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Selling Price (₹)
                  </label>
                  <input
                    type="number"
                    name="price"
                    required
                    min="0"
                    step="0.01"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    MRP (₹)
                  </label>
                  <input
                    type="number"
                    name="mrp"
                    min="0"
                    step="0.01"
                    value={formData.mrp}
                    onChange={handleChange}
                    placeholder="0.00"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Inventory Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Inventory
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    SKU (Stock Keeping Unit)
                  </label>
                  <input
                    type="text"
                    name="sku"
                    value={formData.sku}
                    onChange={handleChange}
                    placeholder="e.g., MILK-AMUL-1L"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm uppercase"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Quantity in Stock
                  </label>
                  <input
                    type="number"
                    name="stock"
                    required
                    min="0"
                    value={formData.stock}
                    onChange={handleChange}
                    placeholder="0"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Organization & Media */}
          <div className="lg:col-span-1 space-y-6">
            {/* Product Media Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Product Media
              </h2>

              {/* Upload Box */}
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer relative group">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <UploadCloud className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-sm font-medium text-emerald-600 mb-1">
                  Click to upload images
                </p>
                <p className="text-xs text-gray-500">
                  SVG, PNG, JPG or GIF (max. 5MB)
                </p>
              </div>

              {/* Image Previews */}
              {images.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {images.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 group"
                    >
                      <img
                        src={img}
                        alt={`Preview ${idx}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(idx)}
                        className="absolute top-1 right-1 p-1 bg-white/90 hover:bg-red-50 text-gray-600 hover:text-red-600 rounded-md opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Organization Card */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h2 className="text-lg font-bold text-gray-800 mb-4">
                Organization
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Category
                  </label>
                  <select
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors text-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    <option value="dairy">Dairy & Bread</option>
                    <option value="vegetables">Vegetables & Fruits</option>
                    <option value="snacks">Snacks & Munchies</option>
                    <option value="beverages">Beverages</option>
                    <option value="meat">Meat & Fish</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Product Status
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        value="published"
                        checked={formData.status === "published"}
                        onChange={handleChange}
                        className="text-emerald-600 focus:ring-emerald-500"
                      />
                      <span className="text-sm text-gray-700">Published</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="status"
                        value="draft"
                        checked={formData.status === "draft"}
                        onChange={handleChange}
                        className="text-gray-600 focus:ring-gray-500"
                      />
                      <span className="text-sm text-gray-700">Draft</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </AdminLayout>
  );
};

export default AddProduct;

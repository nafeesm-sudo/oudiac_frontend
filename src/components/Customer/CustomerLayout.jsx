import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  User,
  Store,
  X,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import { useCart } from "./CartContext";

const CustomerLayout = ({ children }) => {
  const navigate = useNavigate();
  const {
    totalItems,
    cartTotal,
    setIsCartOpen,
    isCartOpen,
    cartItems,
    updateQuantity,
  } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim())
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-emerald-600 font-bold text-2xl cursor-pointer"
          >
            <Store className="w-7 h-7" /> QuickMart
          </div>

          <form
            onSubmit={handleSearch}
            className="flex-1 max-w-2xl hidden md:flex relative"
          >
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </form>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/profile")}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <User className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-emerald-700"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && <span>{totalItems} items</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setIsCartOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-gray-50 z-50 transform transition-transform ${isCartOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}
      >
        <div className="bg-white p-4 flex items-center justify-between border-b border-gray-100">
          <h2 className="font-bold text-lg">My Cart</h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">Cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-3 rounded-xl shadow-sm flex items-center gap-3"
              >
                <img
                  src={item.image}
                  className="w-12 h-12 object-contain"
                  alt=""
                />
                <div className="flex-1">
                  <h4 className="text-sm font-bold line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="font-bold text-gray-900 mt-1">₹{item.price}</p>
                </div>
                <div className="flex items-center bg-emerald-600 text-white rounded-lg p-0.5">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-1"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-6 text-center text-sm font-bold">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-1"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="bg-white p-4 border-t border-gray-100">
            <button
              onClick={() => {
                setIsCartOpen(false);
                navigate("/checkout");
              }}
              className="w-full bg-emerald-600 text-white rounded-xl p-4 flex items-center justify-between font-bold"
            >
              <span>
                ₹{cartTotal + 15}{" "}
                <span className="text-xs font-normal opacity-80">
                  (incl. fee)
                </span>
              </span>
              <span className="flex items-center gap-1">
                Checkout <ChevronRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        )}
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};

export default CustomerLayout;

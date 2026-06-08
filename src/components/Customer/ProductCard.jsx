import React from "react";
import { Plus, Minus } from "lucide-react";
import { useCart } from "./CartContext";
// import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { cartItems, addToCart, updateQuantity } = useCart();
  const quantity =
    cartItems.find((item) => item.id === product.id)?.quantity || 0;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="relative aspect-square mb-4 bg-gray-50 rounded-xl overflow-hidden p-4 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="object-contain w-full h-full mix-blend-multiply"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <span className="text-xs font-semibold text-gray-500 mb-1">
          {product.weight}
        </span>
        <h3 className="text-sm font-bold text-gray-800 leading-tight mb-3 line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-auto flex items-center justify-between">
          <div>
            {product.mrp > product.price && (
              <span className="text-xs text-gray-400 line-through block">
                ₹{product.mrp}
              </span>
            )}
            <span className="text-lg font-bold text-gray-900">
              ₹{product.price}
            </span>
          </div>
          {quantity === 0 ? (
            <button
              onClick={() => addToCart(product)}
              className="bg-emerald-50 text-emerald-600 border border-emerald-200 hover:bg-emerald-100 px-4 py-1.5 rounded-lg text-sm font-bold transition-colors"
            >
              ADD
            </button>
          ) : (
            <div className="flex items-center bg-emerald-600 text-white rounded-lg p-0.5">
              <button
                onClick={() => updateQuantity(product.id, -1)}
                className="p-1.5 hover:bg-emerald-700 rounded-md"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-6 text-center text-sm font-bold">
                {quantity}
              </span>
              <button
                onClick={() => updateQuantity(product.id, 1)}
                className="p-1.5 hover:bg-emerald-700 rounded-md"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

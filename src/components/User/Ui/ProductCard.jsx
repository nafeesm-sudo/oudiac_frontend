import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group cursor-pointer flex flex-col h-full bg-zinc-900/50 border border-zinc-800/50 hover:border-amber-600/30 transition-colors duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-zinc-100 text-zinc-950 text-xs font-bold px-2 py-1 uppercase tracking-wider">
              New
            </span>
          )}
          {product.tag && (
            <span className="bg-amber-600 text-zinc-950 text-xs font-bold px-2 py-1 uppercase tracking-wider">
              {product.tag}
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 z-10 p-2 text-zinc-400 hover:text-amber-500 transition-colors">
          <Heart className="w-5 h-5" />
        </button>

        {/* Product Images */}
        <img
          src={product.image1}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? "opacity-0" : "opacity-100"}`}
        />
        <img
          src={product.image2}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />

        {/* Quick Add Overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-zinc-950/90 to-transparent`}
        >
          <button className="w-full bg-amber-600 text-zinc-950 py-3 text-sm tracking-widest uppercase font-semibold hover:bg-amber-500 transition-colors flex items-center justify-center gap-2">
            <ShoppingBag className="w-4 h-4" /> Add to Cart
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col flex-grow text-center">
        <span className="text-amber-600/80 text-xs uppercase tracking-[0.2em] mb-2">
          {product.brand}
        </span>
        <h3 className="text-zinc-100 text-lg font-medium mb-2 tracking-wide line-clamp-1">
          {product.name}
        </h3>

        <div className="flex items-center justify-center gap-1 mb-3 text-zinc-400">
          <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
          <span className="text-sm">{product.rating}</span>
          <span className="text-xs">({product.reviews})</span>
        </div>

        <div className="mt-auto flex items-center justify-center gap-3">
          <span className="text-amber-500 font-semibold text-lg">
            {formatPrice(product.price)}
          </span>
          {product.mrp > product.price && (
            <span className="text-zinc-500 line-through text-sm">
              {formatPrice(product.mrp)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;

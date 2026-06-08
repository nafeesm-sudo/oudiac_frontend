import React, { useState } from "react";
import { Star } from "lucide-react";

// Product data extracted from the image
const bestsellersData = [
  {
    id: 1,
    badge: "#1 Best Seller",
    badgeType: "primary",
    category: "FRUITY",
    title: "WISAL DHAHAB",
    rating: 4.84,
    reviews: 72,
    discount: "20% Off",
    price: 3200,
    originalPrice: 4000,
    // Using a placeholder image that matches the gold/yellow aesthetic
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47714263f?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    badge: "BEST SELLER",
    badgeType: "secondary",
    category: "CITRUS",
    title: "ARISTOCRAT",
    rating: 4.85,
    reviews: 99,
    discount: "20% Off",
    price: 4000,
    originalPrice: 5000,
    // Brown rectangular placeholder
    image:
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    badge: "BEST SELLER",
    badgeType: "secondary",
    category: "AQUATIC",
    title: "BLU",
    rating: 4.85,
    reviews: 80,
    discount: "20% Off",
    price: 2400,
    originalPrice: 3000,
    // Blue rectangular placeholder
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 4,
    badge: "BEST SELLER",
    badgeType: "secondary",
    category: "SPICY",
    title: "KURO Perfume for Men",
    rating: 4.48,
    reviews: 54,
    discount: "20% Off",
    price: 2400,
    originalPrice: 3000,
    // Grey/Black placeholder
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 5,
    badge: "BEST SELLER",
    badgeType: "secondary",
    category: "FRUITY",
    title: "WISAL-LAYL Perfume for Unisex",
    rating: 4.8,
    reviews: 58,
    discount: "30% Off",
    price: 3500,
    originalPrice: 5000,
    // Black ornate placeholder
    image:
      "https://images.unsplash.com/photo-1615486171448-4fd32a35fc43?auto=format&fit=crop&q=80&w=400",
  },
];

const tabs = ["HIM", "HER", "ATTAR", "GIFTING"];

const Bestsellers = () => {
  const [activeTab, setActiveTab] = useState("HIM");

  // Helper to format currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-12 bg-white max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
        {/* Title */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-serif text-gray-900 uppercase tracking-wide">
            Our Bestsellers
          </h2>
          {/* Custom curved underline matching the design */}
          <div className="h-0.5 w-24 bg-[#c89856] mt-2 rounded-full" />
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-6 md:gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm md:text-base font-medium tracking-wide transition-colors ${
                activeTab === tab
                  ? "text-[#c89856]"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* View More Button */}
        <button className="hidden md:block px-6 py-2 border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-50 transition-colors">
          View More
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {bestsellersData.map((product) => (
          <div
            key={product.id}
            className="flex flex-col group cursor-pointer relative"
          >
            {/* Ribbon/Badge */}
            <div
              className={`absolute top-0 left-0 z-10 px-2 py-1 text-[10px] font-bold text-white uppercase tracking-wider ${
                product.badgeType === "primary"
                  ? "bg-[#b87d3b] w-14 text-center pb-3" // Taller badge for #1
                  : "bg-[#c89856]"
              }`}
            >
              {/* If it's the #1 seller, we add a little CSS trick to make it look like a ribbon tail */}
              {product.badgeType === "primary" ? (
                <div className="relative">
                  {product.badge}
                  <div
                    className="absolute -bottom-4 left-0 w-full h-2 bg-[#b87d3b]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                  ></div>
                </div>
              ) : (
                product.badge
              )}
            </div>

            {/* Image Container */}
            <div className="relative aspect-[4/5] bg-gray-50 flex items-center justify-center p-6 mb-4 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col flex-1 px-1">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium mb-1">
                {product.category}
              </span>
              <h3 className="text-sm font-bold text-gray-900 leading-tight mb-2 h-10 line-clamp-2">
                {product.title}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <Star className="w-3.5 h-3.5 fill-[#c89856] text-[#c89856]" />
                <span className="text-xs font-bold text-gray-900">
                  {product.rating}
                </span>
                <span className="text-xs text-gray-500">
                  ({product.reviews} Reviews)
                </span>
              </div>

              {/* Pricing */}
              <div className="mt-auto flex flex-col mb-4">
                <span className="text-xs font-bold text-green-600 mb-0.5">
                  {product.discount}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-black text-white py-3 text-xs font-bold tracking-widest hover:bg-gray-800 transition-colors uppercase">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View More Button */}
      <div className="mt-8 flex justify-center md:hidden">
        <button className="px-8 py-2.5 border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto">
          View More
        </button>
      </div>
    </section>
  );
};

export default Bestsellers;

import React from "react";
import { motion } from "framer-motion";
import LuxuryButton from "../Ui/LuxuryButton";
import ProductCard from "../Ui/ProductCard";
// import ProductCard from "../../ui/ProductCard";
// import LuxuryButton from "../../ui/LuxuryButton";
import { products } from "../Data/dummyData";

const BestSellers = () => {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-amber-600/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-amber-600 tracking-[0.2em] uppercase text-xs font-semibold mb-4 block"
          >
            Curated Selection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif text-zinc-100 tracking-wide"
          >
            Our Masterpieces
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center flex justify-center">
          <LuxuryButton
            variant="outline"
            className="border-zinc-800 text-zinc-300 hover:border-amber-600"
          >
            View All Fragrances
          </LuxuryButton>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;

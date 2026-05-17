import React from "react";
import { motion } from "framer-motion";
import LuxuryButton from "../Ui/LuxuryButton";
// import LuxuryButton from "../../ui/LuxuryButton";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1615486171448-4fd32a35fc43?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Perfume"
          className="w-full h-full object-cover object-center scale-105 transform hover:scale-100 transition-transform duration-[10s] ease-out"
        />
        <div className="absolute inset-0 bg-zinc-950/60 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-zinc-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-amber-500 tracking-[0.3em] uppercase text-sm md:text-base mb-6 block"
        >
          The Royal Collection
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 tracking-wide leading-tight"
        >
          Essence of <br className="md:hidden" />
          <span className="italic text-amber-50/90">Pure Elegance</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-zinc-300 max-w-lg mx-auto mb-10 text-sm md:text-base leading-relaxed"
        >
          Discover our new signature scent, crafted with the rarest oud and
          delicate damask rose. A masterpiece of modern perfumery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <LuxuryButton variant="primary">Shop Collection</LuxuryButton>
          <LuxuryButton variant="outline">Discover Story</LuxuryButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

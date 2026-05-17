import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Heart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-amber-600 text-zinc-950 py-2 px-4 text-center text-xs tracking-widest uppercase font-medium">
        Complimentary shipping on orders over ₹5,000 | Free samples with every
        order
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-4 top-0" : "bg-transparent py-6 top-[32px]"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-zinc-100"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Links (Left) */}
          <div className="hidden lg:flex items-center gap-8 text-sm uppercase tracking-[0.15em] text-zinc-300">
            <a href="#" className="hover:text-amber-500 transition-colors">
              New
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Perfumes
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Gifts
            </a>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center">
            <a
              href="/"
              className="text-2xl md:text-3xl font-serif text-zinc-100 tracking-[0.2em] uppercase flex flex-col items-center"
            >
              LUXE
              <span className="text-[10px] tracking-[0.4em] text-amber-500 mt-1">
                Parfums
              </span>
            </a>
          </div>

          {/* Icons (Right) */}
          <div className="flex items-center gap-4 md:gap-6 text-zinc-100">
            <button className="hover:text-amber-500 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:block hover:text-amber-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="hover:text-amber-500 transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-amber-600 text-zinc-950 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-zinc-950 md:hidden flex flex-col"
          >
            <div className="p-6 flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-100"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow gap-8 text-xl tracking-[0.2em] uppercase text-zinc-300">
              <a href="#" className="hover:text-amber-500">
                New Arrivals
              </a>
              <a href="#" className="hover:text-amber-500">
                All Perfumes
              </a>
              <a href="#" className="hover:text-amber-500">
                Gift Sets
              </a>
              <a href="#" className="hover:text-amber-500">
                Our Story
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

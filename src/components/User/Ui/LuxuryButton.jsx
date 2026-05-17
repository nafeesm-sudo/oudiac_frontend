import React from "react";
import { motion } from "framer-motion";

const LuxuryButton = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}) => {
  const baseStyles =
    "px-8 py-3 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 relative overflow-hidden group";

  const variants = {
    primary: "bg-amber-600 text-zinc-950 hover:bg-amber-500",
    outline:
      "border border-amber-600 text-amber-500 hover:bg-amber-600 hover:text-zinc-950",
    ghost: "text-zinc-300 hover:text-amber-500",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default LuxuryButton;

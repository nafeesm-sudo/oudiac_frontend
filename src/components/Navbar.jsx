// Navbar.jsx

import { Menu, Search, Heart, ShoppingBag, User, X } from "lucide-react";

import { useState } from "react";
import ShopAll from "./ShopAll";

const Navbar = ({ cartCount, onSearch }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onSearch(value);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#faf6f3]/50 border-b">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-8">
          <button
            className="lg:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <Menu />
          </button>

          <div className="hidden lg:flex gap-6 text-sm font-medium text-white/100">
            <a href="#">HOME</a>
            {/* <a href="#">SHOP ALL</a> */}
            <ShopAll />
            {/* //INSIDE SHOP AALL, WE CAN HAVE MENS, WOMENS, UNISEX FRAGRANCES AND ATAR BAKHOON */}
            <a href="#">COMBO OFFER</a>
            <a href="#">CONTACT US</a>
          </div>
        </div>

        {/* Logo */}
        <h1 className="absolute left-1/2 -translate-x-1/2 text-3xl font-bold tracking-[8px] font-serif">
          OUDIAC
        </h1>

        {/* Right */}
        <div className="flex items-center gap-5">
          {/* Search Button */}
          <button onClick={() => setSearchOpen(!searchOpen)}>
            <Search className="w-5 h-5 cursor-pointer text-white/100" />
          </button>

          <div className="relative">
            <Heart
              className="w-5 h-5 text-white/100"
              onClick={() => {
                alert("Open liked products");
              }}
            />

            <span className="absolute -top-2 -right-2 bg-[#c9a961] text-white w-4 h-4 rounded-full text-[10px] flex items-center justify-center">
              0
            </span>
          </div>

          <button
            className="relative"
            onClick={() => {
              alert("Open cart");
            }}
          >
            <ShoppingBag className="w-5 h-5 text-white/100" />

            <span className="absolute -top-2 -right-2 bg-[#c9a961] text-white w-4 h-4 rounded-full text-[10px] flex items-center justify-center">
              {cartCount}
            </span>
          </button>

          <button
            className="relative"
            onClick={() => alert("Open user profile")}
          >
            <User className="hidden lg:block w-5 h-5 text-white/100" />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t bg-white px-4 py-4">
          <div className="max-w-3xl mx-auto flex items-center gap-3 border rounded-lg px-4 py-3">
            <Search className="w-5 h-5 text-gray-500" />

            <input
              type="text"
              placeholder="Search fragrances..."
              value={searchText}
              onChange={handleSearch}
              className="w-full outline-none bg-transparent text-white/100"
            />

            <button
              onClick={() => {
                setSearchOpen(false);
                setSearchText("");
                onSearch("");
              }}
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="lg:hidden bg-white px-4 py-5 space-y-3">
          <a href="#" className="block">
            Profile
          </a>
          <a href="#" className="block">
            FRAGRANCES
          </a>

          <a href="#" className="block">
            COLLECTIONS
          </a>

          <a href="#" className="block">
            GIFTS
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

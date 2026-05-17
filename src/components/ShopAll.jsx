const Shopll = () => {
  return (
    <>
      <ul className="relative group">
        {/* Shop All Menu */}
        <button className="flex items-center gap-1 text-white hover:text-gray-300 transition">
          SHOP ALL
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg> */}
        </button>

        {/* Dropdown */}
        <div className="absolute left-0 top-full mt-2 w-48 bg-black border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <a
            href="/mens"
            className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition rounded-t-xl"
          >
            MENS
          </a>

          <a
            href="/womens"
            className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition"
          >
            WOMENS
          </a>

          <a
            href="/kids"
            className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition"
          >
            ATTAR
          </a>

          <a
            href="/accessories"
            className="block px-4 py-3 text-sm text-white hover:bg-white/10 transition rounded-b-xl"
          >
            BAKHOON
          </a>
        </div>
      </ul>
    </>
  );
};
export default Shopll;

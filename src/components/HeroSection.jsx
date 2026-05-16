import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-black via-gray-900 to-[#c9a961] pt-24 relative">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 rounded-full border bg-white">
            NEW COLLECTION 2026
          </div>

          <h2 className="text-6xl font-serif leading-tight text-white text-transparent">
            A scent that
            <br />
            <span className="italic text-[#c9a961]">whispers</span> your name
          </h2>

          <p className="text-gray-600 max-w-md text-white/100">
            Discover luxury Arabian fragrances crafted with rare ingredients.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-transparent text-white/100 border-2 border-[#c9a961]">
              EXPLORE
            </button>

            <button className="px-8 py-4 border-2 border-[#c9a961] text-white/100 bg-transparent">
              OUR STORY
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600"
            alt=""
            className="h-130 w-96 rounded-lg shadow-2xl animate-float hover:scale-110 transition duration-700"
          />
        </div>
      </div>

      <ChevronDown className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" />
    </section>
  );
};

export default HeroSection;

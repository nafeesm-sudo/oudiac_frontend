import { bestSellers } from "../data/products";

const BestSellers = ({ setSelectedProduct }) => {
  return (
    <section className="py-24 border-none bg-gradient-to-br from-[#c9a971] via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 text-white/100">
        <h2 className="text-5xl text-center font-serif mb-16">Best Sellers</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {bestSellers.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded mb-4">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-[400px] object-cover group-hover:scale-110 transition duration-700"
                />

                {item.tag && (
                  <div className="absolute top-4 left-4 bg-[#c9a961] text-white px-3 py-1 text-xs">
                    {item.tag}
                  </div>
                )}

                <button
                  onClick={() => setSelectedProduct(item)}
                  className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-[#c9a961] to-[#a88c4d] py-3 opacity-0 group-hover:opacity-100 border border-[#c9a961] transition"
                >
                  QUICK VIEW
                </button>
              </div>

              <h3 className="font-serif text-2xl">{item.name}</h3>

              <p className="text-[#c9a961] font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;

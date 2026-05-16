import { menFragrances } from "../data/products";

const MenFragrances = ({ addToCart }) => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-serif mb-16">
          Fragrances for him
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {menFragrances.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg"
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-56 object-cover rounded mb-4"
              />

              <h3 className="font-serif text-xl">
                {item.name}
              </h3>

              <p className="text-[#c9a961] mb-4">
                {item.price}
              </p>

              <button
                onClick={() => addToCart(item)}
                className="w-full py-3 bg-black text-white"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenFragrances;
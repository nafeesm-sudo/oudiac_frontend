import { X } from "lucide-react";

const ProductModal = ({
  selectedProduct,
  setSelectedProduct,
  addToCart,
}) => {
  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70"
        onClick={() => setSelectedProduct(null)}
      ></div>

      <div className="relative bg-white max-w-4xl w-full grid md:grid-cols-2 rounded overflow-hidden">
        <img
          src={selectedProduct.image}
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="p-10">
          <button
            className="absolute top-4 right-4"
            onClick={() => setSelectedProduct(null)}
          >
            <X />
          </button>

          <h2 className="text-4xl font-serif mb-3">
            {selectedProduct.name}
          </h2>

          <p className="text-[#c9a961] text-2xl mb-6">
            {selectedProduct.price}
          </p>

          <p className="text-gray-600 mb-8">
            Luxury fragrance crafted with oriental
            notes and premium ingredients.
          </p>

          <button
            onClick={() => {
              addToCart(selectedProduct);
              setSelectedProduct(null);
            }}
            className="w-full py-4 bg-black text-white"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
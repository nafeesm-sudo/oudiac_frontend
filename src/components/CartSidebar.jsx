import { X, Trash2 } from "lucide-react";

const CartSidebar = ({
  cart,
  cartOpen,
  setCartOpen,
  removeFromCart,
}) => {
  if (!cartOpen) return null;

  const total = cart.reduce(
    (acc, item) =>
      acc + Number(item.price.replace("$", "")),
    0
  );

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setCartOpen(false)}
      ></div>

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif">
            Your Cart
          </h2>

          <button onClick={() => setCartOpen(false)}>
            <X />
          </button>
        </div>

        {cart.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b py-4"
          >
            <div>
              <h4>{item.name}</h4>
              <p className="text-[#c9a961]">
                {item.price}
              </p>
            </div>

            <button onClick={() => removeFromCart(index)}>
              <Trash2 className="text-red-500 w-4 h-4" />
            </button>
          </div>
        ))}

        <div className="mt-8">
          <div className="flex justify-between mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="w-full py-4 bg-black text-white">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
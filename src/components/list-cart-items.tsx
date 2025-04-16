import { useCart } from "../context/cart";

const ListCartItems = () => {
  const { cartItems, updateQuantity } = useCart();
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold my-4">Cart Items</h2>
      {cartItems.length > 0 ? (
        <div className="w-full flex flex-col gap-4">
          {cartItems.map((cartItem) => (
            <div
              key={cartItem.product.id}
              className="p-4 bg-white flex justify-between items-center rounded-md"
            >
              <div className="flex flex-col">
                <h3 className="font-bold text-md">{cartItem.product.name}</h3>
                <p className="text-base">₹{cartItem.product.price}</p>
              </div>
              {cartItem.isFree ? (
                <p className="uppercase px-2 py-1 text-xs bg-green-100 text-green-700 font-semibold rounded-full">
                  {" "}
                  Free Gift
                </p>
              ) : (
                <div className="flex items-center">
                  <button
                    className="h-8 w-8 text-center text-white rounded-md bg-red-500"
                    onClick={() =>
                      updateQuantity(cartItem.product, cartItem.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span className="h-8 w-8 text-center">
                    {cartItem.quantity}
                  </span>
                  <button
                    className="h-8 w-8 text-center text-white rounded-md bg-green-500"
                    onClick={() =>
                      updateQuantity(cartItem.product, cartItem.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white py-8 px-4 flex flex-col justify-center items-center rounded-md">
          <p className="text-lg mb-2 text-gray-500">Your cart is empty</p>
          <p className="text-base text-gray-400">
            Add some product to see them here!
          </p>
        </div>
      )}
    </div>
  );
};

export default ListCartItems;

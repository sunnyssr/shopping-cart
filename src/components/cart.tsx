import ListCartItems from "./list-cart-items";
import SubtotalCard from "./subtotal-card";

const Cart = () => {
  return (
    <div>
      <h2 className="mt-6 mb-4 font-bold text-xl">Cart Summary</h2>
      <SubtotalCard />
      <ListCartItems />
    </div>
  );
};

export default Cart;

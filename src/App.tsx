import Cart from "./components/cart";
import ListProducts from "./components/list-products";

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl text-center my-4">Shopping Cart</h1>
      <ListProducts />
      <Cart />
    </div>
  );
}

export default App;

import { PRODUCTS } from "../lib/constants";
import ProductCard from "./product-card";

const ListProducts = () => {
  return (
    <div>
      <h2 className="text-left text-xl font-bold mb-4">Products</h2>
      <ul className="list-none grid grid-cols-4 gap-4">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
export default ListProducts;

import { useCart } from "../context/cart";
import { Product } from "../lib/types";

type ProductCardProps = {
  product: Product;
};

const ProductCard = (props: ProductCardProps) => {
  const { addToCart } = useCart();
  return (
    <article className="bg-white rounded-md p-4 flex flex-col gap-2">
      <h3 className="font-bold text-md">{props.product.name}</h3>
      <p className="text-base">₹{props.product.price}</p>
      <button
        onClick={() => {
          addToCart(props.product, 1);
        }}
        className="text-white bg-blue-500 w-full py-2 px-4 rounded-md"
      >
        Add to Cart
      </button>
    </article>
  );
};
export default ProductCard;

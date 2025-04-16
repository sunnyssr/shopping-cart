import { useCart } from "../context/cart";
import { FREE_GIFT, THRESHOLD } from "../lib/constants";

const SubtotalCard = () => {
  const { eligibleForFreeItem, totalCartAmount } = useCart();
  return (
    <div className="p-4 bg-white rounded-md shadow-sm">
      <div className="flex justify-between">
        <p className="">Subtotal:</p>
        <p className="font-bold text-xl">₹{totalCartAmount}</p>
      </div>
      <hr className="w-full my-3"></hr>
      {eligibleForFreeItem ? (
        <p>You got a free {FREE_GIFT.name}!</p>
      ) : (
        <div className="bg-blue-100 rounded-md p-4">
          <p className="mb-2">
            Add ₹{THRESHOLD - totalCartAmount} to get a FREE {FREE_GIFT.name}!
          </p>
          <div className="bg-gray-100 h-3 rounded-md overflow-hidden">
            <div
              className="bg-blue-500 h-full"
              style={{
                width: Math.min((totalCartAmount / THRESHOLD) * 100, 100) + "%",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SubtotalCard;

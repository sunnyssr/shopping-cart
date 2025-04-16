import { FREE_GIFT, THRESHOLD } from "./constants";
import { CartItem } from "./types";

export const freeGiftCheck = (cartItems: CartItem[]): CartItem[] => {
  const totalCartAmount = cartItems.reduce(
    (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
    0
  );
  if (totalCartAmount >= THRESHOLD) {
    // meets the requirement
    const hasFreeGiftInCart = cartItems.some(
      (cartItem) => cartItem.product.id === FREE_GIFT.id,
      0
    );
    if (!hasFreeGiftInCart) {
      return [...cartItems, { product: FREE_GIFT, quantity: 1, isFree: true }];
    }
  } else {
    return cartItems.filter(
      (cartItem) => cartItem.product.id !== FREE_GIFT.id,
      0
    );
  }
  return cartItems;
};

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { CartItem, Product } from "../lib/types";
import { FREE_GIFT } from "../lib/constants";
import { freeGiftCheck } from "../lib/utils";

type Cart = {
  cartItems: CartItem[];
  addToCart: (productToAdd: Product, quantity: number) => void;
  updateQuantity: (productToUpdate: Product, newQuantity: number) => void;
  totalCartAmount: number;
  eligibleForFreeItem: boolean;
};
const CartContext = createContext<Cart | undefined>(undefined);

export const CartContextProvider = (props: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const totalCartAmount = useMemo(() => {
    return cartItems.reduce(
      (total, cartItem) => total + cartItem.product.price * cartItem.quantity,
      0
    );
  }, [cartItems]);

  const eligibleForFreeItem = useMemo(() => {
    return cartItems.some(
      (cartItem) => cartItem.product.id === FREE_GIFT.id,
      0
    );
  }, [cartItems]);

  const addToCart = (productToAdd: Product, quantity: number = 1) => {
    setCartItems((cartItems) =>
      freeGiftCheck(
        (() => {
          if (
            cartItems.some(
              (cartItem) => cartItem.product.id === productToAdd.id
            )
          ) {
            return cartItems.map((cartItem) =>
              cartItem.product.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + quantity }
                : cartItem
            );
          }

          return [...cartItems, { product: productToAdd, quantity: quantity }];
        })()
      )
    );
  };

  const updateQuantity = (productToUpdate: Product, newQuantity: number) => {
    setCartItems((cartItems) =>
      freeGiftCheck(
        (() => {
          if (newQuantity === 0) {
            // remove product from cart
            return cartItems.filter(
              (cartItem) => cartItem.product.id != productToUpdate.id
            );
          }

          return cartItems.map((cartItem) =>
            cartItem.product.id === productToUpdate.id
              ? { ...cartItem, quantity: newQuantity }
              : cartItem
          );
        })()
      )
    );
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        totalCartAmount,
        eligibleForFreeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart used outside cartContext provider");
  return cart;
};

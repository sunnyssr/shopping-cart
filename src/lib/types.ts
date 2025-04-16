export type Product = {
  id: number;
  price: number;
  name: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
  isFree?: boolean;
};

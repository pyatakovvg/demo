
import { IProduct } from "./Product";


export type ICart = {
  products: IProduct[];
};


export function addProduct(cart: ICart, product: IProduct): ICart {
  return {
    ...cart,
    products: [
      ...cart.products,
      product
    ],
  };
}

export function removeProduct(cart: ICart, product: IProduct): ICart {
  return {
    ...cart,
    products: cart.products.filter(({ id }) => id !== product.id),
  };
}

export function hasProduct(cart: ICart, product: IProduct): boolean {
  return cart.products.some(({ id }) => id === product.id);
}

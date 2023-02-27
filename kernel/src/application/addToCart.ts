
import * as cart from "@domain/Cart";
import { IProduct } from "@domain/Product";

import { ICartStorageService } from "./ports";
import { useCartStorage } from "@services/storageAdapter";


export function useAddToCart() {
  const storage: ICartStorageService = useCartStorage();

  function addToCart(product: IProduct): void {
    const updated = cart.addProduct(storage.cart, product);

    storage.updateCart(updated);
  }

  return {
    addToCart,
  };
}

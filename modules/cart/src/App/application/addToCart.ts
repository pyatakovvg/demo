
import * as cart from "@domain/Cart";
import { IProduct } from "@domain/Product";
import { hasAllergy, IUser } from "@domain/User";

import { ICartStorageService, INotificationService } from "./ports";
import { useCartStorage } from "@services/storageAdapter";
import { useNotifier } from "@services/notificationAdapter";


export function useAddToCart() {
  const storage: ICartStorageService = useCartStorage();
  const notifier: INotificationService = useNotifier();

  function addToCart(user: IUser, product: IProduct): void {
    const isDangerous = product.toppings.some((item) => hasAllergy(user, item));

    if (isDangerous) {
      return notifier.notify('Это печенье опясно для вашего здоровья!');
    }

    const updated = cart.addProduct(storage.cart, product);

    storage.updateCart(updated);
  }

  return {
    addToCart,
  };
}

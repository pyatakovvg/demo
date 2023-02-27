
import { IUser } from "@domain/User";
import { ICart } from "@domain/Cart";
import { createOrder } from "@domain/Order";

import { usePayment } from "@services/paymentAdapter";
import { useNotifier } from "@services/notificationAdapter";
import { useCartStorage, useOrdersStorage } from "@services/storageAdapter";


export function useOrderProducts() {
  const notifier = useNotifier();
  const payment = usePayment();
  const orderStorage = useOrdersStorage();
  const cartStorage = useCartStorage();

  async function orderProducts(user: IUser, cart: ICart) {
    const order = createOrder(user, cart);

    const paid = await payment.tryPay(order.total);

    if ( ! paid) {
      return notifier.notify('Оплата не прошла :(');
    }

    orderStorage.updateOrders([ ...orderStorage.orders, order ]);
    cartStorage.emptyCart();
  }

  return {
    orderProducts,
  };
}

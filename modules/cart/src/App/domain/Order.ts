
import { IUser } from './User';
import { ICart } from './Cart';
import { totalPrice } from './Product';


export type OrderStatus = "new" | "delivery" | "completed";

export interface IOrder {
  user: IUser;
  cart: ICart;
  status: OrderStatus;
  total: number;
  createdAt: string;
}


export function createOrder(user: IUser, cart: ICart): IOrder {
  return {
    cart,
    user: user,
    status: "new",
    total: totalPrice(cart.products),
    createdAt: new Date().toISOString(),
  };
}

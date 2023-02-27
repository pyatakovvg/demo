
import { IUser } from './User';
import { ICart } from './Cart';
import { totalPrice } from './Product';


export enum OrderStatus {
  NEW,
  DELIVERY,
  COMPLETED,
}

export interface IOrder {
  user: IUser;
  cart: ICart;
  status: OrderStatus;
  total: TRub;
  createdAt: TDateTimeString;
}


export function createOrder(user: IUser, cart: ICart): IOrder {
  return {
    cart,
    user: user,
    status: OrderStatus.NEW,
    total: totalPrice(cart.products),
    createdAt: new Date().toISOString(),
  };
}

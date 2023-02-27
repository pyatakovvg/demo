
import { ICart } from "@domain/Cart";
import { IOrder } from "@domain/Order";
import { IUser, TUserName } from "@domain/User";


export interface IUserStorageService {
  user?: IUser;
  updateUser(user: IUser): void;
}

export interface ICartStorageService {
  cart: ICart;
  emptyCart(): void;
  updateCart(cart: ICart): void;
}

export interface IOrdersStorageService {
  orders: IOrder[];
  updateOrders(orders: IOrder[]): void;
}

export interface IAuthenticationService {
  auth(name: TUserName, email: TEmail): Promise<IUser>;
}

export interface INotificationService {
  notify(message: string): void;
}

export interface IPaymentService {
  tryPay(amount: TPriceCents): Promise<boolean>;
}

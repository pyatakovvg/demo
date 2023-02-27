
import React from "react";
import { cookies } from "./fakeData";

const StoreContext = React.createContext<any>({});


interface IProps {
  children: React.ReactNode | React.ReactElement;
}


export const useStore = () => React.useContext(StoreContext);

export const Provider: React.FC<IProps> = ({ children }) => {
  const [user, setUser] = React.useState();
  const [cart, setCart] = React.useState({ products: [] });
  const [orders, setOrders] = React.useState([]);

  const value = {
    user,
    cart,
    cookies,
    orders,
    updateUser: setUser,
    updateCart: setCart,
    updateOrders: setOrders,
    emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

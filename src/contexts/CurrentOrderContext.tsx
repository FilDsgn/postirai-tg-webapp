import { createContext, useContext } from "react";

interface IOrder {
  location: string;
  locationId: number;
  machine: string;
  duration: number;
  price: number;
  paymentUrl: string;
}

export type CurrentOrderContext = {
  order: IOrder;
  setLocation: (c: string) => void;
  setLocationId: (c: number) => void;
  setMachine: (c: string) => void;
  setDuration: (c: number) => void;
  setPrice: (c: number) => void;
  setPaymentUrl: (c: string) => void;
};

const CurrentOrderContext = createContext<CurrentOrderContext>({
  order: {
    location: "",
    locationId: 0,
    machine: "",
    duration: 0,
    price: 0,
    paymentUrl: "",
  },
  setLocation: () => {},
  setLocationId: () => {},
  setMachine: () => {},
  setDuration: () => {},
  setPrice: () => {},
  setPaymentUrl: () => {},
});

export const useCurrentOrderContext = () => useContext(CurrentOrderContext);

export const CurrentOrderContextProvider = ({ children, ...props }: any) => {
  return (
    <CurrentOrderContext.Provider value={props.context}>
      {children}
    </CurrentOrderContext.Provider>
  );
};

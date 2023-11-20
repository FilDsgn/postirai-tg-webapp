interface IType {
  id: number;
  title: string;
}

interface IStatus {
  id: number;
  title: string;
}

interface IPrice {
  amount: number;
  currency: string;
  duration: number;
  url: string;
}

interface IMachine {
  id: number;
  type: IType;
  size_value: number;
  number: number;
  status: IStatus;
  prices: IPrice[];
  time_zone: string;
}

export interface IChoseTimePopup {
  isOpen: boolean;
  closeChoseTimePopup: () => void;
  machine: IMachine;
}

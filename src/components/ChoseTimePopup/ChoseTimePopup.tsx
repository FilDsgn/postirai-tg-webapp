import { useCurrentOrderContext } from "../../contexts/CurrentOrderContext";
import style from "./ChoseTimePopup.module.css";

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

interface IChoseTimePopup {
  isOpen: boolean;
  closeChoseTimePopup: () => void;
  machine: IMachine;
}

const ChoseTimePopup = ({
  isOpen,
  closeChoseTimePopup,
  machine,
}: IChoseTimePopup) => {
  const { setMachine, setDuration, setPrice, setPaymentUrl } =
    useCurrentOrderContext();

  return (
    <div
      className={`${style.popup} ${isOpen && style.visible}`}
      onClick={() => {
        closeChoseTimePopup();
      }}
    >
      <div className={style.container}>
        <ul className={style.itemsList}>
          {machine.prices.map((i) => {
            return (
              <li
                className={style.item}
                key={i.duration}
                onClick={() => {
                  setMachine(machine.type.title + " №" + machine.number);
                  setDuration(i.duration);
                  setPrice(i.amount);
                  setPaymentUrl(i.url);
                }}
              >
                <div className={style.icon}></div>
                <p className={style.text}>
                  {i.duration} минут ({machine.type.title})
                </p>
                <span className={style.price}>{i.amount} р</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ChoseTimePopup;

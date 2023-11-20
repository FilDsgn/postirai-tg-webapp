import { useCurrentOrderContext } from "../../contexts/CurrentOrderContext";
import style from "./ChoseTimePopup.module.css";

import { IChoseTimePopup } from "./ChoseTimePopup.types";

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
      onClick={closeChoseTimePopup}
    >
      <div className={`${style.container} ${isOpen && style.containerActive}`}>
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

import style from "./MachineCard.module.css";

import { useCurrentOrderContext } from "../../contexts/CurrentOrderContext";
import { useEffect, useState } from "react";
import ChoseTimePopup from "../ChoseTimePopup/ChoseTimePopup";

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

interface IMachineCard {
  machine: IMachine;
}

const MachineCard = ({ machine }: IMachineCard) => {
  const prices = machine.prices.map((i) => i.amount);
  const minPrice = Math.min(...prices);

  const [isChoseTimePopupOpen, setIsChoseTimePopupOpen] = useState(false);

  const openChoseTimePopup = () => {
    setIsChoseTimePopupOpen(true);
  };

  const closeChoseTimePopup = () => {
    setIsChoseTimePopupOpen(false);
  };

  const { setMachine, setDuration, setPrice, setPaymentUrl } =
    useCurrentOrderContext();

  const handleMachineCardClick = () => {
    if (machine.status.title === "Свободно") {
      if (machine.prices.length > 1) {
        openChoseTimePopup();
      } else {
        setMachine(machine.type.title + " №" + machine.number);
        setDuration(machine.prices[0].duration);
        setPrice(machine.prices[0].amount);
        setPaymentUrl(machine.prices[0].url);
      }
    }
  };

  return (
    <>
      <li
        className={`${style.cardContainer} ${
          machine.status.title !== "Свободно" && style.cardContainerBusy
        }`}
        onClick={handleMachineCardClick}
      >
        <div
          className={`${style.image} ${
            machine.status.title !== "Свободно" ? style.imageBusy : ""
          }`}
        ></div>
        <div className={style.infoContainer}>
          <h4 className={style.title}>
            {machine.type.title + " №" + machine.number}
          </h4>
          <div className={style.statusContainer}>
            <p className={style.statusText}>{machine.status.title}</p>
            <div
              className={`${style.statusIcon} ${
                machine.status.title !== "Свободно" ? style.statusIconRed : ""
              }`}
            ></div>
          </div>
        </div>
        <div className={style.priceContainer}>
          <span className={style.price}>
            {prices.length > 1 ? "от " : ""}
            {minPrice} р
          </span>
          <span className={style.weight}>{machine.size_value} кг</span>
        </div>
      </li>
      <ChoseTimePopup
        isOpen={isChoseTimePopupOpen}
        closeChoseTimePopup={closeChoseTimePopup}
        machine={machine}
      />
    </>
  );
};

export default MachineCard;

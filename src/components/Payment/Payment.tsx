import { useState } from "react";
import { useCurrentOrderContext } from "../../contexts/CurrentOrderContext";
import PaymentPopup from "../PaymentPopup/PaymentPopup";
import style from "./Payment.module.css";

const Payment = () => {
  const { order } = useCurrentOrderContext();

  const [isOpenPaymentPopup, setIsOpenPaymentPopup] = useState(false);

  const openPaymentPopup = () => {
    setIsOpenPaymentPopup(true);
  };

  const closePaymentPopup = () => {
    setIsOpenPaymentPopup(false);
  };

  const handlePaymentButtonClick = (e: any) => {
    e.preventDefault();
    // openPaymentPopup();
  };

  return (
    <section className={style.content}>
      <form className={style.form}>
        <label className={style.label}>
          Адрес
          <input
            className={style.inputInLabel}
            value={order.location}
            readOnly
          ></input>
        </label>
        <label className={style.label}>
          Машина
          <input
            className={style.inputInLabel}
            value={order.machine}
            readOnly
          ></input>
        </label>
        <label className={style.label}>
          Время
          <input
            className={style.inputInLabel}
            value={`${order.duration} мин`}
            readOnly
          ></input>
        </label>
        <label className={style.label}>
          Стоимость
          <input
            className={style.inputInLabel}
            value={`${order.price} р`}
            readOnly
          ></input>
        </label>
        <p className={style.text}>
          Нажимая на кнопку "оплатить", вы соглашаетесь с{" "}
          <span className={style.link}>офертой</span>
        </p>
        <div className={style.buttonsContainer}>
          {/* <button
            className={style.buttonPay}
            type="submit"
            // onClick={handlePaymentButtonClick}
          >
            Оплатить
          </button> */}
          <a
            className={style.paymentButtonLink}
            href={order.paymentUrl}
            target="_blank"
          >
            Оплатить
          </a>
          {/* <button className={style.buttonPromo} type="button">
          Промо-код
        </button> */}
        </div>
      </form>
      {/* <PaymentPopup
        isOpen={isOpenPaymentPopup}
        closePaymentPopup={closePaymentPopup}
      /> */}
    </section>
  );
};

export default Payment;

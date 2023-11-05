import { url } from "inspector";
import { useCurrentOrderContext } from "../../contexts/CurrentOrderContext";
import style from "./Payment.module.css";

const Payment = () => {
  const { order } = useCurrentOrderContext();
  return (
    <form className={style.form} action={order.paymentUrl} target="_blank">
      <input className={style.input} value={order.location} readOnly></input>
      <input className={style.input} value={order.machine} readOnly></input>
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
        <button className={style.buttonPay} type="submit">
          Оплатить
        </button>
        <button className={style.buttonPromo} type="button">
          Промо-код
        </button>
      </div>
    </form>
  );
};

export default Payment;

import { useCurrentOrderContext } from "../../contexts/CurrentOrderContext";
import style from "./PaymentPopup.module.css";
import { IPaymentPopup } from "./PaymentPopup.types";

const PaymentPopup = ({ isOpen, closePaymentPopup }: IPaymentPopup) => {
  const { order } = useCurrentOrderContext();

  const closeOnOverlayClick = (e: any) => {
    if (e.target === e.currentTarget) {
      closePaymentPopup();
    }
  };
  return (
    <div
      onClick={closeOnOverlayClick}
      className={`${style.popup} ${isOpen ? style.visible : ""}`}
    >
      <div className={style.frameContainer}>
        <div className={style.closeButton} onClick={closePaymentPopup}></div>
        <iframe className={style.frame} src={order.paymentUrl}></iframe>
      </div>
    </div>
  );
};

export default PaymentPopup;

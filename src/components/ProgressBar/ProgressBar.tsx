import { useState } from "react";
import style from "./ProgressBar.module.css";

interface IProgressBar {
  step: string;
}

const ProgressBar = ({ step }: IProgressBar) => {
  return (
    <div className={style.container}>
      <div
        className={`${style.progressLine} ${
          (step === "locations" && style.w1) ||
          (step === "machines" && style.w2) ||
          (step === "payment" && style.w3)
        }`}
      ></div>
    </div>
  );
};

export default ProgressBar;

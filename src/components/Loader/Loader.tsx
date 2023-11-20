import { Oval } from "react-loader-spinner";

import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.container}>
      <Oval
        height={100}
        width={100}
        color="#26A1DB"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#B6DEF0"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;

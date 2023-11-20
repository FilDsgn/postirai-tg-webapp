import style from "./Header.module.css";
import { IHeader } from "./Header.types";

const Header = ({ title }: IHeader) => {
  return (
    <header className={style.header}>
      <h2 className={style.title}>{title}</h2>
    </header>
  );
};

export default Header;

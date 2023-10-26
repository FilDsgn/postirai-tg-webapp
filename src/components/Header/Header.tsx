import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.backIcon}></div>
      <h2 className={style.title}>ВЫБЕРИ ПРАЧЕЧНУЮ</h2>
    </header>
  );
};

export default Header;

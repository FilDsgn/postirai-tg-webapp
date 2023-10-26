import style from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <section className={style.search}>
      <div className={style.container}>
        <form className={style.form}>
          <div className={style.icon}></div>
          <input placeholder="Найти" className={style.input}></input>
          <button className={style.button}></button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;

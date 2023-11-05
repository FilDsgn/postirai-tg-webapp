import React, { useState } from "react";
import style from "./SearchForm.module.css";

interface ISearchForm {
  onSearch: (value: string) => void;
}

const SearchForm = ({ onSearch }: ISearchForm) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);

    setTimeout(() => {
      onSearch(e.target.value.toLowerCase());
    }, 700);
  };

  const handleSearchButtonClick = (e: any) => {
    e.preventDefault();

    onSearch(input.toLowerCase());
  };

  return (
    <section className={style.search}>
      <div className={style.container}>
        <form className={style.form}>
          <div className={style.icon}></div>
          <input
            placeholder="Найти"
            value={input}
            onChange={handleInputChange}
            className={style.input}
          ></input>
          <button
            onClick={handleSearchButtonClick}
            className={style.button}
          ></button>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;

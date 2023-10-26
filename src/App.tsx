import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <div className={styles.page}>
      <Header />
      <SearchForm />
    </div>
  );
}

export default App;

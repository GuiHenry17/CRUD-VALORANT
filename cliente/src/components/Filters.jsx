import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import search from "../styles/image/search.svg";

export default function Filters({ skins, setSkinsFilter }) {
  const [text, setText] = useState("");

  useEffect(() => {
    const newSkinsFilter = skins.filter(skin => 
      skin.name.toLowerCase().includes(text.toLowerCase())
    );
    setSkinsFilter(newSkinsFilter);
  }, [text]);

  const reset = () => {
    setText("");
    setSkinsFilter(skins);
  };

  const orderAZ = () => {
    const newSkinsFilter = [...skins]
      .filter(skin => skin.name.toLowerCase().includes(text.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
    setSkinsFilter(newSkinsFilter);
  };

  const orderZA = () => {
    const newSkinsFilter = [...skins]
      .filter(skin => skin.name.toLowerCase().includes(text.toLowerCase()))
      .sort((a, b) => b.name.localeCompare(a.name));
    setSkinsFilter(newSkinsFilter);
  };

  const orderPrice = () => {
    const newSkinsFilter = [...skins]
      .filter(skin => skin.name.toLowerCase().includes(text.toLowerCase()))
      .sort((a, b) => a.price - b.price);
    setSkinsFilter(newSkinsFilter);
  };

  const orderPriceReverse = () => {
    const newSkinsFilter = [...skins]
      .filter(skin => skin.name.toLowerCase().includes(text.toLowerCase()))
      .sort((a, b) => b.price - a.price);
    setSkinsFilter(newSkinsFilter);
  };

  return (
    <div>
      <div className={styles.containerSearch}>
        <input 
          className={styles.inputSearch} 
          htmlFor="search" 
          value={text}
          onChange={(event) => setText(event.target.value)} 
        />
        <img className={`${styles.searchImage} ${text ? styles.hidden : ''}`} src={search} alt="Search" />
        <label className={`${styles.labelSearch} ${text ? styles.hidden : ''}`} htmlFor="search">Pesquisar</label>
      </div>
      <div className={styles.containerButtonFilters}>
        <button className={styles.buttonFilters} onClick={reset}>Reset</button>
        <button className={styles.buttonFilters} onClick={orderAZ}>AZ</button>
        <button className={styles.buttonFilters} onClick={orderZA}>ZA</button>
        <button className={styles.buttonFilters} onClick={orderPrice}>Price</button>
        <button className={styles.buttonFilters} id={styles.buttonPriceReverse} onClick={orderPriceReverse}>Reverse Price</button>
      </div>
    </div>
  );
};

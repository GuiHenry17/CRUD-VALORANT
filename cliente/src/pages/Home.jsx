import { useState, useEffect } from 'react';
import searchSkins from '../utils/searchSkins.jsx';
import List from '../components/List.jsx'
import Register from '../components/Register.jsx';
import Fonts from '../components/Fonts.jsx';
import Filters from '../components/Filters.jsx'
import styles from '../styles/Home.module.css';
import navbar from "../styles/image/navbar.svg";

export default function Home() {
  const [skins, setSkins] = useState([]);
  const [skinsFilter, setSkinsFilter] = useState([]);

  useEffect(() => {
    searchSkins(setSkins, setSkinsFilter);
  }, []);

  return (
    <>
      <header>
        <div className={styles.containerHeader}>
          <div className={styles.invertedTrapeze}></div>
          <div className={styles.trapeze}>
            <h2>STORE</h2>
          </div>
          <div className={styles.reverseInvertedTrapeze}></div>
        </div>
        <Filters skins={skins} setSkinsFilter={setSkinsFilter} />
        <img className={styles.bigImage} src={navbar} alt="Navbar" />
      </header>
      <main>
        <div>
          <List setSkins={setSkins} skinsFilter={skinsFilter} setSkinsFilter={setSkinsFilter} />
        </div>
        <div>
          <Register setSkins={setSkins} />
        </div>
      </main>
      <footer>
      </footer>
    </>
  );
};
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import searchSkin from "../utils/searchSkin.jsx";
import { useNavigate } from "react-router-dom";
import styles from '../styles/Alter.module.css';

export default function Alter() {
  const navigation = useNavigate();
  const { id } = useParams();
  const [skin, setSkin] = useState();
  const [name, setName] = useState();
  const [weapon, setWeapon] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [variants, setVariants] = useState([]);
  const [rarity, setRarity] = useState();

  useEffect(() => {
    const asyncFunction = async () => {
      const data = await searchSkin(setSkin, id);
      setName(data.name);
      setWeapon(data.weapon);
      setImage(data.image);
      setPrice(data.price);
      setVariants(data.variants);
      setRarity(data.rarity);
    }
    asyncFunction();
  }, [])

  const handleAlter = async (event) => {
    event.preventDefault();
    console.log(variants);
    const newSkin = {
      id: skin.id,
      name,
      image,
      weapon,
      price,
      variants,
      rarity
    };
    try {
      await fetch(`http://localhost:3000/skins/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSkin)
      });
      alert('Skin changed successfully.')
      navigation('/');
    } catch (error) {
      console.error(error);
      alert('Error when changing.')
    }
  };

  return (
    <>
      <h1>Alter</h1>
      <form className={styles.formAlter} onSubmit={handleAlter}>
        <label className={styles.labelForm} htmlFor="name">Skin name: </label>
        <input className={styles.inputForm}
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <label className={styles.labelForm} htmlFor="weapon">Skin weapon: </label>
        <input className={styles.inputForm}
          value={weapon}
          onChange={event => setWeapon(event.target.value)}
        />
        <label className={styles.labelForm} htmlFor="image">Skin image: </label>
        <input className={styles.inputForm}
          value={image}
          onChange={event => setImage(event.target.value)}
        />
        <label className={styles.labelForm} htmlFor="price">Skin price: </label>
        <input className={styles.inputForm}
          value={price}
          onChange={event => setPrice(event.target.value)}
        />
        <label className={styles.labelForm} htmlFor="variants">Skin variants: </label>
        <input className={styles.inputForm}
          value={variants}
          onChange={event => setVariants(event.target.value)}
        />
        <label className={styles.labelForm} htmlFor="rarity">Skin rarity: </label>
        <select name="rarity" defaultValue={rarity} onChange={event => setRarity(event.target.value)}>
          <option value="" disabled selected hidden>Select</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Premium">Premium</option>
          <option value="Ultra">Ultra</option>
          <option value="Exclusive">Exclusive</option>
        </select>
        <button className={styles.bigButtonAlter}>Alter</button>
      </form>
    </>
  );
};
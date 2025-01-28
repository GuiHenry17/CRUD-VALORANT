import ButtonDelete from './ButtonDelete';
import ButtonAlter from './ButtonAlter';
import styles from '../styles/List.module.css';
import price from '../styles/image/price.svg';
import ExclusiveImg from '../images/exclusive.png';
import DeluxeImg from '../images/deluxe.png';
import UltraImg from '../images/ultra.png';
import PremiumImg from '../images/premium.png';

export default function List({ setSkins, skinsFilter, setSkinsFilter }) {
  return (
    <>
      <div className={styles.containerSkins}>
        {
          skinsFilter.map(el =>
            <div className={styles.containerSkinIndividual} key={el.id}>
              <div className={styles.card}>
                <div
                  className={styles.cardFront}
                  style={{
                    backgroundImage:
                      el.rarity == 'Deluxe'
                        ? `url('${DeluxeImg}')`
                        : el.rarity == 'Premium'
                          ? `url('${PremiumImg}')`
                          : el.rarity == 'Ultra'
                            ? `url('${UltraImg}')`
                            : el.rarity == 'Exclusive'
                              ? `url(${ExclusiveImg})`
                              : 'none'
                  }}
                >
                  <div className={styles.containerPrice}>
                    <img className={styles.priceImage} src={price} alt="Price VP" />
                    <p>{el.price} VP</p>
                  </div>
                  <img className={styles.cardImage} src={el.image} />
                  <p className={styles.nameSkins}>{el.name}</p>
                </div>
                <div
                  className={styles.cardBack}
                  style={{
                    backgroundImage:
                      el.rarity == 'Deluxe'
                        ? `url('${DeluxeImg}')`
                        : el.rarity == 'Premium'
                          ? `url('${PremiumImg}')`
                          : el.rarity == 'Ultra'
                            ? `url('${UltraImg}')`
                            : el.rarity == 'Exclusive'
                              ? `url(${ExclusiveImg})`
                              : 'none'
                  }}
                >
                  <ButtonAlter id={el.id} />
                  <ButtonDelete id={el.id} setSkins={setSkins} setSkinsFilter={setSkinsFilter} />
                </div>
              </div>
            </div>
          )
        }
      </div >
    </>
  );
};
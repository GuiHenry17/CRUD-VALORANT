import { useNavigate } from "react-router-dom";
import styles from '../styles/List.module.css';

export default function ButtonAlter({ id }) {
  const navigation = useNavigate();

  return (
    <>
      <button className={styles.buttonAlter}
        onClick={() => {
          navigation(`/alter/${id}`);
        }}
      >
        Alter
      </button>
    </>
  );
};
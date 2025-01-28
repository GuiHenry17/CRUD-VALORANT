import searchSkins from "../utils/searchSkins";
import styles from '../styles/List.module.css';

export default function ButtonDelete({ id, setSkins, setSkinsFilter }) {
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:3000/skins/${id}`, {
        method: 'DELETE'
      });
      searchSkins(setSkins, setSkinsFilter);
    } catch (error) {
      console.error(error);
      alert('Erro ao deletar.');
    }
  };

  return (
    <>
      <button className={styles.buttonDelete}
        onClick={() =>
          handleDelete(id)
        }>
        Delete
      </button>
    </>
  );
};
import styles from '../styles/Home.module.css';
import { jsPDF } from "jspdf";
import "jspdf-autotable";

export default function GeneratePDF({ skins }) {
  
    const exportPDF = () => {
        const doc = new jsPDF();
        const tableData = skins.map((skin) => [
            skin.id,
            skin.name,
            skin.weapon,
            skin.price,
            skin.variants,
            skin.rarity
        ])

        doc.text("Skins List", 10, 10)
        doc.autoTable({
            head: [["ID", "Name", "Weapon", "Price", "Variants", "Rarity"]],
            body: tableData,
        })

        doc.save("skinsList.pdf")
    }

  return (
    <>
        <div className={styles.PDFdiv}>
      <button onClick={exportPDF} className={styles.buttonPDF}>Exportar PDF</button>
      </div>
    </>
  );
};
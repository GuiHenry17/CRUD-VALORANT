import styles from '../styles/Home.module.css';
import { jsPDF } from "jspdf";
import "jspdf-autotable";

export default function GeneratePDF({ skins }) {
  
  const exportPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor("#D73947");
    const title = "Skins List";
    const titleWidth = doc.getTextWidth(title);
    const titleY = 20;
    doc.text(title, (pageWidth - titleWidth) / 2, titleY);

    const startY = titleY + 10;

    const tableData = skins.map((skin) => [
        skin.id,
        skin.name,
        skin.weapon,
        skin.price,
        skin.variants,
        skin.rarity
    ]);

    doc.autoTable({
        startY: startY,
        head: [["ID", "Name", "Weapon", "Price", "Variants", "Rarity"]],
        body: tableData,
        theme: "plain",
        styles: {
            font: "helvetica",
            textColor: "#FFFFFF",
            fillColor: "#1E252E",
            halign: "center",
            valign: "middle",
            lineWidth: 0,
        },
        headStyles: {
            fillColor: "#D73947",
            textColor: "#FFFFFF",
            fontSize: 12,
            lineWidth: 0,
        },
        alternateRowStyles: {
            fillColor: "#121B24"
        },
        tableLineWidth: 0,
    });

    doc.save("skinsList.pdf");
};






  return (
    <>
        <div className={styles.PDFdiv}>
      <button onClick={exportPDF} className={styles.buttonPDF}>Exportar PDF</button>
      </div>
    </>
  );
};
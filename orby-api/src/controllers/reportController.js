import reportService from "../services/reportService.js";
import path from "path";

async function generateUsersReport(req, res) {
  try {
    // Gerar o arquivo XLSX
    await reportService.generateUsersReport();

    // Caminho para o arquivo gerado
    const xlsxPath = path.resolve("users_report.xlsx");

    // Enviar o arquivo XLSX para download
    res.download(xlsxPath, "users_report.xlsx", (err) => {
      if (err) {
        console.error("Erro ao enviar o arquivo:", err);
        return res.status(500).send("Erro ao enviar o relatório.");
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Erro ao gerar o relatório.");
  }
}

export default {
  generateUsersReport,
};

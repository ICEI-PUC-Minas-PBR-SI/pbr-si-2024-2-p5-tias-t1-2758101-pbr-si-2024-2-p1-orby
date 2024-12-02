import XLSX from "xlsx";
import UserSchema from "../schemas/User.js";

async function generateUsersReport() {
  try {
    // Buscar usuários no banco de dados
    const users = await UserSchema.find({}, "name aptitudeStatus isDonor age");

    // Formatar os dados
    const userData = users.map((user) => ({
      name: user.name,
      aptitudeStatus: user.aptitudeStatus,
      isDonor: user.isDonor,
      age: user.age,
    }));

    // Gerar o arquivo XLSX
    const worksheet = XLSX.utils.json_to_sheet(userData); // Criar a planilha
    const workbook = XLSX.utils.book_new(); // Criar o livro de trabalho
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users Report"); // Adicionar a planilha ao livro
    XLSX.writeFile(workbook, "users_report.xlsx"); // Salvar o arquivo

    console.log("Relatório XLSX gerado com sucesso!");
  } catch (error) {
    console.error("Erro ao gerar relatório:", error);
  }
}

export default { generateUsersReport };

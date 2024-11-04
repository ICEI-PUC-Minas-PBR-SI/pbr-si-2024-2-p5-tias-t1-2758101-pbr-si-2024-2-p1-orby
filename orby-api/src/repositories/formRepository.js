import UserQuestions from "../schemas/UserQuestions.js";

async function saveUserAnswers(answers) {
  console.log("answers: ", answers);
  try {
    await UserQuestions.insertMany(answers);
    console.log("Dados inseridos com sucesso.");
  } catch (error) {
    console.error("Erro ao inserir respostas:", error);
    throw new Error("Falha ao salvar respostas."); // Lançar um novo erro ou tratar a falha
  }
}

export default { saveUserAnswers };

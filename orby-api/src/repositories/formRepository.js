import UserQuestions from "../schemas/UserQuestions.js";
import UserSchema from "../schemas/User.js";

async function saveUserAnswers(answers) {
  console.log("answers: ", answers);
  try {
    await UserQuestions.updateOne(answers);
    console.log("Dados inseridos com sucesso.");
  } catch (error) {
    console.error("Erro ao inserir respostas:", error);
    throw new Error("Falha ao salvar respostas."); // Lançar um novo erro ou tratar a falha
  }
}

async function updateUserAge(age, userId) {
  try {
    await UserSchema.findOneAndUpdate(
      { _id: userId },
      { age },
      {
        new: true,
        runValidators: true,
      }
    );

    console.log("Dados inseridos com sucesso.");
  } catch (error) {
    console.error("Erro ao inserir data:", error);
    throw new Error("Falha ao salvar data.");
  }
}

async function updateUserAptitudeStatus(aptitudeStatus, userId) {
  try {
    await UserSchema.findOneAndUpdate(
      { _id: userId },
      { aptitudeStatus },
      {
        new: true,
        runValidators: true,
      }
    );

    console.log("Dados inseridos com sucesso.");
  } catch (error) {
    console.error("Erro ao inserir data:", error);
    throw new Error("Falha ao salvar data.");
  }
}

async function updateUserDonorState(isDonor, userId) {
  try {
    await UserSchema.findOneAndUpdate(
      { _id: userId },
      { isDonor },
      {
        new: true,
        runValidators: true,
      }
    );

    console.log("Dados inseridos com sucesso.");
  } catch (error) {
    console.error("Erro ao inserir data:", error);
    throw new Error("Falha ao salvar data.");
  }
}

export default {
  saveUserAnswers,
  updateUserAge,
  updateUserAptitudeStatus,
  updateUserDonorState,
};

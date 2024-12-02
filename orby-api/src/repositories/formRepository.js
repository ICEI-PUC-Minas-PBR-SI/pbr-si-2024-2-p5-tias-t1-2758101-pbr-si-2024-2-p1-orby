import UserQuestions from "../schemas/UserQuestions.js";
import UserSchema from "../schemas/User.js";

async function saveUserAnswers(userId, answers) {
  console.log("answers: ", answers);
  try {
    for (const answer of answers) {
      const { questionId, answer: userAnswer } = answer;

      await UserQuestions.updateOne(
        { userId, questionId },
        { $set: { answer: userAnswer } },
        { upsert: true }
      );
    }

    console.log("Dados inseridos/atualizados com sucesso.");
  } catch (error) {
    console.error("Erro ao inserir respostas:", error);
    throw new Error("Falha ao salvar respostas.");
  }
}

async function updateUserAge(age, userId) {
  try {
    await UserSchema.findOneAndUpdate(
      { _id: userId },
      { $set: { age } },
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
      { $set: { aptitudeStatus } },
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
      { $set: { isDonor } },
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

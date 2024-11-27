import formRepository from "../repositories/formRepository.js";

const steps = {
  first: [
    {
      question: "Qual seu sexo?",
      questionId: "1",
      type: "SELECTABLE-BUTTON-GROUP",
      buttons: [
        {
          label: "Masculino",
          image: null,
          hasChildInput: false,
        },
        {
          label: "Feminino",
          image: null,
          hasChildInput: false,
        },
      ],
    },
    {
      question: "Qual sua data de nascimento?",
      questionId: "2",
      type: "INPUT",
      input: {
        type: "INPUT-DATE",
        label: "",
        placeHolder: "dd/mm/aaaa",
      },
    },
    {
      question: "Qual o seu peso?",
      questionId: "3",
      type: "INPUT",
      input: {
        type: "INPUT-NUMERIC",
        label: "Kg",
        placeHolder: "N",
      },
    },
    {
      question: "Condições excludentes",
      label: "Algum destes tópicos se encaixa a você?",
      questionId: "4",
      type: "OPTION-LIST",
      buttons: [
        "Hepatite após os 11 anos de idade",
        "Hepatites B e C, AIDS (vírus HIV), doenças associadas ao vírus HTLV 1 e 2 e Doença de Chagas",
        "Uso de drogas ilícitas injetáveis",
        "Malária",
        "Doença de Parkinson",
      ],
    },
  ],
  second: [
    {
      question: "Você já doou sangue?",
      questionId: "5",
      type: "SELECTABLE-BUTTON-GROUP",
      buttons: [
        {
          label: "Sim",
          image: null,
          hasChildInput: true,
          childInput: {
            type: "INPUT-DATE",
            input: {
              label: "",
              placeHolder: "dd/mm/aaaa",
            },
          },
        },
        {
          label: "Não",
          image: null,
          hasChildInput: false,
        },
      ],
    },
    {
      question: "Você está gravida? Se sim, a quanto tempo?",
      questionId: "6",
      type: "SELECTABLE-BUTTON-GROUP",
      buttons: [
        {
          label: "Sim",
          image: null,
          hasChildInput: true,
          childInput: {
            type: "INPUT-NUMERIC",
            input: {
              label: "Semanas",
              placeHolder: "N",
            },
          },
        },
        {
          label: "Não",
          image: null,
          hasChildInput: false,
        },
      ],
    },
    {
      question: "Algum procedimento médico recente?",
      questionId: "7",
      type: "OPTION-LIST",
      buttons: [
        "Extração dentária ou tratamento de canal nos últimos 7 dias.",
        "Cirurgia odontológica com anestesia geral nas últimas 4 semanas.",
        "Endoscopia, colonoscopia ou rinoscopia nos últimos 6 meses.",
        "Cirurgia de médio porte (colecistectomia, histerectomia, etc.) nos últimos 6 meses.",
        "Cirurgias simples (apendicectomia, hernioplastia, amigdalectomia, etc.) nos últimos 3 meses.",
      ],
    },
  ],
};

async function processStep(nextStep, userId, data) {
  var response = {};

  try {
    switch (parseInt(nextStep)) {
      case 1:
        response = {
          isAble: true,
          invalidationMassage: "",
          nextStep: 2,
          hasNextStep: true,
          steps: Object.keys(steps).length,
          questions: steps.first,
          nextButton: "Próxima etapa",
        };
        break;

      case 2:
        var questions = steps.second;

        if (
          data
            .find((element) => element.questionId == "1")
            .answer.includes("Masculino")
        ) {
          questions = steps.second.filter(
            (question) => question.questionId !== "6"
          );
        } else {
          questions = steps.second;
        }

        await saveUserAnswers(userId, data);

        response = {
          isAble: await validateFirstStep(data, userId),
          invalidationMassage: "",
          nextStep: 3,
          hasNextStep: true,
          steps: Object.keys(steps).length,
          questions: questions,
          nextButton: "Finalizar",
        };
        break;

      default:
        const validation = validateSecondStep(data, userId);

        await saveUserAnswers(userId, data);

        response = {
          isAble: validation.isValid,
          invalidationMassage: validation.message,
          nextStep: null,
          hasNextStep: false,
          steps: Object.keys(steps).length,
          questions: [],
          nextButton: null,
        };
        break;
    }
  } catch (error) {
    console.error("Erro ao processar etapa:", error);
    res
      .status(500)
      .json({ message: "Erro ao processar etapa", error: error.message });
    return;
  }

  return response;
}

const validateFirstStep = async (answers, userId) => {
  const age = answers.find((element) => element.questionId == "2").answer;
  const height = answers.find((element) => element.questionId == "3").answer;
  const conditions = answers.find(
    (element) => element.questionId == "4"
  ).answer;

  const isValidAge = isOlderThan(age, 180);
  const isValidHeight = height >= 50;
  const isValidHealthCondition = conditions.length == 0;

  await formRepository.updateUserAge(age, userId);

  let aptitudeStatus = "";
  if (!isValidAge) {
    aptitudeStatus = "idade";
  } else if (!isValidHeight) {
    aptitudeStatus = "peso";
  } else if (!isValidHealthCondition) {
    aptitudeStatus = "saude";
  }

  if (aptitudeStatus) {
    await formRepository.updateUserAptitudeStatus(aptitudeStatus, userId);
  }

  return isValidAge && isValidHeight && isValidHealthCondition;
};

const validateSecondStep = async (answers, userId) => {
  console.log(answers);

  const answerElement = answers.find((element) => element.questionId == "5");
  const answer = answerElement ? answerElement.answer : ""; // Define como string vazia se não houver resposta
  const dateMatch = answer.match(/\b\d{2}\/\d{2}\/\d{4}\b/);

  let inputDate;
  if (dateMatch) {
    const [day, month, year] = dateMatch[0].split("/");
    inputDate = new Date(year, month - 1, day);
    await formRepository.updateUserDonorState(true, userId);
  } else {
    inputDate = null;
    await formRepository.updateUserDonorState(false, userId);
  }

  const isPregnantElement = answers.find(
    (element) => element.questionId == "6"
  );
  const isPregnant =
    isPregnantElement && isPregnantElement.answer.toLowerCase().includes("sim");

  const conditionsElement = answers.find(
    (element) => element.questionId == "7"
  );
  const conditions = conditionsElement ? conditionsElement.answer : "";

  const isValidAge = inputDate ? !isOlderThan(inputDate, 3) : true;
  const isValidPregnacyState = !isPregnant;
  const isValidMedicalProcedure = conditions.length === 0;

  let aptitudeStatus = "";
  if (!isValidAge) {
    aptitudeStatus = "tempo-doacao";
  } else if (!isValidPregnacyState) {
    aptitudeStatus = "gravidez";
  } else if (!isValidMedicalProcedure) {
    aptitudeStatus = "procedimento-medico";
  } else {
    aptitudeStatus = "apto";
  }

  if (aptitudeStatus) {
    await formRepository.updateUserAptitudeStatus(aptitudeStatus, userId);
  }

  const invalidationMessage = !isValidAge
    ? "A data de doação é muito recente, você não está apto."
    : !isValidPregnacyState
    ? "Você não pode doar enquanto estiver grávida."
    : !isValidMedicalProcedure
    ? "Você não está apto a doar devido a procedimento médico realizado dentro do prazo de 6 meses."
    : "";

  return {
    isValid: isValidAge && isValidPregnacyState && isValidMedicalProcedure,
    message: invalidationMessage,
  };
};

function isOlderThan(birthDateStr, months) {
  const [day, month, year] = birthDateStr.split("/");
  const birthDate = new Date(year, month - 1, day);

  const dateMonthsAgo = new Date();
  dateMonthsAgo.setMonth(dateMonthsAgo.getMonth() - months);

  return birthDate <= dateMonthsAgo;
}

const saveUserAnswers = async (userId, questions) => {
  const answerDocs = questions.map((question) => ({
    userId,
    question: question.question,
    questionId: question.questionId,
    answer: question.answer,
  }));

  try {
    await formRepository.saveUserAnswers(answerDocs);
  } catch (error) {
    console.error("Erro ao salvar as respostas no serviço:", error);
  }
};

export default {
  processStep,
};

import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const formRouter = Router();

formRouter.use(authMiddleware);

formRouter.get("/form", (req, res) => {
  const steps = [
    [
      {
        type: "QUESTION-TEXT",
        content: "Questionário exclusivo",
        id: "1",
      },
      {
        type: "PRIMARY-TEXT",
        content: "Algum destes tópicos se encaixa a você?",
      },
      {
        type: "VERTICAL-OPTION-LIST",
        options: [
          "Hepatite após os 11 anos de idade",
          "Hepatites B e C, AIDS (vírus HIV), doenças associadas ao vírus HTLV 1 e 2 e Doença de Chagas",
          "Uso de drogas ilícitas injetáveis",
          "Malária",
          "Doença de Parkinson",
        ],
      },
      {
        type: "NEXT-BUTTON",
        content: "Próxima pergunta",
      },
    ],
    /* [
      {
        type: "QUESTION-TEXT",
        content: "Qual seu sexo?",
        id: "2",
      },
      {
        type: "SELECTABLE-BUTTON-GROUP",
        buttons: [
          { label: "Masculino", image: null },
          {
            label: "Feminino",
            image: null,
            childOptions: [
              {
                type: "QUESTION-TEXT",
                content: "Você está gravida? Se sim, a quanto tempo?",
                id: "2.1",
              },
              {
                type: "SELECTABLE-BUTTON-INPUT-GROUP",
                button: { label: "Não", image: null },
                input: {
                  type: "INPUT-NUMERIC",
                  upperLabel: "Se sim, quantas semanas?",
                  sideLabel: "semanas",
                },
              },
            ],
          },
        ],
      },
      {
        type: "NEXT-BUTTON",
        content: "Próxima pergunta",
      },
    ], */
  ];

  res.send(steps);
});

export default formRouter;

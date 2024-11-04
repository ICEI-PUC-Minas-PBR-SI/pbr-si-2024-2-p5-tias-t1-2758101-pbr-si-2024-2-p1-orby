import Joi from "joi";

export const CreateUserQuestion = Joi.object({
  question: Joi.string().required(),
  answer: Joi.string().required(),
  questionId: Joi.string().required(),
  userId: Joi.object(),
  createdAt: Joi.string(),
});

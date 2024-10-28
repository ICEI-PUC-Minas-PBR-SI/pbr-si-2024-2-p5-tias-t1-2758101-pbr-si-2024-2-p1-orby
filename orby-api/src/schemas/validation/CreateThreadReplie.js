import Joi from "joi";

export const CreateReplie = Joi.object({
  text: Joi.string().required().min(3),
  userId: Joi.object(),
  threadId: Joi.object(),
  createdAt: Joi.string(),
});

import Joi from "joi";

export const CreateThread = Joi.object({
  title: Joi.string().required().min(3),
  description: Joi.string(),
  userId: Joi.object(),
  createdAt: Joi.string(),
});

export const UpdateThread = Joi.object({
  title: Joi.string().required().min(3),
  description: Joi.string(),
});

import formService from "../services/formService.js";

async function getFormStep(req, res) {
  const { step } = req.params; // Captura o parâmetro de rota
  const body = req.body;
  const { _id: userId } = res.locals.user;

  try {
    const response = await formService.processStep(step, userId, body);
    return res.send(response);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export default {
  getFormStep,
};

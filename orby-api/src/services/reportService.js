import reportRepository from "../repositories/reportRepository.js";

async function generateUsersReport() {
  return await reportRepository.generateUsersReport();
}

export default {
  generateUsersReport,
};

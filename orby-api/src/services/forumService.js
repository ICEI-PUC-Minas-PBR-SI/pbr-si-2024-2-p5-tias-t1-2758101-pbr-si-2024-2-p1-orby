import forumRepository from "../repositories/forumRepository.js";

async function createThread(body, id) {
  if (!id) throw new Error("User id is required");
  return await forumRepository.createThread({ ...body, userId: id });
}

async function changeThread(body, threadId, userId) {
  if (!userId) throw new Error("User id is required");
  if (!threadId) throw new Error("Thread id is required");

  return await forumRepository.changeThread(threadId, body);
}

async function deleteThread(threadId, userId) {
  if (!userId) throw new Error("User id is required");
  if (!threadId) throw new Error("Thread id is required");

  return await forumRepository.deleteThread(threadId, userId);
}

async function findAllThreads(userId) {
  return await forumRepository.findAllThreads(userId);
}

async function createReplie(body, threadId, userId) {
  if (!userId) throw new Error("User id is required");
  if (!threadId) throw new Error("Thread id is required");

  return await forumRepository.createReplie({
    ...body,
    threadId: threadId,
    userId: userId,
  });
}

async function findAllByThread(threadId, userId) {
  return await forumRepository.findAllByThread(threadId, userId);
}

export default {
  createThread,
  changeThread,
  deleteThread,
  findAllThreads,
  createReplie,
  findAllByThread,
};

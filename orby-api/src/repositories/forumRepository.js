import ThreadSchema from "../schemas/Thread.js";
import ReplieSchema from "../schemas/Replie.js";

async function createThread(data) {
  return ThreadSchema.create(data);
}

async function changeThread(threadId, data) {
  return await ThreadSchema.findOneAndUpdate(
    { _id: threadId }, // Filtro para encontrar a thread
    data, // Dados de atualização
    { new: true, runValidators: true } // Opções para retornar o novo documento e validar
  );
}

async function findAllThreads() {
  const threads = await ThreadSchema.find().populate("userId", "name");

  return threads.map((thread) => ({
    ...thread.toObject(),
    userName: thread.userId.name,
    userId: undefined,
  }));
}

async function createReplie(data) {
  return ReplieSchema.create(data);
}

async function findAllByThread(threadId, userId) {
  const thread = await ThreadSchema.findById(threadId);

  if (!thread) {
    throw new Error("Thread não encontrada");
  }

  const isUserThread = thread.userId.toString() === userId.toString();

  const replies = await ReplieSchema.find({ threadId: threadId }).populate(
    "userId",
    "name"
  );

  return {
    isUserThread: isUserThread,
    thread: thread,
    replies: replies.map((replie) => ({
      ...replie.toObject(),
      userName: replie.userId.name,
      userId: undefined,
      threadId: replie.threadId,
    })),
  };
}

export default {
  createThread,
  changeThread,
  findAllThreads,
  createReplie,
  findAllByThread,
};

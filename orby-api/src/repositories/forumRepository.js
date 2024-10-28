import ThreadSchema from "../schemas/Thread.js";
import ReplieSchema from "../schemas/Replie.js";

async function createThread(data) {
  return ThreadSchema.create(data);
}

async function changeThread(threadId, data) {
  return await ThreadSchema.findOneAndUpdate({ _id: threadId }, data, {
    new: true,
    runValidators: true,
  });
}

async function deleteThread(threadId, userId) {
  const thread = await ThreadSchema.findOne({ _id: threadId });

  if (!thread) {
    throw new Error("Thread não encontrada.");
  }

  if (thread.userId.toString() !== userId.toString()) {
    throw new Error("Você não tem permissão para deletar esta thread.");
  }

  await ThreadSchema.deleteOne({ _id: threadId });
  return { message: "Thread deletada com sucesso." };
}

async function findAllThreads(userId) {
  const threads = await ThreadSchema.find().populate("userId", "name");

  return threads.map((thread) => ({
    ...thread.toObject(),
    userName: thread.userId.name,
    userId: undefined,
    allowDelete: thread.userId._id.toString() === userId.toString(),
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
  deleteThread,
  findAllThreads,
  createReplie,
  findAllByThread,
};
